import { createContext, useEffect, useState } from "react";
import Web3 from "web3";
import contractJson from "../contract-abi/SimpleStorage.json";

export const ContractContext = createContext({
  contract: null,
});

export const ContractProvider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const provider = Web3.givenProvider;
    setWeb3(new Web3(provider));
  }, []);

  useEffect(() => {
    const loadContract = async () => {
      const contractTemp = await new web3.eth.Contract(
        contractJson.abi,
        contractJson.networks["4"].address
      );

      setContract(contractTemp);
    };

    web3 && loadContract();
  }, [web3]);

  return (
    <ContractContext.Provider value={{ contract }}>
      {children}
    </ContractContext.Provider>
  );
};
