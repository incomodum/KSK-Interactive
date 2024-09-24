import { Layer, type LayerProps, Source } from "react-map-gl/maplibre"

import datajson from "./nezamestnanost.json"
import { reproject } from "reproject"
import proj4 from "proj4"

export default function Nezamestnanost() {
	const dataobj = reproject(
		datajson,
		"+proj=krovak +lat_0=49.5 +lon_0=24.8333333333333 +alpha=30.2881397527778 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs +type=crs",
		proj4.WGS84
	)
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
