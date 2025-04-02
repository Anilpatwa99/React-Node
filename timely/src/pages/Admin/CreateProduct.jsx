import React, { useState } from "react";
import axios from "axios";
import Layout from "../Layout";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    oldPrice: "",
    newprice: "",
    ratings: "",
    category: "",
    image: null,
  });
  const categories = [
    "Rolex",
    "Titan",
    "Sonata",
    "Fastrack",
    "Hublot",
    "Casio",
    "Omega",
    "Timex",
    "Maxima",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "file") {
        formDataToSend.append("image", formData[key]); // ✅ Make sure "image" is used
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/products/add",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Layout>
      <div className="container mt-4">
        <h2>ADD PRODUCT</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
          {/* Product ID */}
          <div className="col-md-6">
            <label htmlFor="id" className="form-label">
              Product ID
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              name="id"
              required
              value={formData.id}
              onChange={handleChange}
            />
          </div>

          {/* Product Title */}
          <div className="col-md-6">
            <label htmlFor="title" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* Old Price */}
          <div className="col-md-6">
            <label htmlFor="oldPrice" className="form-label">
              Old Price
            </label>
            <input
              type="number"
              className="form-control"
              id="oldPrice"
              name="oldPrice"
              required
              value={formData.oldPrice}
              onChange={handleChange}
            />
          </div>

          {/* New Price */}
          <div className="col-md-6">
            <label htmlFor="newprice" className="form-label">
              New Price
            </label>
            <input
              type="number"
              className="form-control"
              id="newprice"
              name="newprice"
              required
              value={formData.newprice}
              onChange={handleChange}
            />
          </div>

          {/* Ratings */}
          <div className="col-md-6">
            <label htmlFor="ratings" className="form-label">
              Ratings (1-5)
            </label>
            <input
              type="number"
              className="form-control"
              id="ratings"
              name="ratings"
              required
              min="1"
              max="5"
              value={formData.ratings}
              onChange={handleChange}
            />
          </div>

          {/* Category Dropdown */}
          <div className="col-md-6">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="form-control"
              required
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div className="col-md-6">
            <label htmlFor="image" className="form-label">
              Product Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateProduct;
