import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/product/getP`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div style={{background: "#F9FAFB", minHeight: "100vh"}}>
    <br />
    <div style={{padding: "1rem", margin: "1rem"}}>
        <ul style={{display: "grid", gridTemplateColumns: "repeat(1, minmax(0, 1fr))", gridGap: "1.5rem", "@media (min-width: 768px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }, "@media (min-width: 1024px)": { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}}>
            {products.map((product) => (
                <li key={product._id} style={{background: "#fff", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)", borderRadius: "0.375rem"}}>
                    <div style={{padding: "1.5rem"}}>
                        <h2 style={{fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem"}}>{product.name}</h2>
                        <p style={{color: "#4B5563", fontSize: "1rem", marginBottom: "1rem"}}>{product.desc}</p>
                        <p style={{color: "#34D399", fontSize: "1.5rem", fontWeight: "600"}}>
                            ${product.price}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
</div>

  );
};

export default Home