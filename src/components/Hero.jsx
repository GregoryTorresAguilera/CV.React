import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img className="photo" src={hero.image} alt="" />
      <div className="card">
      <h2>
        {hero.name} {hero.adress}
      </h2>
        <p>πΊοΈ{hero.city} </p>
        <p>ποΈ{hero.birthDate}</p>
        <p>
          π§
          <a href={"mailto:" + hero.email}>
            gophiyo@gmail.com
          </a>
        </p>
        <p>πΎ<a href={hero.gitHub}>
            GitHub
          </a></p>
        
      </div>
    </div>
  );
};

export default Hero;