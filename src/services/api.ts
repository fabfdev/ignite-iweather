import axios from "axios";
import { WEATHER_APP_ID } from "@env";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    lang: 'pt_br',
    units: 'metric',
    appid: WEATHER_APP_ID,
  }
});