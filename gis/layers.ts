import { GeoJsonLayer } from "@deck.gl/layers/typed";

export const careerArcLayer = new GeoJsonLayer({
    id: 'career-arc-layer',
    data: './career_arc.geojson',
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    pointType: 'circle',
    getFillColor: [160, 160, 180, 200],
    getPointRadius: 100,
    pointRadiusScale: 1000,
    pointRadiusUnits: 'meters',
})

export const us_statesLayer = new GeoJsonLayer({});
