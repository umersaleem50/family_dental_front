import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export const displayMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoidW1lcnNhbGVlbTUwIiwiYSI6ImNsM2FnZDRpMTAwa3QzZG12czJoa3c0dnkifQ.5bzWn8qiHeedzc1_TfEg0Q";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/umersaleem50/cl3agq4c7002615pcgntarsk9",
    // style: "mapbox://styles/mapbox/light-v10",

    // style: "mapbox://styles/umersaleem50/cl2rub73g000e14r8hqja7hz0",
    center: [73.188283, 31.465921],
    zoom: 17,
    // attributionControl: false,
    // scrollZoom: false,
  });

  const marker = new mapboxgl.Marker({})
    .setLngLat([73.188283, 31.465921])
    .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
    .addTo(map);
};
