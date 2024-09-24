import { Source, Layer, type LayerProps } from "react-map-gl/maplibre"

import datajson from "./cisticky.json"
import type { MapSection } from "../types"
import { reproject } from "reproject"
import proj4 from "proj4"

export default function Cisticky() {
	const dataobj = reproject(
		datajson,
		"+proj=krovak +lat_0=49.5 +lon_0=24.8333333333333 +alpha=30.2881397527778 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs +type=crs",
		proj4.WGS84
	)
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
