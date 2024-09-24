import { Source, Layer, type CircleLayer } from "react-map-gl/maplibre"

import schools from "./skoly_zriadovatel_ksk_fewer.json"
import type { MapSection } from "../types"

export default function Schools({ opacity = 0.2, blur = 0.3, color = "#009A03" }: MapSection) {
	const layerStyle: CircleLayer = {
		id: "point",
		type: "circle",
		paint: {
			"circle-radius": ["interpolate", ["exponential", 2], ["zoom"], 0, 0, 20, 40000],
			"circle-color": color,
			"circle-opacity": opacity,
			"circle-blur": blur
		},
		source: ""
	}
	return (
		<Source key="skoly" type="geojson" data={schools}>
			<Layer {...layerStyle} />
		</Source>
	)
}
