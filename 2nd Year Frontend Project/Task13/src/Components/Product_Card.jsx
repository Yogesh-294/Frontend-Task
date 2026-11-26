
function ProductCard({ image, title, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />

      <div className="product-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>View Product</button>
      </div>
    </div>
  );
}

export default ProductCard;
