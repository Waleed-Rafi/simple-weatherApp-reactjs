import axios from "axios";

export default axios.create({
  baseURL: "https://api.darksky.net/forecast/be2c0ed297b8ab9f4fdcdcf1a50bd2e4"
});
