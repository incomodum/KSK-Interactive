import { Source, Layer, type LayerProps } from "react-map-gl/maplibre"

import datajson from "./mikroregiony.json"

export default function Obce() {
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
		<Source key="mikroregiony" type="geojson" data={datajson}>
			<Layer {...dataLayer} />
		</Source>
	)
}
