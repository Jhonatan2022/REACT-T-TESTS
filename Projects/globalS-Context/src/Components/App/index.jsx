import { useState } from "react";
import { products as initialState } from "../../Mock/Products.json";
import { Products } from "../Products";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useFilters } from "../../Hooks/useFilters";
import { IS_DEV } from "./config";

function App() {
  const [products] = useState(initialState);
  const { filterProducts, setFilters, filters } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEV && <Footer filters={filters} />}
    </>
  );
}

export { App };
