import React from "react";
import { Cards } from "./Cards";
import { API } from "./data";
import { useState, useEffect } from "react";

export function SearchList({ filteredProducts }) {
  const [mobilelist, setMobilelist] = useState([]);

  const getMobile = () => {
    fetch(`${API}/mobile`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mob) => setMobilelist(mob));
  };

  useEffect(() => getMobile(), []);

  const filtered = mobilelist.map((product) => (
    <Cards key={product.id} product={product} />
  ));

  return <div className="card-list">{filtered}</div>;
}
