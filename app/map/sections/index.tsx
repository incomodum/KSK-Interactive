import Mosty from "./mosty"
import Nezamestnanost from "./nezamestnanost"
import Obce from "./obce"
import Schools from "./schools"

interface SectionProps {
	name: string
	active: boolean
	layer: () => React.ReactNode
}

const Sections: SectionProps[] = [
	{
		name: "Školy",
		layer: () => <Schools />,
		active: true
	},
	{
		name: "Mosty",
		layer: () => <Mosty />,
		active: false
	},
	{
		name: "Zeleznice",
		layer: () => <Zeleznice />,
		active: false
	},
	{
		name: "Diaľnice a rýchlostné cesty",
		layer: () => <Dialnice />,
		active: false
	},
	{
		name: "Čističky Odpadových Vôd",
		layer: () => <Cisticky />,
		active: false
	},
	{
		name: "Obce",
		layer: () => <Obce />,
		active: false
	},
	{
		name: "Nezamestnanosť",
		layer: () => <Nezamestnanost />,
		active: false
	}
]

import { create } from "zustand"
import { combine } from "zustand/middleware"
import Zeleznice from "./zeleznice"
import Cisticky from "./cisticky"
import Dialnice from "./dialnice"

export const useLayerStore = create(
	combine({ layers: Sections }, (set, get) => ({
		active: () => get().layers.filter((v) => v.active),
		toggle: (name: string) =>
			set({
				layers: [
					...get().layers.map((v) => {
						if (v.name === name) {
							return {
								...v,
								active: !v.active
							}
						}
						return v
					})
				]
			})
	}))
)
