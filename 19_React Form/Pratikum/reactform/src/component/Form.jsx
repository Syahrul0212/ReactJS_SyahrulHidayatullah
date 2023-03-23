import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function Form(props) {
  const [formData, setFormData] = useState({
    prName: "",
    additionaldescription: "",
    pprice1: "",
    pCategory: "",
  });

  const [products, setProducts] = useState([]);
  const radios = ['Brand New', 'Second Hand', 'Refufbished'];
  // useEffect(() => {
  //   alert("Welcome Bang!!");
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      no: products.length + 1,
      prName: formData.prName,
      additionaldescription: formData.additionaldescription,
      pprice1: formData.pprice1,
      pCategory: formData.pCategory, // tambahkan properti kategori produk
    };
    setProducts([...products, newProduct]);
    setFormData({
      prName: "",
      additionaldescription: "",
      pprice1: "",
      pCategory: "", // tambahkan state kategori produk
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
      <Formik
        initialValues={{ 
          prName: "",
          productFreshness: "",
          email: "", 
          password: "" }}

        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
            {errors.email && touched.email && errors.email}
            <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <div className="col-lg-12">
              <label htmlFor="pName" className="form-label">
                Product Name
              </label>
              <input type="text" className="form-control" id="pName" name="prName" value={values.prName} onChange={handleChange} required />
              <div className="invalid-feedback">Valid first name is required.</div>
            </div>
            <div className="my-4">
              <h4 className="mb-2">Product Freshness</h4>
              {radios.map((radio, idx) => {
                return (
                  <div key={idx}>
                    <input 
                      type="radio" 
                      value={radio}
                      name="productFreshness"
                      checked={values.productFreshness === radio}
                      onChange={handleChange}
                    />
                    <label>{radio}</label>
                  </div>
                );
              })}

              {/* <div className="form-check">
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
              </div> */}
            </div>
          </form>
        )}
      </Formik> 
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
              <input type="text" className="form-control" id="pName" name="prName" value={formData.prName} onChange={handleChange} required />
              <div className="invalid-feedback">Valid first name is required.</div>
            </div>
            <div className="col-lg-12">
              <label htmlFor="pCategory" className="form-label">
                Product Category
              </label>
              <select className="form-select" id="pCategory" value={formData.pCategory} onChange={handleInputChange}>
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
              <textarea className="form-control" name="additionaldescription" id="additionaldescription" cols={30} rows={10} value={formData.additionaldescription} onChange={handleChange} required />
              <div className="invalid-feedback">Please select a valid.</div>
            </div>
            <div className="col-lg-12">
              <label htmlFor="pprice" className="form-label">
                Product Price
              </label>
              <input type="number" className="form-control" id="pprice" name="pprice1" placeholder="$" value={formData.pprice1} onChange={handleChange} required />
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
          {/* <table className="myTable table mb-5" id="table">
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
                  <td>$ {product.pprice1}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                    <button className="btn btn-warning">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
}

export default Form;
