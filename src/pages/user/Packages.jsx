import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request_all } from "../../server/server";
import "../style/packages.css";

const Packages = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const savedSearchText = localStorage.getItem("searchText");
    if (savedSearchText) {
      setSearchText(savedSearchText);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (searchText !== "") {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchText, data]);

  const handleSearchChange = (event) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    localStorage.setItem("searchText", newSearchText);
  };

  const fetchData = () => {
    request_all
      .get("country-all")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      });
  };

  return (
    <div className="container">
      <form className="header-form-packages">
        <input
          type="text"
          placeholder="Search for your adventure..."
          value={searchText}
          onChange={handleSearchChange}
        />
        <Link to={`/packages?search=${searchText}`} className="btn-link">
          <button className="btn">
            <i className="ri-search-line"></i> Search
          </button>
        </Link>
      </form>

      <div className="packages-list">
        {filteredData.map((item) => (
          <div key={item.id} className="package-item">
            <hr /><h3>{item.name}</h3>
            <p>{item.description}</p>
            <img src={item.img} alt={item.name} />
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
