import PropTypes from "prop-types";
import { AddToCartIcon } from "../Icons";
import "./styles.css";


function Products({ products }) {

    Products.propTypes = {
        products: PropTypes.array.isRequired,
    };  

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
                <strong>{product.title}</strong> - <span>$ {product.price}</span>
            </div>
            <div>
                <button>
                    <AddToCartIcon />
                </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export { Products };