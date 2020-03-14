import axios from "axios";

export default axios.create({
  baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places`
});
