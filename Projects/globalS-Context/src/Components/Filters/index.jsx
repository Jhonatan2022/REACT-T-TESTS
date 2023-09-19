import { useState, useId } from 'react';
import { useFilters } from '../../Hooks/useFilters';
import './styles.css';

function Filters() {
  const { setFilters } = useFilters();
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handlePriceChange = (event) => {
    setMinPrice(event.target.value);
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input type="range" id={minPriceFilterId} min="0" max="1000" 
        onChange={handlePriceChange}/>
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Phones</option>
        </select>
      </div>
    </section>
  );
}

export { Filters };
