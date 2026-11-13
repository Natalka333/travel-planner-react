// import axios from "axios";
// const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;
// const BASE_URL = "https://api.geoapify.com/v1/geocode/search";
// const BASE_URL_CITY = "https://api.geoapify.com/v2/places";

// // console.log("API key loaded:", Boolean(API_KEY));

// export const fetchCityCoordinates = async (city) => {
//   const { data } = await axios.get(BASE_URL, {
//     params: {
//       text: city,
//       apiKey: API_KEY,
//     },
//   });
//   console.log("Geoapify response:", data);
//   if (!data.features.length) {
//     throw new Error("City not found");
//   }

//   const [lon, lat] = data.features[0].geometry.coordinates;
//   const { city: cityName, country } = data.features[0].properties;

//   return { lat, lon, city: cityName, country };
// };

// export const fetchCityData = async ({ lat, lon }) => {
//   const { data } = await axios.get(BASE_URL_CITY, {
//     params: {
//       apiKey: API_KEY,
//       lat,
//       lon,
//       categories: "tourism.sights",
//       limit: 5,
//     },
//   });

//   //   console.log(data.features[0].properties.wiki_and_media);
//   //   console.log(data.features[0].properties);
//   //   console.log(data.features[0].properties.categories);
//   //   console.log(data.features[0].properties.details);

//   const places = data.features.map(({ properties: { name, lat, lon } }) => {
//     return {
//       name,
//       lat,
//       lon,
//     };
//   });
//   return places;
// };

// import { fetchCityData } from "./api/placesApi";
// import { fetchCityCoordinates } from "./api/placesApi";ф
