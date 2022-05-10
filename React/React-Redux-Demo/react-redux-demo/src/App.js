import CakeContrainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HookCakeCointainer } from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContrainer />
        <HookCakeCointainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
