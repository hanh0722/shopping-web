import React from "react";
import { useRoutes } from "react-router-dom";
import { RouteConfig } from "./components";
import './styles/root.scss';

function App() {
  const elements = useRoutes(RouteConfig);
  return <>
      {elements}
  </>;
}

export default App;
