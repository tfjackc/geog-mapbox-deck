<template>
  <div id="map" ref="map" class="map"></div>
</template>

<script setup>
import { Deck } from "@deck.gl/core";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ref, onMounted } from "vue";
import {myArcData} from "~/data/arc.js";
import * as d3 from "d3";
//import { careerGeoJson, careerArcLayer, usStatesLayer } from "~/gis/layers.ts";

const DEFAULT_MAP_CENTER = [-104.9903, 39.7392];
const DEFAULT_MAP_BEARING = -45;
const DEFAULT_MAP_ZOOM = 3;
const DEFAULT_MAP_PITCH = 50;

mapboxgl.accessToken = 'pk.eyJ1IjoidGZqYWNrYyIsImEiOiJjbGhhd3VsZHAwbHV1M3RudGt0bWFhNHl0In0.5qDpeYjN5r-rBh-SYA9Qgw';

const deck = ref(null);
const currentViewState = ref(null);

const INITIAL_VIEW_STATE = {
  latitude: DEFAULT_MAP_CENTER[1],
  longitude: DEFAULT_MAP_CENTER[0],
  zoom: DEFAULT_MAP_ZOOM,
  bearing: DEFAULT_MAP_BEARING,
  pitch: DEFAULT_MAP_PITCH,
  transitionDuration: "auto",
};

onMounted(async () => {


  import('@deck.gl/layers').then(async({ ArcLayer, GeoJsonLayer }) => {
    // Use ArcLayer and GeoJsonLayer here
    await nextTick();

    currentViewState.value = INITIAL_VIEW_STATE;

    const careerArcLayer = new ArcLayer({
      id: 'arc-layer',
      data: myArcData,
      getSourcePosition: d => d.source,
      getTargetPosition: d => d.destination,
      getSourceColor: [0, 255, 255], // Cyan for source
      getTargetColor: [255, 0, 255], // Magenta for target
      getWidth: 2
    });

    const careerGeoJson = new GeoJsonLayer({
      id: 'career-arc-layer',
      data: './career_arc.geojson',
      pickable: true,
      stroked: false,
      filled: true,
      extruded: true,
      pointType: 'circle',
      getFillColor: d => {
        //@ts-ignore
        const color = d3.rgb(colorScale(d.properties.Year)); // Convert the color scale result to an RGB object
        return [color.r, color.g, color.b, 255]; // Add the alpha value, fully opaque
      },
      getPointRadius: 1,
      pointRadiusScale: 10,
      pointRadiusUnits: 'pixels',
    });


  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v11",
    projection: "mercator",
    interactive: false,
    center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
    zoom: INITIAL_VIEW_STATE.zoom,
    bearing: INITIAL_VIEW_STATE.bearing,
    pitch: INITIAL_VIEW_STATE.pitch,
  });

  deck.value = new Deck({
    parent: document.getElementById("map"),
    layers: [careerGeoJson, careerArcLayer],
    getTooltip: (({object}) => object && {
      html: `<div class="text-lg">${object.properties.Title}</div><div class="text-md">${object.properties.Location}</div>`,
      style: {
        backgroundColor: '#000',
        fontColor: '#fff',
        fontSize: '0.8em'
    }
    }),
    viewState: currentViewState.value,
    onViewStateChange: ({ viewState }) => {
      currentViewState.value = viewState;
      deck.value.setProps({ viewState: currentViewState.value });

      map.jumpTo({
        center: [viewState.longitude, viewState.latitude],
        zoom: viewState.zoom,
        bearing: viewState.bearing,
        pitch: viewState.pitch,
      });
    },
    controller: true,
  });
});
});
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>