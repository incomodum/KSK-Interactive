import { Source, Layer, type LayerProps } from "react-map-gl/maplibre"

import datajson from "./mikroregiony.json"
import { reproject } from "reproject"
import proj4 from "proj4"

export default function Obce() {
	const dataobj = reproject(
		datajson,
		"+proj=krovak +lat_0=49.5 +lon_0=24.8333333333333 +alpha=30.2881397527778 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs +type=crs",
		proj4.WGS84
	)
	const dataLayer: LayerProps = {
		id: "mikroregiony",
		type: "fill",
		paint: {
			"fill-color": [
				"match",
				["get", "okres"],
				"Okres Gelnica",
				"blue",
				"Okres Košice I",
				"cyan",
				"Okres Košice II",
				"magenta",
				"Okres Košice III",
				"lime",
				"Okres Košice IV",
				"orange",
				"Okres Sobrance",
				"black",
				"Okres Košice - okolie",
				"red",
				"Okres Trebišov",
				"yellow",
				"Okres Michalovce",
				"brown",
				"Okres Rožňava",
				"purple",
				"Okres Spišská Nová Ves",
				"green",
				"white"
			],
			"fill-opacity": 0.5
		}
	}
	return (
		<Source key="mikroregiony" type="geojson" data={dataobj}>
			<Layer {...dataLayer} />
		</Source>
	)
}
