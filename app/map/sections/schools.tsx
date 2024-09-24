import { Source, Layer, type LayerProps } from "react-map-gl/maplibre"

import schools from "./skoly_zriadovatel_ksk_fewer.json"
import type { MapSection } from "../types"

export default function Schools() {
	const { opacity = 0.2, blur = 0.3, color = "#009A03" }: MapSection = {}
	const layerStyle: LayerProps = {
		id: "schools",
		type: "circle",
		paint: {
			"circle-radius": ["interpolate", ["exponential", 2], ["zoom"], 0, 0, 20, 40000],
			"circle-color": color,
			"circle-opacity": opacity,
			"circle-blur": blur
		},
		source: ""
	}
	const iconStyle: LayerProps = {
		id: "schools-icon",
		type: "symbol",
		source: "points",
		layout: {
			"icon-image": "school",
			"icon-size": [
				"interpolate",
				// Set the exponential rate of change to 1.5
				["exponential", 1.5],
				["zoom"],
				// When zoom is 10, icon will be 50% size.
				10,
				0.1,
				// When zoom is 22, icon will be 10% size.
				22,
				0.2
			]
		}
	}
	return (
		<>
			<Source key="skoly" type="geojson" data={schools}>
				<Layer {...layerStyle} />
				<Layer {...iconStyle} />
			</Source>
		</>
	)
}
