import React,{useState} from "react";

function Form() {
  

  const handleClick = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 100);
    console.log("Random number:", randomNumber);
  };

  const [productName, setProductName] = useState("");
  const handleInputChange = (event) => {
    const value = event.target.value;

    if (value.length <= 10) {
      setProductName(value);
    }
  };
 
  return (
    <div>
      <div className="container justify-content-center">
        <div className="col-lg-12 text-center">
          <h4 className="mb-3">
            <strong>Detail Product</strong>
          </h4>
          <hr />
        </div>
        <form className="form-submit needs-validation">
          <div className="container justify-content-center col-lg-5">
            <div className="col-lg-12">
              <label htmlFor="pName" className="form-label">
                Product Name
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="pName"
                defaultValue=""
                required=""
                value={productName}
                onChange={handleInputChange} 
              />
              <div className="invalid-feedback">Valid first name is required.</div>
            </div>
            <div className="col-lg-12">
              <label htmlFor="pCategory" className="form-label">
                Product Category
              </label>
              <select className="form-select" id="pCategory">
                <option value="">Choose...</option>
                <option>New</option>
                <option>Very New</option>
              </select>
              <div className="invalid-feedback">Please select a valid.</div>
            </div>
            <div className="col-lg-12">
              <label htmlFor="iCategory" className="form-label">
                Image of Product
              </label>
              <input type="file" className="form-control btn btn-primary" name="iCategory" id="imageCategory" />
              <div className="invalid-feedback">Please select a valid.</div>
            </div>
            <div className="my-4">
              <h4 className="mb-2">Product Freshness</h4>
              <div className="form-check">
                <input id="brand" name="productfreshness" type="radio" className="form-check-input" />
                <label className="form-check-label" htmlFor="brand">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input id="second" name="productfreshness" type="radio" className="form-check-input" />
                <label className="form-check-label" htmlFor="second">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input id="refufbished" name="productfreshness" type="radio" className="form-check-input" />
                <label className="form-check-label" htmlFor="refufbished">
                  Refufbished
                </label>
              </div>
            </div>
            <div className="col-lg-12">
              <label htmlFor="additionaldescription" className="form-label">
                Additional Description
              </label>
              <textarea className="form-control" name="additionaldescription" id="additionaldescription" cols={30} rows={10} defaultValue={""} />
              <div className="invalid-feedback">Please select a valid.</div>
            </div>
            <div className="col-lg-12">
              <label htmlFor="pprice" className="form-label">
                Product Price
              </label>
              <input type="number" className="form-control" id="pprice" placeholder="" defaultValue="$100" />
              <div className="invalid-feedback">Valid first name is required.</div>
            </div>
            <div className="pt-4 mb-5">
              <button className="w-100 btn btn-primary btn-lg" type="submit" id="submit-button" onClick={handleClick}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
