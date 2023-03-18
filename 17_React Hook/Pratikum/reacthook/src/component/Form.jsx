import React, { useState, useEffect } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    prName: "",
    additionaldescription: "",
    pprice1: "",
    pCategory: "",
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    alert("Welcome Bang!!");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      no: products.length + 1,
      prName: formData.prName,
      additionaldescription: formData.additionaldescription,
      pprice1: formData.pprice1,
      pCategory: formData.pCategory // tambahkan properti kategori produk
    };
    setProducts([...products, newProduct]);
    setFormData({
      prName: "",
      additionaldescription: "",
      pprice1: "",
      pCategory: "" // tambahkan state kategori produk
    });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = (index) => {
    if (window.confirm("Yakin Bro!!")) {
      const updatedProducts = products.filter((product, i) => i !== index);
      setProducts(updatedProducts);
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
        <form className="form-submit needs-validation" onSubmit={handleSubmit}>
          <div className="container justify-content-center col-lg-5">
            <div className="col-lg-12">
              <label htmlFor="pName" className="form-label">
                Product Name
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="pName" 
                name="prName" 
                value={formData.prName} 
                onChange={handleChange} 
                required
              />
              <div className="invalid-feedback">Valid first name is required.</div>
            </div>
            <div className="col-lg-12">
              <label htmlFor="pCategory" className="form-label">
                Product Category
              </label>
              <select 
                className="form-select" 
                id="pCategory"
                value={formData.pCategory}
                onChange={handleInputChange}>
                  <option value="">Choose...</option>
                  <option value="new">New</option>
                  <option value="veryNew">Very New</option>
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
            <div className="col-lg-12">
              <label htmlFor="additionaldescription" className="form-label">
                Additional Description
              </label>
              <textarea 
                className="form-control" 
                name="additionaldescription" 
                id="additionaldescription" 
                cols={30} rows={10} 
                value={formData.additionaldescription} 
                onChange={handleChange} 
                required
              />
              <div className="invalid-feedback">Please select a valid.</div>
            </div>
            <div className="col-lg-12">
              <label htmlFor="pprice" className="form-label">
                Product Price
              </label>
              <input 
                type="number" 
                className="form-control" 
                id="pprice" name="pprice1" 
                placeholder="$" 
                value={formData.pprice1} 
                onChange={handleChange} 
                required
              />
              <div className="invalid-feedback">Valid first name is required.</div>
            </div>
            <div className="pt-4 mb-5">
              <button className="w-100 btn btn-primary btn-lg" type="submit" id="submit-button">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="container">
          <div className="pt-5 pb-3">
            <h1 className="text-center">List Product</h1>
          </div>
          <table className="myTable table mb-5" id="table">
            <thead className="table-dark table-striped">
              <tr>
                <td>no</td>
                <td>Nama</td>
                <td>Kategori</td>
                <td>Ket</td>
                <td>Price</td>
                <td>Opsi</td>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.no}>
                  <td>{product.no}</td>
                  <td>{product.prName}</td>
                  <td>{product.pCategory}</td>
                  <td>{product.additionaldescription}</td>
                  <td>{product.pprice1}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                    <button className="btn btn-warning">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Form;
