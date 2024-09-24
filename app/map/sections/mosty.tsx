import { Source, Layer, type LayerProps } from "react-map-gl/maplibre"

import bridges from "./mosty.json"
import type { MapSection } from "../types"

export default function Schools() {
	const { opacity = 0.5, color = "#009A03" }: MapSection = {}
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
			"icon-size": [
				"interpolate",
				// Set the exponential rate of change to 1.5
				["exponential", 1.5],
				["zoom"],
				// When zoom is 10, icon will be 50% size.
				4,
				0.1,
				// When zoom is 22, icon will be 10% size.
				22,
				0.8
			]
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
