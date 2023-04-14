import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routers from "./confiq/Routers";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./confiq/apollo";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <BrowserRouter>
          <Routes>
            {Routers.map((router, index) => {
              return <Route path={router.path} element={router.element} key={index} />;
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
