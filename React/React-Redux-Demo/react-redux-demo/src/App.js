import CakeContrainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HookCakeCointainer } from "./components/HookCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContrainer />
        <HookCakeCointainer />
      </div>
    </Provider>
  );
}

export default App;
