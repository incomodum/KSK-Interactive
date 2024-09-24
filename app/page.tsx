"use client"

import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import NumberAnimation from "~/components/animation"

export default function Home() {
	return (
		<div className="flex flex-col items-center w-full">
			<main className="h-[calc(80vh-75px)] w-full flex items-center justify-center">
				<Carousel
					plugins={[
						Autoplay({
							delay: 2000
						})
					]}
					opts={{
						loop: true,
						breakpoints: {
							"(min-width: 768px)": { active: false }
						}
					}}
					className="max-w-full md:max-w-[1200px] w-full"
				>
					<CarouselContent className="-ml-4">
						<CarouselItem className="md:basis-1/3 pl-4 w-full flex justify-center items-center">
							<div className="bg-white py-6 px-5 rounded-[30px] w-[90%] md:w-[345px] md:ml-0 text-center h-[460px] flex flex-col items-center">
								<svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
									<title>Info</title>
									<path
										opacity="0.5"
										d="M141.167 77C141.167 112.439 112.439 141.167 77.0002 141.167C41.5609 141.167 12.8335 112.439 12.8335 77C12.8335 41.5607 41.5609 12.8333 77.0002 12.8333C112.439 12.8333 141.167 41.5607 141.167 77Z"
										fill="#194E8D"
									/>
									<path
										d="M77.0002 113.896C78.2765 113.896 79.5006 113.389 80.4031 112.486C81.3056 111.584 81.8127 110.36 81.8127 109.083V70.5833C81.8127 69.307 81.3056 68.0829 80.4031 67.1804C79.5006 66.2779 78.2765 65.7708 77.0002 65.7708C75.7238 65.7708 74.4997 66.2779 73.5972 67.1804C72.6947 68.0829 72.1877 69.307 72.1877 70.5833V109.083C72.1877 111.74 74.3437 113.896 77.0002 113.896ZM77.0002 44.9167C78.702 44.9167 80.3341 45.5927 81.5374 46.7961C82.7408 47.9994 83.4168 49.6315 83.4168 51.3333C83.4168 53.0351 82.7408 54.6672 81.5374 55.8706C80.3341 57.074 78.702 57.75 77.0002 57.75C75.2984 57.75 73.6663 57.074 72.4629 55.8706C71.2595 54.6672 70.5835 53.0351 70.5835 51.3333C70.5835 49.6315 71.2595 47.9994 72.4629 46.7961C73.6663 45.5927 75.2984 44.9167 77.0002 44.9167Z"
										fill="#194E8D"
									/>
								</svg>
								<p className="text-2xl">
									Aktuálne informácie o<br /> Košickom Kraji
								</p>
								<p className="mt-6 opacity-50">
									Preskúmajte aktuálne dáta
									<br /> o Košickom kraji
								</p>
								<div className="flex flex-grow" />
								<button className="w-full bg-[#194E8D] text-white rounded-[14px] py-3 font-bold" type="button">
									Zistiť Viac
								</button>
							</div>
						</CarouselItem>
						<CarouselItem className="md:basis-1/3 pl-4 flex justify-center items-center">
							<div className="bg-white py-6 px-5 rounded-[30px] w-[90%] md:w-[345px] text-center h-[460px] flex flex-col items-center">
								<svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
									<title>Map</title>
									<path
										opacity="0.5"
										d="M19.25 55.8892V108.044C19.25 114.736 19.25 118.086 21.0659 120.608C22.8818 123.129 26.0581 124.188 32.4106 126.306L39.886 128.795C48.6576 131.721 53.0402 133.184 57.4613 132.588L57.75 132.549V42.7158C57.0271 42.8234 56.2987 42.8898 55.5683 42.9147C52.1033 43.0366 48.6768 41.888 41.8302 39.6101C32.8597 36.6199 28.3745 35.1248 24.9608 36.6456C23.7511 37.1838 22.6655 37.9658 21.7717 38.9427C19.25 41.7083 19.25 46.431 19.25 55.8892ZM134.75 98.1108V45.9626C134.75 39.27 134.75 35.9205 132.934 33.3988C131.118 30.877 127.942 29.8182 121.589 27.7007L114.114 25.2111C105.342 22.2851 100.96 20.8221 96.5387 21.4188L96.25 21.4509V111.284C96.9772 111.177 97.7044 111.111 98.4317 111.085C101.897 110.963 105.323 112.112 112.17 114.39C121.14 117.38 125.626 118.875 129.039 117.354C130.249 116.816 131.335 116.034 132.228 115.057C134.75 112.292 134.75 107.569 134.75 98.1108Z"
										fill="#194E8D"
									/>
									<path
										d="M59.3349 42.4142C58.8087 42.5297 58.2804 42.6302 57.75 42.7157V132.549C62.0492 131.882 65.8928 129.321 73.4195 124.304L82.2873 118.387C88.2933 114.383 91.2963 112.381 94.6715 111.586C95.1848 111.457 95.711 111.357 96.25 111.284V21.4509C91.9508 22.1118 88.1072 24.6785 80.5805 29.6899L71.7127 35.6061C65.7067 39.6101 62.7037 41.6121 59.3285 42.4077"
										fill="#194E8D"
									/>
								</svg>

								<p className="text-2xl">Interaktívna mapa</p>
								<p className="mt-6 opacity-50">
									Preskúmajte Košický kraj pomocou našej interaktívnej mapy, ktorá vám poskytne komplexný pohľad na stav, v ktorom
									sa nachádza
								</p>
								<div className="flex flex-grow" />
								<button
									disabled
									className="w-full bg-[#9C9C9C] cursor-not-allowed text-white rounded-[14px] py-3 font-bold"
									type="button"
								>
									Pripravujeme
								</button>
							</div>
						</CarouselItem>
						<CarouselItem className="md:basis-1/3 flex justify-center items-center pl-4">
							<div className="bg-white py-6 px-5 rounded-[30px] w-[90%] md:w-[345px] text-center h-[460px] flex flex-col items-center">
								<svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
									<title>Map</title>
									<path
										opacity="0.5"
										d="M19.25 55.8892V108.044C19.25 114.736 19.25 118.086 21.0659 120.608C22.8818 123.129 26.0581 124.188 32.4106 126.306L39.886 128.795C48.6576 131.721 53.0402 133.184 57.4613 132.588L57.75 132.549V42.7158C57.0271 42.8234 56.2987 42.8898 55.5683 42.9147C52.1033 43.0366 48.6768 41.888 41.8302 39.6101C32.8597 36.6199 28.3745 35.1248 24.9608 36.6456C23.7511 37.1838 22.6655 37.9658 21.7717 38.9427C19.25 41.7083 19.25 46.431 19.25 55.8892ZM134.75 98.1108V45.9626C134.75 39.27 134.75 35.9205 132.934 33.3988C131.118 30.877 127.942 29.8182 121.589 27.7007L114.114 25.2111C105.342 22.2851 100.96 20.8221 96.5387 21.4188L96.25 21.4509V111.284C96.9772 111.177 97.7044 111.111 98.4317 111.085C101.897 110.963 105.323 112.112 112.17 114.39C121.14 117.38 125.626 118.875 129.039 117.354C130.249 116.816 131.335 116.034 132.228 115.057C134.75 112.292 134.75 107.569 134.75 98.1108Z"
										fill="#194E8D"
									/>
									<path
										d="M59.3349 42.4142C58.8087 42.5297 58.2804 42.6302 57.75 42.7157V132.549C62.0492 131.882 65.8928 129.321 73.4195 124.304L82.2873 118.387C88.2933 114.383 91.2963 112.381 94.6715 111.586C95.1848 111.457 95.711 111.357 96.25 111.284V21.4509C91.9508 22.1118 88.1072 24.6785 80.5805 29.6899L71.7127 35.6061C65.7067 39.6101 62.7037 41.6121 59.3285 42.4077"
										fill="#194E8D"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M92.8334 77C92.8334 85.7448 85.7448 92.8333 77.0001 92.8333C68.2553 92.8333 61.1667 85.7448 61.1667 77C61.1667 68.2553 68.2553 61.1667 77.0001 61.1667C85.7448 61.1667 92.8334 68.2553 92.8334 77Z"
										fill="#90A8C6"
									/>
									<path
										d="M78.1875 67.5C78.1875 67.1851 78.0624 66.883 77.8397 66.6603C77.617 66.4376 77.3149 66.3125 77 66.3125C76.6851 66.3125 76.383 66.4376 76.1603 66.6603C75.9376 66.883 75.8125 67.1851 75.8125 67.5V68.0019C73.2317 68.4642 71.0625 70.4038 71.0625 73.0417C71.0625 76.0769 73.9331 78.1875 77 78.1875C79.1803 78.1875 80.5625 79.622 80.5625 80.9583C80.5625 82.2947 79.1803 83.7292 77 83.7292C74.8213 83.7292 73.4375 82.2947 73.4375 80.9583C73.4375 80.6434 73.3124 80.3413 73.0897 80.1186C72.867 79.8959 72.5649 79.7708 72.25 79.7708C71.9351 79.7708 71.633 79.8959 71.4103 80.1186C71.1876 80.3413 71.0625 80.6434 71.0625 80.9583C71.0625 83.5962 73.2317 85.5358 75.8125 85.9981V86.5C75.8125 86.8149 75.9376 87.117 76.1603 87.3397C76.383 87.5624 76.6851 87.6875 77 87.6875C77.3149 87.6875 77.617 87.5624 77.8397 87.3397C78.0624 87.117 78.1875 86.8149 78.1875 86.5V85.9981C80.7683 85.5358 82.9375 83.5962 82.9375 80.9583C82.9375 77.9231 80.0669 75.8125 77 75.8125C74.8213 75.8125 73.4375 74.378 73.4375 73.0417C73.4375 71.7053 74.8213 70.2708 77 70.2708C79.1803 70.2708 80.5625 71.7053 80.5625 73.0417C80.5625 73.3566 80.6876 73.6587 80.9103 73.8814C81.133 74.1041 81.4351 74.2292 81.75 74.2292C82.0649 74.2292 82.367 74.1041 82.5897 73.8814C82.8124 73.6587 82.9375 73.3566 82.9375 73.0417C82.9375 70.4038 80.7683 68.4642 78.1875 68.0019V67.5Z"
										fill="#194E8D"
									/>
								</svg>

								<p className="text-2xl">Podnikateľská mapa</p>
								<p className="mt-6 opacity-50">
									Nájdi si ideálne miesto v Košickom kraji. Vďaka interaktívnej mape s odporúčanými zónami pre vaše podnikanie na
									mieru.
								</p>
								<div className="flex flex-grow" />
								<Link href="/map" className="w-full">
									<button className="w-full bg-[#194E8D] text-white rounded-[14px] py-3 font-bold" type="button">
										Otvoriť
									</button>
								</Link>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</main>
			<section className="w-full flex flex-col items-center gap-10">
				<h2 className="text-3xl text-start w-full font-bold max-w-[1500px] px-44 mt-10">
					Aktuality v regionálnom <b className="text-[#194E8D]">rozvoji</b>
				</h2>
				<div className="max-w-full w-full overflow-x-scroll justify-center flex flex-row gap-11 px-2 md:px-10 no-scrollbar">
					<Link
						className="rounded-[20px] h-[267px] min-w-full md:min-w-[619px] relative overflow-clip isolate"
						href="https://web.vucke.sk/sk/novinky/prichod-volva-vyvola-masivne-investicie-aj-kosickom-kraji.html"
					>
						<img
							src="https://cdn.sita.sk/sites/32/2023/02/b90a1341-1-scaled-1.jpg"
							alt=""
							className="w-full object-cover h-full absolute -z-10 top-0 left-0"
						/>
						<div className="flex flex-col h-full justify-between p-5 text-white font-bold text-2xl bg-gradient-to-t from-black to-[#00000000]">
							<p>18.8.2024</p>
							<p>Príchod Volva vyvolá masívne investície aj v Košickom kraji</p>
						</div>
					</Link>
					<Link
						className="rounded-[20px] h-[267px] min-w-full md:min-w-[619px] relative overflow-clip isolate"
						href="https://web.vucke.sk/sk/kompetencie/regionalny-rozvoj/aktuality/kosicky-kraj-bude-pomocou-hackathonu-hladat-napad-ako-vytvorit-inovativny-regionalny-rozvojovy-porta.html"
					>
						<img
							src="https://www.hacknime.to/wp-content/uploads/2022/11/banner-3.jpg"
							alt=""
							className="w-full object-cover h-full absolute -z-10 top-0 left-0"
						/>
						<div className="flex flex-col h-full justify-between p-5 text-white font-bold text-2xl bg-gradient-to-t from-black to-[#00000000]">
							<p>23.9.2024</p>
							<p>Košický kraj bude pomocou hackathonu hľadať nápad, ako vytvoriť inovatívny regionálny rozvojový portál</p>
						</div>
					</Link>
					<Link
						className="rounded-[20px] h-[267px] min-w-full md:min-w-[619px] relative overflow-clip isolate"
						href="https://web.vucke.sk/sk/kompetencie/regionalny-rozvoj/aktuality/vystavba-noveho-pavilonu-spisskonovoveskej-nemocnice-oficialne-spustena.html"
					>
						<img
							src="https://www.asb.sk/wp-content/uploads/2024/09/nemocnica-spisska-nova-ves-1.jpg"
							alt=""
							className="w-full object-cover h-full absolute -z-10 top-0 left-0"
						/>
						<div className="flex flex-col h-full justify-between p-5 text-white font-bold text-2xl bg-gradient-to-t from-black to-[#00000000]">
							<p>16.9.2024</p>
							<p>Výstavba nového pavilónu Nemocnice v Spišskej Novej Vsi oficiálne spustená</p>
						</div>
					</Link>
				</div>
			</section>
			<section>
				<h2 className="text-3xl text-center w-full font-bold max-w-[1500px] px-44 mt-10">
					Košický <b className="text-[#194E8D]">kraj</b>
				</h2>
				<div className="flex flex-col mt-10">
					<div className="flex flex-row w-full justify-center gap-80  text-center">
						<div className="flex flex-col">
							<NumberAnimation id="animated-number" endNumber={440} speed={1} />
							<p className="text-xl">obcí</p>
						</div>
						<div className="flex flex-col">
							<NumberAnimation id="animated-number" endNumber={17} speed={10} />
							<p>miest</p>
						</div>
						<div className="flex flex-col">
							<NumberAnimation id="animated-number" endNumber={11} speed={100} />
							<p>okresov</p>
						</div>
					</div>
					<div className="flex flex-row  w-full justify-center gap-80 mt-10  text-center">
						<div className="flex flex-col text-center">
							<NumberAnimation id="animated-number" endNumber={800414} speed={1} />
							<p>obyvatelov</p>
						</div>
						<div className="flex flex-col">
							<NumberAnimation id="animated-number" endNumber={6753} speed={1} />
							<p>
								Rozloha
								<br /> (km²)
							</p>
						</div>
						<div className="flex flex-col">
							<NumberAnimation id="animated-number" endNumber={119} speed={1} />
							<p>
								hustota
								<br />
								zaludnenia (ob./km²)
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
