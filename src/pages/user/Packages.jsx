import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request_all } from "../../server/server";
import { Spin, Pagination, Empty } from "antd";
import "../style/packages.css";

const Packages = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]); // O'zgarishi kerak
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    setFilteredItems(currentItems); // setCurrentItems o'rniga setFilteredItems deb o'zgartirish
  }, [currentPage, filteredData, itemsPerPage]);

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
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
        setIsLoading(false);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="packages-all-div">
      <div className="container">
        <form className="header-form">
          <input
            type="text"
            placeholder="Search for your adventure..."
            value={searchText}
            onChange={handleSearchChange}
          />
          <Link to="?" className="btn-link">
            <button className="btn">
              <i className="ri-search-line"></i> Search
            </button>
          </Link>
        </form>

        <div className="packages-list">
          {isLoading ? (
            <div className="loading-packages">
              <Spin size="large" />
            </div>
          ) : (
            <>
              {filteredItems.length === 0 ? (
                <div className="empty-packages">
                  <Empty />
                </div>
              ) : (
                filteredItems.map((item) => (
                  <Link to={`/country/${item.id}/country-about`} key={item.id}>
                    <div className="package-item">
                      <img src={item.img} alt="" />
                      <h3>{item.name}</h3>
                      <p>
                        {item.description.split(" ").slice(0, 10).join(" ")}
                        {item.description.split(" ").length > 10 ? "..." : ""}
                      </p>

                      <button className="price-p">Price: ${item.price}</button>
                    </div>
                  </Link>
                ))
              )}
            </>
          )}
        </div>

        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={filteredData.length}
          onChange={handlePageChange}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default Packages;
