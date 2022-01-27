import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <div><h2 className="Portfolio__title">Portfolio</h2>
        <section className="Portfolio">
        
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643228571/cv/qumanos_b6216o.png" alt="Red social"></img>
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643283430/cv/pokemon_hfonim.png" alt="Poke api"></img>
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643227705/cv/abda_ujfkte.png" alt="Tienda"></img>
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643227805/cv/aguas_dwkhq0.png" alt="Empresa"></img>
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643283088/cv/netflix_xbqgga.png" alt="Netflix"></img>
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643283557/cv/rickmorty_kssca6.png" alt="Rick Api"></img>
        </section>
        </div>
    )
}

export default Portfolio;