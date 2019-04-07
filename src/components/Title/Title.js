import React from "react";
import "./Title.css";

function Title(props) {
  return (

   <div className="header">
    <div className="title">Click Game with Avenger Friends!</div>
    <div className="Introduction">  
      <ul>Instructions:</ul>
        <li>Click on an Avenger to score points</li>
        <li>If you score 6 points, you win!</li>
        <li>If you click on the same Avenger twice, you lose!</li>
    </div>
    <div className="scores">
      Score: {props.score}
    </div>
    <div className="gamePlay">
      Game Status: Click on an Avenger Friend! {props.gamePlay}
    </div>
  </div>
   
  )
}

export default Title;
