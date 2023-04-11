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
Leggere un pò di documentazione https://reactrouter.com/en/main/start/overview 

// -----------------------------------------------------------------------------------------------------------------------------

29-3-2023
Esercizio 1
Sulla base della lezione del giorno, replicare quanto visto a lezione, creando una pagina statica che renderizzi una lista di prodotti, al cui click rimandi alla pagina dinamica con maggiori informazioni sul prodotto selezionato.

API: https://fakestoreapi.com/products

Avanzato
Tentare l'applicazione dello stesso principio utilizzando però questa api: https://failteireland.portal.azure-api.net/docs/services/opendata-api-v1/operations/attractions-get? 

// ------------------------------------------------------------------------------------------------------------------------------

30-3-2023
Esercizio 1
Sulla base della lezione del giorno, replicare quanto visto a lezione, riguardo alla pagine delle attrazioni, utilizzare il link in fondo.

API: https://fakestoreapi.com/products

Avanzato
Tentare l'applicazione dello stesso principio, sfruttando la input presente nella Navbar, di modo che venga effettuata una ricerca specifica (identica) ad un Hotel o altro parametro a scelta. Renderizzare dunque la singola pagina come pagina dinamica di City

https://failteireland.portal.azure-api.net/docs/services/opendata-api-v1/operations/attractions-get?   */

import React from "react";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

import PrimaryLayout from "./layout/PrimaryLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/activities";
import Activity from "./pages/activities/id";
import City from "./pages/City";

const router = createBrowserRouter(
  // perche scriviamo in jsx dobbiamo aggiungere il metodo "createRoutesFromElements"
  createRoutesFromElements(
    <Route element={<PrimaryLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="activities" element={<Activities />} />
      <Route path="activities/:id" element={<Activity />} />
      {/* <Route path="city/:id" element={<City />} /> */}
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
