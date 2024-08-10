import React from "react";

const headings = ["Name", "Description", "Image"];
const useProducts = () => {
  const [products, setProducts] = React.useState([]);

  const fetchProducts = React.useCallback(async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      const json = await response.json();
      if (json.products.length) {
        setProducts(
          json.products.map(({ id, title, description, thumbnail }) => ({
            id,
            title,
            description,
            thumbnail
          }))
        );
      }
    } catch (_error) {
      console.log("111 _error");
      console.log(_error);
    }
  }, [products, setProducts]);
  React.useEffect(() => {
    fetchProducts();
  }, []);
  return { headings, products };
};

export default useProducts;
