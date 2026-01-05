import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;

if (redirect) {
  history.replaceState(null, '', redirect.replace(location.origin, ''));
}

createRoot(document.getElementById("root")!).render(<App />);
