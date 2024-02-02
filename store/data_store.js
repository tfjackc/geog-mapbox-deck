// import { defineStore } from 'pinia'
// import {Deck} from '@deck.gl/core';
// import {ScatterplotLayer} from '@deck.gl/layers';
// import mapboxgl from "mapbox-gl";
//
// export const useDataStore = defineStore('data_store', {
//     state: () => ({
//         deckgl: null,
//     }),
//     getters: {
//     },
//     actions: {
//         async setDeckgl() {
//             const INITIAL_VIEW_STATE = {
//                 latitude: 37.8,
//                 longitude: -122.45,
//                 zoom: 15
//             };
//
//             const map = new mapboxgl.Map({
//                 container: 'map',
//                 style: 'mapbox://styles/mapbox/streets-v11',
//                 center: [-122.45, 37.8],
//                 zoom: 15
//             });
//
//             this.deckgl = new deck.Deck({
//                 initialViewState: INITIAL_VIEW_STATE,
//                 controller: true,
//                 layers: [
//                     new ScatterplotLayer({
//                         data: [
//                             {position: [-122.45, 37.8], color: [255, 0, 0], radius: 100}
//                         ],
//                         getFillColor: d => d.color,
//                         getRadius: d => d.radius
//                     })
//                 ]
//             })
//
//         },
//     },
// })