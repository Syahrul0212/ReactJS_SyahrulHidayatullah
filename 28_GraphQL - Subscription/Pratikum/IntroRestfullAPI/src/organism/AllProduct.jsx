import React from "react";
import { gql, useQuery } from "@apollo/client";

export const AllProduct = () => {
  const Retrive_Product_Quary = gql`
    query Product {
      Product {
        additionaldescription
        imageCategory
        pCategory
        pprice
        prName
        productFreshness
      }
    }
  `;

  const { loading: loadingProduct, error: errorProduct, data: dataProduct } = useQuery(Retrive_Product_Quary);

  return (
    <div>
      {dataProduct?.Product.map((product, index) => (
        <div className="container col-lg-6 justify-center" key={index}>
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
            </svg>
            <div className="card-body">
              <p className="card-text">{product.prName}</p>
              <p className="card-text">{product.pCategory}</p>
              <p className="card-text">{product.productFreshness}</p>
              <p className="card-text">{product.additionaldescription}</p>
              <p className="card-text">$ {product.pprice}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    Detail View
                  </button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
