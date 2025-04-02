import React from "react";
import Layout from "../Layout";

const CreateOrder = () => {
  return (
    <Layout>
      <form className="form-vertical ms-5  ">
        <fieldset className="row g-4">
          {/* Form Name */}
          <legend>Create Order</legend>
          {/* Text input*/}
          <div className="col-6 d-flex">
            <label className="col-md-4 control-label" htmlFor="product_id">
              PRODUCT ID
            </label>
            <div className="col-md-8">
              <input
                id="product_id"
                name="product_id"
                placeholder="PRODUCT ID"
                className="form-control input-md"
                required
                type="text"
                fdprocessedid="8jmh1"
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="col-6 d-flex">
            <label className="col-md-4 control-label" htmlFor="product_name">
              PRODUCT NAME
            </label>
            <div className="col-md-8">
              <input
                id="product_name"
                name="product_name"
                placeholder="PRODUCT NAME"
                className="form-control input-md"
                required
                type="text"
                fdprocessedid="bys7x"
              />
            </div>
          </div>
          {/* Select Basic */}
          <div className="col-6 d-flex">
            <label
              className="col-md-4 control-label"
              htmlFor="product_categorie"
            >
              PRODUCT CATEGORY
            </label>
            <div className="col-md-8">
              <select
                id="product_categorie"
                name="product_categorie"
                className="form-control"
                fdprocessedid="tbxby"
              ></select>
            </div>
          </div>

          {/* Textarea */}
          <div className="col-6 d-flex">
            <label
              className="col-md-4 control-label"
              htmlFor="product_description"
            >
              PRODUCT DESCRIPTION
            </label>
            <div className="col-md-8">
              <textarea
                className="form-control"
                id="product_description"
                name="product_description"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="col-6 d-flex">
            <label className="col-md-4 control-label" htmlFor="author">
              AUTHOR
            </label>
            <div className="col-md-8">
              <input
                id="author"
                name="author"
                placeholder="AUTHOR"
                className="form-control input-md"
                required
                type="text"
                fdprocessedid="5ryt3l"
              />
            </div>
          </div>

          {/* Text input*/}
          <div className="col-6 d-flex">
            <label className="col-md-4 control-label" htmlFor="comment">
              COMMENT
            </label>
            <div className="col-md-8">
              <input
                id="comment"
                name="comment"
                placeholder="COMMENT"
                className="form-control input-md"
                required
                type="text"
                fdprocessedid="kc1ieo"
              />
            </div>
          </div>
          {/* Text input*/}

          <div className="col d-flex mt-5 ms-5">
            {/* File Button */}
            <div className="col-6 d-flex">
              <div className="col-md-8">
                <input
                  id="filebutton"
                  name="filebutton"
                  className="input-file"
                  type="file"
                />
              </div>
            </div>
            {/* File Button */}
            <br />
            <br />

            {/* Button */}
            <div className="col-6 d-flex ">
              <div className="col-md-8">
                <button
                  id="singlebutton"
                  name="singlebutton"
                  className="btn btn-primary"
                  fdprocessedid="revqr"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </Layout>
  );
};

export default CreateOrder;
