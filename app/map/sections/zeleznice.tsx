import { Layer, type LayerProps, Source } from "react-map-gl/maplibre"

import datajson from "./zeleznice.json"
import { convertToWGS84 } from "~/lib/utils"

export default function Zeleznice() {
	const dataobj = convertToWGS84(datajson)
	const dataLayer: LayerProps = {
		id: "zeleznice",
		type: "line",
		paint: {
			"line-width": 3,
			"line-color": "#000000"
		}
	}
	const dataLayer2: LayerProps = {
		id: "zeleznice2",
		type: "line",
		paint: {
			"line-width": 2,
			"line-dasharray": [5, 10],
			"line-color": "#ffffff"
		}
	}
	return (
		<Source key="zeleznice" type="geojson" data={dataobj}>
			<Layer {...dataLayer} />
			<Layer {...dataLayer2} />
		</Source>
	)
}
