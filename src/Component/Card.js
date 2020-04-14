import React from "react";
import Star from "./Star";
import Add from "./Add";
import { connect } from "react-redux";
import { deletemovie } from "../Actions/action";
const Card = ({el,deletemovie}) => {
  return (

<div className="imgfilm">
                <img src={el.image} alt="logo"></img>
                <div className="name">{el.name}</div> <br />
                <div className="name">{el.an}</div>
                <Star rate={el.rate} />
                <button id="btnED" className="btnED"> Movie Description</button>
                <div className="btnEditEdelete">
                   <div className="btnED"><Add movie={el}/></div>
                   <button className="btnED" onClick={()=>deletemovie(el.id)}>DELETE</button></div>
              </div>
     );
    };
      export default connect(null,{deletemovie})(Card);