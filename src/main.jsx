import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Routes from "./routes";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {HelmetProvider} from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Routes} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthContext>
  </React.StrictMode>
);
