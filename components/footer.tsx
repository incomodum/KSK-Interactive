import Link from "next/link"
import { memo } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

function Footer() {
	return (
		<footer className="flex flex-col z-20 bg-[#194E8D] justify-between py-10 px-4 md:px-[150px]">
			<div className="w-full flex flex-col md:flex-row-reverse gap-5 justify-center">
				<div className="w-full md:w-1/3 h-full bg-white rounded-3xl p-10">
					<h2 className="font-bold text-xl">Kontaktujte nás</h2>
					<div className="flex flex-row gap-5 mt-5">
						<div className="flex flex-col w-auto flex-grow gap-2">
							<Label>Meno</Label>
							<Input type="text" autoComplete="name" />
						</div>
						<div className="flex flex-col w-auto flex-grow gap-2">
							<Label>Email</Label>
							<Input type="email" autoComplete="work email" />
						</div>
					</div>
					<div className="flex flex-col w-full mt-4 gap-2">
						<Label>Správa</Label>
						<Textarea className="w-full" />
					</div>
					<div className="flex flex-row items-center justify-end">
						<button type="submit" className="bg-[#F2A93B] text-white p-2 w-1/2 rounded-xl mt-5">
							Odoslať
						</button>
					</div>
				</div>
				<div className="flex flex-col h-auto justify-between w-1/2">
					<div>
						<p className="text-white">
							Košický samosprávny kraj
							<br /> Úrad Košického samosprávneho kraja
							<br /> Námestie Maratónu mieru 1<br /> 042 66 Košice
							<br />
						</p>
						<p className="text-white mt-10">
							Odbor regionálneho rozvoja
							<br />
							referát geopriestorových dát a analýz
						</p>
						<p className="text-white mt-10">
							<a href="mailto:info@geoportalksk.sk">info@geoportalksk.sk</a>
							<br />
							<a href="tel:+421557268431">+421 557 268 431</a>
						</p>
					</div>
					<Link href="/">
						<div className="h-full flex flex-row items-center py-1 mt-5">
							<svg width="74" height="59" viewBox="0 0 114 59" fill="none" xmlns="http://www.w3.org/2000/svg">
								<title>ksk</title>
								<path
									d="M3 12.5799V32.1108M3 51.6417V32.1108M3 32.1108H12.0788M12.0788 32.1108L25.697 12.5799M12.0788 32.1108L21.8061 47.0845C36.7212 71.8237 83.4121 39.2722 75.6303 19.7412C69.1455 15.184 34.1273 45.1314 29.5879 38.6211C31.5333 20.3923 76.9273 -9.55513 86.0061 8.67371V32.1108M86.0061 52.2927V32.1108M86.0061 32.1108H96.3818M96.3818 32.1108L109.352 12.5799M96.3818 32.1108L110 52.2927"
									stroke="white"
									strokeWidth="5"
									strokeLinecap="square"
									strokeLinejoin="round"
								/>
							</svg>
							<div className="h-[40px] w-[1px] mx-4 bg-white opacity-50" />
							<p className="text-white font-bold text-xl">Interactive</p>
						</div>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default memo(Footer)
