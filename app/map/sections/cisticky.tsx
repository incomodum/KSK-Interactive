import { Source, Layer, type LayerProps } from "react-map-gl/maplibre"

import datajson from "./cisticky.json"
import type { MapSection } from "../types"
import { convertToWGS84 } from "~/lib/utils"

export default function Cisticky() {
	const dataobj = convertToWGS84(datajson)
	const { opacity = 0.5, color = "#D94F70" }: MapSection = {}
	const layerStyle: LayerProps = {
		id: "water-treatment",
		type: "circle",
		paint: {
			"circle-radius": ["interpolate", ["exponential", 2], ["zoom"], 0, 0, 20, 8000],
			"circle-color": color,
			"circle-opacity": opacity,
			"circle-blur": 0.3
		}
	}
	const iconStyle: LayerProps = {
		id: "water-treatment-icons",
		type: "symbol",
		source: "points",
		layout: {
			"icon-image": "water-treatment",
			"icon-size": ["interpolate", ["exponential", 1.5], ["zoom"], 4, 0.2, 22, 2]
		}
	}
	return (
		<>
			<Source key="water-treatment" type="geojson" data={dataobj}>
				<Layer {...layerStyle} />
				<Layer {...iconStyle} />
			</Source>
		</>
	)
}
