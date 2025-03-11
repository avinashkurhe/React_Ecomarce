import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import custom CSS for better styling

export default function ProductDetails() {
  const { id } = useParams();  // Destructure directly from useParams
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  async function fetchProductById() {
    try {
      let response = await fetch(`https://dummyjson.com/products/${id}`);
      let data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  useEffect(() => {
    fetchProductById();
  }, [id]);

  if (!product) {
    return <div className="loading">Loading...</div>;  // Loading state
  }

  // Calculate discounted price
  const discountedPrice = product.price - (product.price * product.discountPercentage / 100);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="card product-card">
            <img src={product.thumbnail} className="card-img-top product-img" alt={product.title} />
            <div className="card-body">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-text product-description">{product.description}</p>
              <div className="product-price">
                <span className="original-price">&#8377;{product.price}</span>
                <span className="discounted-price">&#8377;{discountedPrice.toFixed(2)}</span>
                <span className="discount-percentage">(-{product.discountPercentage}%)</span>
              </div>
              <button
                className="btn btn-primary back-button"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
