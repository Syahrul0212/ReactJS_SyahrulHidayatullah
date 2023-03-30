import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import rootReducer from "../confiq/rootReducer";
import { useSelector } from "react-redux";

function FormNew() {
  // const [products, setProducts] = useState([]);
  const radios = ["Brand New", "Second Hand", "Refufbished"];
  const productState = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    alert("Welcome Bang!!");
  }, []);

  const handleDelete = (index) => {
    console.log(index);
    let updatedProducts = [...productState]
    if (window.confirm("Yakin Bro!!")) {
      updatedProducts = updatedProducts.filter((product, i) => i !== index);
      dispatch(rootReducer.actions.update(updatedProducts));
    }
  };

  const SignupSchema = Yup.object().shape({
    prName: Yup.string().min(2, "Too Short!").max(10, "Too Long!").required("Required"),
    pCategory: Yup.string().min(2, "Too Short!").max(10, "Too Long!").required("Required"),
    imageCategory: Yup.string().required("Required"),
    productFreshness: Yup.string().required("Required"),
    additionaldescription: Yup.string().min(2, "Too Short!").max(100, "Too Long!").required("Required"),
    pprice: Yup.string().min(2, "Too Short!").max(10, "Too Long!").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      no: 0,
      prName: "",
      pCategory: "",
      imageCategory: "",
      productFreshness: "",
      additionaldescription: "",
      pprice: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { setValues }) => {
      alert(`prName: ${values.prName}\npCategory: ${values.pCategory}\nimageCategory: ${values.imageCategory}\nproductFreshness: ${values.productFreshness}\nadditionaldescription: ${values.additionaldescription}\npprice: ${values.pprice}`);
      setValues({ ...values, no: productState.length + 1 });
      // setProducts([...products, values]);
      dispatch(rootReducer.actions.add([...productState,values]));
    },
  });

  return (
    <div>
      <div className="container justify-content-center col-lg-5">
        <div className="col-lg-12 text-center">
          <h4 className="mb-3">
            <strong>Detail Product</strong>
          </h4>
          <hr />
        </div>
        <form className="form-submit needs-validation" onSubmit={formik.handleSubmit}>
          <div className="col-lg-12">
            <label htmlFor="prName" className="form-label">
              Product Name
            </label>
            <input type="text" className="form-control" id="prName" name="prName" value={formik.values.prName} onChange={formik.handleChange} />
            {formik.errors.prName && formik.touched.prName ? <div>{formik.errors.prName}</div> : null}
            <div className="invalid-feedback">Valid first name is required.</div>
          </div>
          <div className="col-lg-12">
            <label htmlFor="pCategory" className="form-label">
              Product Category
            </label>
            <select className="form-select" id="pCategory" name="pCategory" value={formik.values.pCategory} onChange={formik.handleChange}>
              <option value="">Choose...</option>
              <option value="new">New</option>
              <option value="veryNew">Very New</option>
            </select>
            {formik.errors.pCategory && formik.touched.pCategory ? <div>{formik.errors.pCategory}</div> : null}
            <div className="invalid-feedback">Please select a valid.</div>
          </div>
          <div className="col-lg-12">
            <label htmlFor="iCategory" className="form-label">
              Image of Product
            </label>
            <input type="file" className="form-control btn btn-primary" name="imageCategory" id="imageCategory" onChange={formik.handleChange} />
            {formik.errors.imageCategory && formik.touched.imageCategory ? <div>{formik.errors.imageCategory}</div> : null}
            <div className="invalid-feedback">Please select a valid.</div>
          </div>
          <div className="my-4">
            <h4 className="mb-2">Product Freshness</h4>
            {radios.map((radio, idx) => {
              return (
                <div key={idx}>
                  <input type="radio" value={radio} name="productFreshness" checked={formik.values.productFreshness === radio} onChange={formik.handleChange} />
                  {formik.errors.productFreshness && formik.touched.productFreshness ? <div>{formik.errors.productFreshness}</div> : null}
                  <label>{radio}</label>
                </div>
              );
            })}
          </div>
          <div className="col-lg-12">
            <label htmlFor="additionaldescription" className="form-label">
              Additional Description
            </label>
            <textarea className="form-control" name="additionaldescription" id="additionaldescription" cols={30} rows={10} value={formik.values.additionaldescription} onChange={formik.handleChange} />
            {formik.errors.additionaldescription && formik.touched.additionaldescription ? <div>{formik.errors.additionaldescription}</div> : null}
            <div className="invalid-feedback">Please select a valid.</div>
          </div>
          <div className="col-lg-12">
            <label htmlFor="pprice" className="form-label">
              Product Price
            </label>
            <input type="number" className="form-control" id="pprice" name="pprice" placeholder="$" value={formik.values.pprice} onChange={formik.handleChange} />
            {formik.errors.pprice && formik.touched.pprice ? <div>{formik.errors.pprice}</div> : null}
            <div className="invalid-feedback">Valid first name is required.</div>
          </div>
          <div className="pt-4 mb-5">
            <button className="w-100 btn btn-primary btn-lg" type="submit" id="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="container justify-content-center">
        <div className="col-lg-12 text-center">
          <h4 className="mb-3">
            <strong>Detail Product</strong>
          </h4>
          <hr />
        </div>
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
                <td>Image</td>
                <td>product Freshness</td>
                <td>Ket</td>
                <td>Price</td>
                <td>Opsi</td>
              </tr>
            </thead>
            <tbody>
              {productState.map((product, index) => (
                <tr key={index}>
                  <td>{product.no}</td>
                  <td>{product.prName}</td>
                  <td>{product.pCategory}</td>
                  <td>{product.imageCategory}</td>
                  <td>{product.productFreshness}</td>
                  <td>{product.additionaldescription}</td>
                  <td>$ {product.pprice}</td>
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

export default FormNew;
