import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../context/Account";
import { ContractContext } from "../context/ContractContext";

const SimpleStorage = () => {
  const [number, setNumber] = useState(null);

  const { contract } = useContext(ContractContext);
  const { account } = useContext(AccountContext);

  const [input, setInput] = useState(null);

  useEffect(() => {
    const getNumInEffect = async () => {
      if (account) {
        const num = await contract.methods.favouriteNumber().call();
        setNumber(num);
      }
    };

    getNumInEffect();
  }, [account, contract]);

  const fetchNum = async () => {
    if (account) {
      const num = await contract.methods.favouriteNumber().call();
      setNumber(num);
    } else {
      alert("Connect with Metamask first");
    }
  };

  const sendNum = async (e) => {
    e.preventDefault();

    if (account && input !== null) {
      try {
        await contract.methods.storeNumber(parseInt(input)).send({
          from: account.toString(),
        });
        fetchNum();
        alert("Number Updated");
        setInput(null);
      } catch (error) {
        console.log(error);
      }
    } else if (input === null) {
      alert("Enter a number");
    } else {
      alert("Connect with Metamask first");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container-fluid px-5 bg-light py-5">
      <h3>Simple Storage Contract</h3>
      <div className="row justify-content-between py-5">
        <div className="col-sm-4">
          <h3 className="text-danger text-bold">
            {number
              ? "Number in storage ⤵"
              : "Connect with Metamask to fetch number from storage"}
          </h3>
          <h1 className="text-success text-bold">{number}</h1>
        </div>
        <div className="col-sm-4">
          <h5>Store Number to Storage Contract</h5>
          <form>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="input a number"
                required
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={sendNum}>
              {input ? `Send ${input} to storage` : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimpleStorage;
