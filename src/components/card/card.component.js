import React from "react";
import "./card.styles.css";

export default function Card({ cat }) {
    return (
        <div className="card-container">
            <img
                src={`https://robohash.org/${cat.id}?set=set4&size=180x180`}
                alt={cat.name}
            />
            <h1>{cat.name}</h1>
            <p>{cat.email}</p>
        </div>
    );
}
