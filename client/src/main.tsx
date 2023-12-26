import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BlogAppProvider } from "./context/BlogAppContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BlogAppProvider>
      <App />
    </BlogAppProvider>
  </React.StrictMode>
);
