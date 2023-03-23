import { Provider } from "react-redux";
import store from "./confiq/redux/Store";
import Counter from "./views/Counter/Counter.view";

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
