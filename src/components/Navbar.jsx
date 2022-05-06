import { useContext } from "react";
import { AccountContext } from "../context/Account";

const Navbar = () => {
  const { account, connectMetamask } = useContext(AccountContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="/">
          Fav ♥️ Number #
        </a>

        {account ? (
          <p className="text-white">📍 : {account}</p>
        ) : (
          <button
            className="btn btn-outline-warning"
            type="submit"
            onClick={connectMetamask}
          >
            Connect To Metamask
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
