import { Layer, type LayerProps, Source } from "react-map-gl/maplibre"

import datajson from "./nezamestnanost.json"
import { convertToWGS84 } from "~/lib/utils"

export default function Nezamestnanost() {
	const dataobj = convertToWGS84(datajson)
	const dataLayer: LayerProps = {
		id: "nezamestnanost",
		type: "fill",
		paint: {
			"fill-color": ["interpolate", ["linear"], ["get", "stav_uoz_spolu"], 1000, "green", 2000, "yellow", 3000, "orange", 5000, "red"],
			"fill-opacity": 0.5
		}
	}
	return (
		<Source key="nezamestnatnost" type="geojson" data={dataobj}>
			<Layer {...dataLayer} />
		</Source>
	)
}
