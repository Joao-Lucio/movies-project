import { API_KEY } from "@/env";
import axios from "axios";

export async function getMoviesRequest() {
  try {
    const response = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: API_KEY,
        language: "pt-BR",
      },
    });
    if (response) {
      return response.data.results;
    }
    return [];
  } catch (error: any) {
    return error;
  }
}
