import { Layer, type LayerProps, Source } from "react-map-gl/maplibre"

import datajson from "./zeleznice.json"
import { reproject } from "reproject"
import proj4 from "proj4"

export default function Zeleznice() {
	const dataobj = reproject(
		datajson,
		"+proj=krovak +lat_0=49.5 +lon_0=24.8333333333333 +alpha=30.2881397527778 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs +type=crs",
		proj4.WGS84
	)
	const dataLayer: LayerProps = {
		id: "zeleznice",
		type: "line",
		paint: {
			"line-width": 3,
			"line-color": "#000000"
		}
	}
	const dataLayer2: LayerProps = {
		id: "zeleznice2",
		type: "line",
		paint: {
			"line-width": 2,
			"line-dasharray": [5, 10],
			"line-color": "#ffffff"
		}
	}
	return (
		<Source key="zeleznice" type="geojson" data={dataobj}>
			<Layer {...dataLayer} />
			<Layer {...dataLayer2} />
		</Source>
	)
}
