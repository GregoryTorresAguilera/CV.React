import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <div><h2 className="Portfolio__title">Portfolio</h2>
        <section className="Portfolio">
        
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643228571/cv/qumanos_b6216o.png" alt="Red social"></img>
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643228293/cv/poke_pfve44.png" alt="Poke api"></img>
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643227705/cv/abda_ujfkte.png" alt="Tienda"></img>
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643227805/cv/aguas_dwkhq0.png" alt="Empresa"></img>
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643227627/cv/Captura_ablwfn.png" alt="Netflix"></img>
        <img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1643228069/cv/rick_lsbfrn.png" alt="Rick Api"></img>
        </section>
        </div>
    )
}

export default Portfolio;