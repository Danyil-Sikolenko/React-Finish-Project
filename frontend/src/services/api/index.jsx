export const API_URL = import.meta.env.VITE_BASE_URL;

export const API_PATHS = {
  DATA_HOTELS: `${API_URL}${import.meta.env.VITE_API_PATH_DATA}`,
  LOGIN: `${API_URL}${import.meta.env.VITE_API_PATH_LOGIN}`,
  SIGNUP: `${API_URL}${import.meta.env.VITE_API_PATH_SIGNUP}`,
  SEARCH_HOTELS: `${API_URL}${import.meta.env.VITE_API_PATH_SEARCH_HOTELS}`,
  CITIES: `${API_URL}${import.meta.env.VITE_API_PATH_CITIES}`,
};

