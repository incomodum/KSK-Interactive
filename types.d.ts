declare module "reproject" {
	function reproject(geojson: Object, from: string, to: string): GeoJSON.FeatureCollection<GeoJSON.Geometry>
}