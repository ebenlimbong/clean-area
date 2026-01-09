// src/favicon.js
import logo from "./assets/images/Logo.jpg";

let link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.head.appendChild(link);
}
link.type = "image/jpeg";
link.href = logo;
