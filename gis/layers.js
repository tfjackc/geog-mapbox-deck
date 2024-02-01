// import {ArcLayer, GeoJsonLayer} from "@deck.gl/layers/typed";
// import {myArcData} from "~/data/arc";
// import * as d3 from "d3";
// const minYear = 2013;
// const maxYear = 2024;
//
// // Create a linear scale for colors
// // This example uses a blue-to-red color scale
// const colorScale = d3.scaleLinear()
//     .domain([minYear, maxYear])
//     //@ts-ignore
//     .range(["white", "blue"])
//     //@ts-ignore
//     .interpolate(d3.interpolateRgb);
// export const careerGeoJson = new GeoJsonLayer({
//     id: 'career-arc-layer',
//     data: './career_arc.geojson',
//     pickable: true,
//     stroked: false,
//     filled: true,
//     extruded: true,
//     pointType: 'circle',
//     getFillColor: d => {
//         //@ts-ignore
//         const color = d3.rgb(colorScale(d.properties.Year)); // Convert the color scale result to an RGB object
//         return [color.r, color.g, color.b, 255]; // Add the alpha value, fully opaque
//     },
//     getPointRadius: 1,
//     pointRadiusScale: 10,
//     pointRadiusUnits: 'pixels',
// })
//
// export const usStatesLayer = new GeoJsonLayer({
//     id: 'us-states-layer',
//     data: 'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json',
//     pickable: true,
//     stroked: true,
//     filled: true,
//     extruded: false,
//     lineWidthScale: 20,
//     lineWidthMinPixels: 2,
//     getLineColor: [250, 250, 250, 98],
//     getFillColor: [200, 160, 0, 0]
// });
//
// export const careerArcLayer = new ArcLayer({
//     id: 'arc-layer',
//     data: myArcData,
//     getSourcePosition: d => d.source,
//     getTargetPosition: d => d.destination,
//     getSourceColor: [0, 255, 255], // Cyan for source
//     getTargetColor: [255, 0, 255], // Magenta for target
//     getWidth: 2
// });
//
//
