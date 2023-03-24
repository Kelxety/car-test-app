import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import Nav from "./components/Nav";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
