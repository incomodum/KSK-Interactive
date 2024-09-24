"use client"

import "maplibre-gl/dist/maplibre-gl.css"
import MapContainer from "react-map-gl/maplibre"

import { ChevronDown, ChevronUp, Search } from "lucide-react"
import type { MapLibreEvent } from "maplibre-gl"
import { useLayerStore } from "./sections"
import { cn } from "~/lib/utils"
import { useReducer } from "react"

export default function MapComponent() {
	const store = useLayerStore()

	const [open, toggle] = useReducer((v) => !v, true)

	function onLoad(e: MapLibreEvent) {
		const school = new Image()
		school.onload = () => {
			if (!e.target?.hasImage("school")) {
				e.target.addImage("school", school, { sdf: true })
			}
		}
		school.src = "/school.svg"

		const bridge = new Image()
		bridge.onload = () => {
			if (!e.target?.hasImage("bridge")) {
				e.target.addImage("bridge", bridge, { sdf: true })
			}
		}
		bridge.src = "/bridge.svg"

		const watertreatment = new Image()
		watertreatment.onload = () => {
			if (!e.target?.hasImage("water-treatment")) {
				e.target.addImage("water-treatment", watertreatment, { sdf: true })
			}
		}
		watertreatment.src = "/water-treatment.svg"
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
				{store.active().map(({ layer: Layer, name }) => (
					<Layer key={name} />
				))}
			</MapContainer>

			<div className="absolute left-0 top-0 z-10 py-3 px-7 flex flex-row md:flex-col max-w-full overflow-x-hidden gap-3">
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
					<button type="button" className="rounded-[8px] h-min bg-white border p-2 md:hidden w-min">
						<Search className="text-[#808080]" />
					</button>
				</>
				<div className={cn("bg-[#F3F3F3] p-2 max-w-[90%] md:max-w-[350px] w-[350px] border flex flex-col gap-3 rounded-[8px]")}>
					<div className="flex flex-row justify-between">
						<p className="text-[#2B2B2B] font-medium">Dáta</p>
						<button onClick={toggle} type="button">
							{open && <ChevronDown />}
							{!open && <ChevronUp />}
						</button>
					</div>
					{open &&
						store.layers.map((v) => (
							<div className="flex flex-row w-full justify-between bg-white p-3 rounded-[12px]" key={v.name}>
								<p>{v.name}</p>
								<button type="button" className="text-black" onClick={() => store.toggle(v.name)}>
									{v.active && (
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
											<title>Eye</title>
											<g fill="none" stroke="currentColor" strokeWidth="1.5">
												<path
													d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4s7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704Z"
													opacity="0.5"
												/>
												<path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
											</g>
										</svg>
									)}
									{!v.active && (
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
											<title>Eye closed</title>
											<path
												fill="currentColor"
												d="M2.69 6.705a.75.75 0 0 0-1.38.59zm12.897 6.624l-.274-.698zm7.102-6.034a.75.75 0 0 0-1.378-.59zM19 11.13l-.513-.547zm-7 2.121c-3.224 0-5.539-1.605-7.075-3.26a13.6 13.6 0 0 1-1.702-2.28a12 12 0 0 1-.507-.946l-.022-.049l-.004-.01l-.001-.001L2 7l-.69.296h.001l.001.003l.003.006l.04.088q.039.088.117.243c.103.206.256.496.462.841c.41.69 1.035 1.61 1.891 2.533C5.54 12.855 8.224 14.75 12 14.75zm3.313-.62c-.97.383-2.071.62-3.313.62v1.5c1.438 0 2.725-.276 3.862-.723zM22 7l-.69-.296h.001v.002l-.007.013l-.028.062a12 12 0 0 1-.64 1.162a13.3 13.3 0 0 1-2.15 2.639l1.027 1.094a14.8 14.8 0 0 0 3.122-4.26l.039-.085l.01-.024l.004-.007v-.003h.001v-.001zm-3.513 3.582c-.86.806-1.913 1.552-3.174 2.049l.549 1.396c1.473-.58 2.685-1.444 3.651-2.351z"
											/>
											<path
												fill="currentColor"
												d="M12.75 14a.75.75 0 0 0-1.5 0zm3.466-1.08a.75.75 0 1 0-1.257.818zm-7.175.818a.75.75 0 0 0-1.257-.818zm-2.67 1.353a.75.75 0 0 0 1.258.818zm13.16-4.492a.75.75 0 1 0-1.061 1.06zm.439 2.56a.75.75 0 1 0 1.06-1.06zM11.25 16.5a.75.75 0 0 0 1.5 0zm5.121-.59a.75.75 0 1 0 1.258-.819zm-10.84-4.25a.75.75 0 1 0-1.061-1.061zm-2.561.439a.75.75 0 1 0 1.06 1.06zm4.814.82l-1.413 2.172l1.258.818l1.412-2.171zm10.686-1.26l1.5 1.5l1.06-1.06l-1.5-1.5zM11.25 14v2.5h1.5V14zm3.709-.262l1.412 2.171l1.258-.818l-1.413-2.171zm-10.49-3.14l-1.5 1.5L4.03 13.16l1.5-1.5z"
												opacity="0.5"
											/>
										</svg>
									)}
								</button>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}
