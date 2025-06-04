import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export default async function fetchImages(topic, curretPage) {
  const response = await axios.get("/search/photos", {
    params: {
      query: topic,
      page: curretPage,
      per_page: 16,
      client_id: "o39qnZkmQB6u1CwwcpWiuoOr08LcwD9qHUyCWUjqb3g",
    },
  });
  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
}
