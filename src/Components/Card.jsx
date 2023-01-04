import React from "react";

function Card(props){
    return <div className="card">
    <dt>
        <span className="emoji">{props.emoji}</span>
        <span className="title">{props.name}</span>
    </dt>
    <dd>{props.meaning}</dd>
    </div>
}

export default Card;