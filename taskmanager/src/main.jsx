import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoProvider from "./Components/StoreContext/TodoProvider.jsx";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TodoProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TodoProvider>
  </BrowserRouter>
);
