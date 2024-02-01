<template>
  <div id="map" ref="map" class="map"></div>
</template>

<script setup>
import { Deck } from "@deck.gl/core";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ref, onMounted } from "vue";
import { careerGeoJson, careerArcLayer, usStatesLayer } from "~/gis/layers";

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
  await nextTick();

  currentViewState.value = INITIAL_VIEW_STATE;

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
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>