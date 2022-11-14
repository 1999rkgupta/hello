import React from "react";
// import "./App.css"
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AppCalender from "./calenderApp/AppCalender.jsx";
import GraphApp from "./graph/Graph.jsx";
import QRcode from "./qrCode/QRcode.jsx";
import State from "./State.jsx";

// import "./style.css";
createRoot(document.getElementById("root")).render(<State />);
