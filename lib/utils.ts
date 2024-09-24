import { clsx, type ClassValue } from "clsx"
import proj4 from "proj4"
import { reproject } from "reproject"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export function convertToWGS84(data: Object) {
	return reproject(
		data,
		"+proj=krovak +lat_0=49.5 +lon_0=24.8333333333333 +alpha=30.2881397527778 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs +type=crs",
		proj4.WGS84
	)
}
