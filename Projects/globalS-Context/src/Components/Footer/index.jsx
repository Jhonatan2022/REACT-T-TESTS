import PropTypes from "prop-types";
import "./styles.css";

function Footer({ filters }) {
  return (
    <footer className="footer">
      <h4>
        Prueba de React⚛️
        {/* －<span>Jhonattan2022</span> */}
      </h4>
      {/* <h5>Shopping Cart useContext & useReducer</h5> */}
      <h5>{JSON.stringify(filters)}</h5>
    </footer>
  );
}

Footer.propTypes = {
  filters: PropTypes.object,
};

export { Footer };
