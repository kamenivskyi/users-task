import React from "react";
import Button from "@mui/material/Button";
import "./App.css";
import { routes } from "app/routes";
import { Layout } from "components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
