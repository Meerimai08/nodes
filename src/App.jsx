import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Context from "./context";
import NoteList from "./pages/noteList";
import NotePage from "./pages/notePage";
import AddNotePage from "./pages/addNotePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NoteList />,
  },
  {
    path: "/note/page/:id",
    element: <NotePage />,
  },
  {
    path: "/add/note/page",
    element: <AddNotePage />,
  },
]);
function App() {
  const [date, setDate] = useState([]);
  return (
    <Context.Provider
      value={{
        date,
        setDate,
      }}
    >
      <RouterProvider router={router}></RouterProvider>;
    </Context.Provider>
  );
}

export default App;
