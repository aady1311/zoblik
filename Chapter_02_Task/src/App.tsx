import React from "react";
import { mockProducts } from "./data";
import { processProducts } from "./utils";

const App: React.FC = () => {
  const categoryFilter = "Electronics";
  const filteredProducts = processProducts(mockProducts, categoryFilter);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Products in {categoryFilter}</h1>
      <ul>
        {filteredProducts.map(({ name, price }) => (
          <li key={name}>
            <strong>{name}</strong> — ${price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
