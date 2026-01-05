import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// If the 404 page redirected here (GitHub Pages), restore the original URL
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;

if (redirect) {
  history.replaceState(null, "", redirect.replace(location.origin, ""));
}

// Mount the app once
createRoot(document.getElementById("root")!).render(<App />);
