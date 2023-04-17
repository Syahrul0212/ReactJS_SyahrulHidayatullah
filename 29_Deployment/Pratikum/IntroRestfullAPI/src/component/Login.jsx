import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = ({ setSignedIn }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().required().email("Invalid email format"),
      password: Yup.string().required().min(8, "Should more than 8 characters"),
    }),

    onSubmit: (values) => {
      formik.resetForm();
      console.log("values", values);
      const user = JSON.parse(localStorage.getItem("dataUser"));
      if (user.email === values.email && user.password === values.password) {
        localStorage.setItem("dataUser", JSON.stringify({ ...user }));
        setSignedIn(true);
        alert("Login Succes");
        return navigate("/");
      } else {
        alert("account not registered");
      }
    },
  });
  return (
    <div>
      <div className="container pt-5 pb-5">
        <div className="row justify-content-center">
          <h2 className="text-center">Login Form</h2>
          <div className="col-lg-6">
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.email && <div className="error text-danger">{formik.errors.email}</div>}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                {formik.touched.password && formik.errors.password && <div className="error text-danger">{formik.errors.password}</div>}
              </div>
              <p className="mt-2">
                Belum memiiliki akun? <Link to={"/register"}>Register sekarang!</Link>
              </p>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary mt-3 submit" name="submit-button" width="200px">
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
