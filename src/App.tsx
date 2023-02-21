import React, { useEffect } from "react";
import { routes } from "app/routes";
import Layout from "components/Layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
