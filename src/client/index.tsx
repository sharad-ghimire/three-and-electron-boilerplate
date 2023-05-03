import React from "react";
import { createRoot } from "react-dom/client";
import Application from "./application";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<Application />);
