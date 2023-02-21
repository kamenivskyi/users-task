import React, { useEffect } from "react";
import { routes } from "app/routes";
import { Layout } from "components/Layout";
import "./App.css";

function App() {
  useEffect(() => {
    async function testReq() {
      console.log("before fetch");
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((r) => r.json())
        .then((r) => {
          console.log("data: ", r);
        });
    }
    testReq();
  }, []);
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
