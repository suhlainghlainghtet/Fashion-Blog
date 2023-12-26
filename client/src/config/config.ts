interface Config {
  apiUrl: string;
  uploadImageApiUrl: string;
}

export const config: Config = {
  apiUrl: import.meta.env.VITE_API_URL,
  uploadImageApiUrl: import.meta.env.VITE_CLOUDINARY_API_URL,
};
