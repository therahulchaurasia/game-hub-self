import axios from "axios"
// I cannot attach the key since it will become public. I tried to add dotenv but CRA builds allow viewing keys since everything is merged into a single build and separated into chunks.
// For more info on using .env with react check out this stack overflow article: https://stackoverflow.com/questions/48699820/how-do-i-hide-an-api-key-in-create-react-app
const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
})

export default apiClient
