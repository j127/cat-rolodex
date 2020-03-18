import React from "react";
import "./search-box.styles.css";

export default function SearchBox({ placeholder, handleChange }) {
    return (
        <div className="search-wrapper">
            <label htmlFor="searchBox">Search</label>{" "}
            <input
                name="searchBox"
                className="search"
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
                autofocus="true"
            />
        </div>
    );
}
