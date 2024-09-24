"use client"

import "maplibre-gl/dist/maplibre-gl.css"
import MapContainer from "react-map-gl/maplibre"

import Schools from "./sections/schools"
import { Search } from "lucide-react"
import type { MapLibreEvent } from "maplibre-gl"

export default function MapComponent() {
	function onLoad(e: MapLibreEvent) {
		const school = new Image()
		school.onload = () => {
			if (!e.target?.hasImage("school")) {
				e.target.addImage("school", school, { sdf: true })
			}
		}
		school.src = "/school.svg"
	}

	return (
		<div className="relative w-full h-full">
			<MapContainer
				initialViewState={{
					latitude: 48.674444,
					longitude: 21.279611,
					zoom: 9
				}}
				minZoom={9}
				maxZoom={18}
				onLoad={onLoad}
				style={{ width: "100%", height: "100%", zIndex: 1 }}
				mapStyle="https://api.maptiler.com/maps/streets/style.json?key=MXHW1WQksbFLUTsILGLR"
				interactiveLayerIds={["data"]}
			>
				<Schools />
			</MapContainer>

			<div className="absolute left-0 top-0 z-10 py-3 px-7 flex flex-col gap-3">
				<>
					<div className="relative hidden w-[350px] flex-grow items-center md:flex">
						<Search className="absolute left-3 h-4 w-4 text-[#808080]" />
						<input
							placeholder="Vyhľadaj"
							// value={value}
							// onInput={(event) => onChange?.((event.target as HTMLInputElement).value)}
							className="flex flex-grow rounded-[8px] border p-2 pl-8 font-medium text-[14px] transition placeholder:text-[#808080] focus:outline-none"
						/>
					</div>
					<button type="button" className="rounded-[8px] bg-white border p-2 md:hidden w-min">
						<Search className="text-[#808080]" />
					</button>
				</>
				<div className="bg-white p-2 w-[350px] border rounded-[8px]">
					<p>Aktívne dáta</p>
				</div>
			</div>
		</div>
	)
}
