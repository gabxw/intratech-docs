import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// If the 404 page redirected here (GitHub Pages), restore the original URL
const redirect = sessionStorage.getItem('redirect');
sessionStorage.removeItem('redirect');

if (redirect) {
  const url = new URL(redirect);
  const base = '/intratech-docs';
  let path = url.pathname;
  
  // Se o caminho começa com o base path, removemos para o roteador lidar
  if (path.startsWith(base)) {
    path = path.substring(base.length);
  }
  
  if (path === '') path = '/';
  
  window.history.replaceState(null, '', base + path + url.search + url.hash);
}

// Mount the app once
createRoot(document.getElementById("root")!).render(<App />);
