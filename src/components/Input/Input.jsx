/* eslint-disable react/prop-types */
import { IoIosSearch } from "react-icons/io";
import "./Input.css";
import { useState } from "react";

const Input = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      onSearch(search);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <IoIosSearch size={15} />
      </button>
    </form>
  );
};

export default Input;
