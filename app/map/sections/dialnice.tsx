import { Layer, type LayerProps, Source } from "react-map-gl/maplibre"

import datajson from "./dialnice.json"
import { convertToWGS84 } from "~/lib/utils"

export default function Dialnice() {
	const dataobj = convertToWGS84(datajson)
	const dataLayer: LayerProps = {
		id: "dialnice",
		type: "line",
		// beforeId: "bridges",
		paint: {
			"line-width": 6,
			"line-color": "yellow"
		}
	}
	return (
		<Source key="dialnice" type="geojson" data={dataobj}>
			<Layer {...dataLayer} />
		</Source>
	)
}
