/* 
28-3-2023
Esercizio 1
Sulla base della lezione del giorno, a partire dal concept delle api di Musement - vedi link sotto:

Una pagina Home /
Una pagina singola attività (dinamica) /activity/:id
Una pagina singola città (dinamica) /city/:id
Una pagina statica about /about
Strutturare una navbar e un footer
Musement API: https://api.musement.com/api/v3/activities.json

Avanzato
Leggere un pò di documentazione https://reactrouter.com/en/main/start/overview */

import React from "react";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home";
import About from "./pages/About";
import Activity from "./pages/Activity";
import City from "./pages/City";

const router = createBrowserRouter(
  // perche scriviamo in jsx dobbiamo aggiungere il metodo "createRoutesFromElements"
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="activity/:id" element={<Activity />} />
      <Route path="city/:id" element={<City />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* router viene passato come prop a RouterProvider, che a sua volta é un componente che viene importato da react-router-dom che va a renderizzarmi gli elementi non piu singolarmente ma in rotte */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
