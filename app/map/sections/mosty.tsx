import { Source, Layer, type LayerProps } from "react-map-gl/maplibre"

import bridges from "./mosty.json"
import type { MapSection } from "../types"

export default function Schools() {
	const { opacity = 0.5, color = "#49DED7" }: MapSection = {}
	const layerStyle: LayerProps = {
		id: "bridges",
		type: "circle",
		paint: {
			"circle-radius": ["interpolate", ["exponential", 2], ["zoom"], 0, 0, 20, 1000],
			"circle-color": color,
			"circle-opacity": opacity
		}
	}
	const iconStyle: LayerProps = {
		id: "bridges-icons",
		type: "symbol",
		source: "points",
		layout: {
			"icon-image": "bridge",
			"icon-size": ["interpolate", ["exponential", 1.5], ["zoom"], 4, 0.1, 22, 0.8]
		}
	}
	return (
		<>
			<Source key="mosty" type="geojson" data={bridges}>
				<Layer {...layerStyle} />
				<Layer {...iconStyle} />
			</Source>
		</>
	)
}
