import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routers from "./confiq/Routers";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {Routers.map((router,index) => {
            return <Route path={router.path} element={router.element} key={index} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
