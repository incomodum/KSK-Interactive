import { Source, Layer, type LayerProps } from "react-map-gl/maplibre"

import schools from "./skoly_zriadovatel_ksk_fewer.json"
import type { MapSection } from "../types"

export default function Schools() {
	const { opacity = 0.2, blur = 0.3, color = "#74E077" }: MapSection = {}
	const layerStyle: LayerProps = {
		id: "schools",
		type: "circle",
		paint: {
			"circle-radius": ["interpolate", ["exponential", 2], ["zoom"], 0, 0, 20, 200000],
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
			"icon-size": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 1, 22, 0.7]
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
