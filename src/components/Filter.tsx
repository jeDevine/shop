import { FormEvent, useState } from "react";
import "./Filter.css";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [maxPrice, setMaxPrice] = useState("");
  const [includes, setIncludes] = useState("");
  const [limit, setLimit] = useState("");
  const query = {
    ...(maxPrice ? { "max-price": maxPrice } : {}),
    ...(includes ? { includes } : {}),
    ...(limit ? { limit } : {}),
  };
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/products?${new URLSearchParams(query)}`);
    setMaxPrice("");
    setIncludes("");
    setLimit("");
  };
  return (
    <form className="Filter" onSubmit={handleSubmit}>
      <label htmlFor="maxPrice">Max Price</label>
      <input
        type="number"
        name="maxPrice"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <label htmlFor="includes">Includes</label>
      <input
        type="text"
        name="includes"
        id="includes"
        value={includes}
        onChange={(e) => setIncludes(e.target.value)}
      />
      <label htmlFor="limit">Limit</label>
      <input
        type="number"
        name="limit"
        id="limit"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      />
      <button>Filter</button>
    </form>
  );
};

export default Filter;
