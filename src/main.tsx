import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// i18n
import "./i18n";

// fonts
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/600.css";
import "@fontsource/heebo/700.css";
import "@fontsource/alef/400.css";
import "@fontsource/rubik/400.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
