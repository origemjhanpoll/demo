import { API_KEY } from "../config";

const API_URL = "https://api.pexels.com/v1/search?query=people";

export const fetchImagesFromPexels = async () => {
  const data = await fetch(API_URL, { headers: { Authorization: API_KEY } });
  const { photos } = await data.json();
  return photos;
};
