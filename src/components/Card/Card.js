import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectCar(props.make)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.make} src={props.image} />
            </a>
        </div>
    </div>
);

export default Card;
