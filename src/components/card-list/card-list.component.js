import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

export const CardList = ({ cats }) => {
    return (
        <div className="card-list">
            {cats.map(c => (
                <Card key={c.id} cat={c} />
            ))}
        </div>
    );
};
