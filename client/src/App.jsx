import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import GlobalStyles from "./globalStyles";
import Todos from "./pages/Todos";

import todos from "./data/todos.json";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<h1>Home</h1>} />
            <Route index path="/login" element={<h1>Login</h1>} />
            <Route index path="/todos" element={<Todos todos={todos} />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
