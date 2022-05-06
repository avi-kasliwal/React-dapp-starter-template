import { createContext, useState } from "react";

export const AccountContext = createContext({
  account: null,
  accountChangeHandler: () => null,
  connectMetamask: () => null,
});

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(null);

  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Metamask is not installed");
    }
  };

  const accountChangeHandler = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    setAccount(accounts[0]);
  };

  return (
    <AccountContext.Provider
      value={{ account, accountChangeHandler, connectMetamask }}
    >
      {children}
    </AccountContext.Provider>
  );
};
