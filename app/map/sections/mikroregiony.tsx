import { Source, Layer, type LayerProps } from "react-map-gl/maplibre"

import datajson from "./mikroregiony.json"

// function _fixData(data: GeoJSON.FeatureCollection<GeoJSON.Geometry>) {
// 	const bbox = [...convertToWGS84(data?.bbox?.[0], data?.bbox?.[1]), ...convertToWGS84(data?.bbox?.[2], data?.bbox?.[3])]
// 	const features = data.features.map((v) => {
// 		console.log(v)
// 		const bbox = [...convertToWGS84(v?.bbox?.[0], v?.bbox?.[1]), ...convertToWGS84(v?.bbox?.[2], v?.bbox?.[3])]
// 		const geometry = v.geometry as unknown as { coordinates: [number, number][][][] }
// 		const coordinates = geometry.coordinates?.[0][0]?.map((v) => convertToWGS84(v[0], v[1]))
// 		const data = {
// 			...v,
// 			bbox,
// 			geometry: {
// 				type: v.geometry.type,
// 				bbox: v.geometry.bbox,
// 				coordinates: [[coordinates]]
// 			}
// 		}

// 		return data
// 	})

// 	return {
// 		...data,
// 		bbox,
// 		features,
// 		crs: { properties: { name: "urn:ogc:def:crs:EPSG:4326" }, type: "name" }
// 	}
// }

// const dataobj = _fixData(data)

export default function MikroRegiony() {
	const dataLayer: LayerProps = {
		id: "data",
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
		<Source key="mikroregiony" type="geojson" data={datajson}>
			<Layer {...dataLayer} />
		</Source>
	)
}
