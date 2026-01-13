import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./app/App";
import Providers from "./app/Providers";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Providers>
      <App />
    </Providers>
  </BrowserRouter>
);
