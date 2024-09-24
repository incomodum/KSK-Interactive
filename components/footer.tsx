import Link from "next/link"
import { memo } from "react"

function Footer() {
	return (
		<footer className="flex flex-col z-20 bg-[#194E8D] justify-between mt-32 py-10 px-4 md:px-[150px]">
			{/* <div className="flex flex-row w-full"></div> */}
			<div className="w-full flex flex-row justify-center">
				<div className="flex flex-col w-1/2">
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
							info@geoportalksk.sk
							<br />
							+421 557 268 431
						</p>
					</div>
					<Link href="/">
						<div className="h-full flex flex-row items-center py-1 mt-5">
							<svg width="76" height="40" viewBox="0 0 74 59" fill="none" xmlns="http://www.w3.org/2000/svg">
								<title>ksk</title>
								<path
									d="M3 12.5799V32.1108M3 51.6417V32.1108M3 32.1108H12.0788M12.0788 32.1108L25.697 12.5799M12.0788 32.1108L21.8061 47.0845C36.7212 71.8237 83.4121 39.2722 75.6303 19.7412C69.1455 15.184 34.1273 45.1314 29.5879 38.6211C31.5333 20.3923 76.9273 -9.55513 86.0061 8.67371V32.1108M86.0061 52.2927V32.1108M86.0061 32.1108H96.3818M96.3818 32.1108L109.352 12.5799M96.3818 32.1108L110 52.2927"
									stroke="white"
									strokeWidth="5"
									strokeLinecap="square"
									strokeLinejoin="round"
								/>
							</svg>
							<div className="h-[40px] w-[1px] mr-4 bg-white opacity-50" />
							<p className="text-white font-bold text-xl">Interactive</p>
						</div>
					</Link>
				</div>
				<div className="w-1/3 h-full bg-white rounded-3xl p-10">
					<h2 className="font-bold text-xl">Kontaktujte nás</h2>
					<div className="flex flex-row gap-5 mt-5">
						<div>
							<label for="name" className="block text-gray-800 font-semibold text-sm">
								Meno
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="name"
									className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
								/>
							</div>
						</div>
						<div>
							<label for="email" className="block text-gray-800 font-semibold text-sm">
								Email
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="email"
									className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
								/>
							</div>
						</div>
					</div>
					<div className="mt-5">
						<label for="email" className="block text-gray-800 font-semibold text-sm">
							Správa
						</label>
						<div className="mt-2">
							<input
								type="text"
								name="email"
								className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
							/>
						</div>
					</div>
					<div className="flex flex-row items-center justify-end">
						<button type="button" className="bg-[#F2A93B] text-white p-2 w-1/2 rounded-xl mt-5">
							Odoslať
						</button>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default memo(Footer)
