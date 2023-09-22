let BASE_URL = "";
let URL = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "";
  URL = "";
} else {
  BASE_URL = ""; 
  URL = ""; 
}
const config = {
  BASE_URL,
  URL,
};

export default config;