import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GithubProvider from "./context/context";
function App() {
  return (
    <GithubProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} exact={true} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
