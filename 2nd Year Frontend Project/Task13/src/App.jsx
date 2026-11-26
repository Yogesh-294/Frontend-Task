
import ProductCard from "./Components/Product_Card";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      title: "Premium Headphones",
      description: "Enjoy high-quality sound with comfortable wireless headphones."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      title: "Smart Watch",
      description: "Track your fitness and stay connected with a smart watch."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
      title: "Digital Camera",
      description: "Capture your beautiful moments with stunning picture quality."
    }
  ];

  return (
    <div className="app">
      <h1>Our Featured Products</h1>
      <p className="subtitle">
        Explore our collection of premium products.
      </p>

      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
