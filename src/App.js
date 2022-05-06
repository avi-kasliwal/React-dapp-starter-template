import { useContext } from "react";
import { AccountContext } from "./context/Account.js";

import Navbar from "./components/Navbar";
// import Home from "./components/Home.jsx";

const App = () => {
  const { accountChangeHandler } = useContext(AccountContext);

  window.ethereum.on("accountsChanged", accountChangeHandler);

  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <div>
        <h1>Testing div</h1>
      </div>
    </div>
  );
};

export default App;
