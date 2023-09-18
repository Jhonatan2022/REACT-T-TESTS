import { Filters } from "../Filters";

function Header({ changeFilters }) {
  return (
    <header>
      <h1>Shop 👛</h1>
        <Filters changeFilters={changeFilters} />
    </header>
  );
}

export { Header };