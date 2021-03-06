import React from "react";
import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
      <div className="divider">
        <span></span>
        <span>Languages</span>
        <span></span>
      </div>
      <div className="card"> 
        <p>{languages.language}</p>
        <p>✏️ written: {languages.wrlevel}</p>
        <p>💭 spoken: {languages.splevel}</p>
      </div>
        <div className="divider">
        <span></span>
        <span>Skills</span>
        <span></span>
        </div>
      <div className="habilities-card">
        {habilities.map((txt) => (
          <p>👨‍💻 {txt}</p>
        ))}
      </div>
      <div className="divider">
        <span></span>
        <span>Hobbies</span>
        <span></span>
      </div>
      <div className="volunteer card">
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">💡{item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;