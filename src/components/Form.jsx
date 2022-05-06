import React from "react";

const Form = () => {
  return (
    <div className="col-sm-6">
      <h3>Form</h3>
      <form>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter your number here"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Set Number -{">"}
        </button>
      </form>
    </div>
  );
};

export default Form;
