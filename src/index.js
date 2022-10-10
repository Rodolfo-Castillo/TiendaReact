import React from 'react';
import { createRoot } from "react-dom/client";
import Routes from './router'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

