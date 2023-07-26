/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

const Gigs = () => {
  const [open, SetOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    SetOpen(false);
  };
  return (
    <div className="gigs">
      <div className="gigs">
        <div className="container">
          <div className="breadcrumbs">
            {" "}
            FIVERR &gt; GRAPHICS & DESIGN &gt;{" "}
          </div>
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and technology with Fiverr's AI
            artists
          </p>
          <div className="menu">
            <div className="left">
              <span>Budget</span>
              <input type="text" placeholder="min" />
              <input type="text" placeholder="max" />
              <button>Apply</button>
            </div>
            <div className="right">
              <div className="sortBy">SortBy</div>
              <div className="sortType">
                {sort === "sales" ? "Best Selling" : "Newest"}
              </div>
              <img
                src="./images/down.png"
                alt=""
                onClick={() => SetOpen(!open)}
              />
              {open && (
                <div className="rightMenu">
                  {sort === "sales" ? (
                    <span onClick={() => reSort("creadtedAt")}>Newest</span>
                  ) : (
                    <span onClick={() => reSort("sales")}>Best Seller</span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="cards">
            {gigs.map((gig) => (
              <GigCard key={gig.id} item={gig} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gigs;
