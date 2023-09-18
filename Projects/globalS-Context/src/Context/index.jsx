import { createContext, useState } from "react";
import PropTypes from "prop-types";

const FiltersContext = createContext();

function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
      // value={{ category: "all", minPrice: 0,}}
    >
      {children}
    </FiltersContext.Provider>
  );
}

FiltersProvider.propTypes = {
  // Node: cualquier cosa que pueda ser renderizada
  children: PropTypes.node.isRequired,
};

export { FiltersProvider, FiltersContext };
