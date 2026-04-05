"use client";

import { useState } from "react";
import FlashCard from "./components/FlashCard";
import { cards } from "./data/cards";
import ProgressBar from "./components/ProgressBar";

export default function Home(){
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = ()=>{
    if(index <cards.length -1){
      setIndex(index + 1);
      setFlipped(false);
    }
  };
  const prevCard = ()=>{
    if(index > 0){
      setIndex(index-1);
      setFlipped(false);
    }
  };

  const toggleFlip = ()=>{
    setFlipped((prev)=>!prev);
  }
  return (
    <main className="container">
      <ProgressBar current={index} total={cards.length}/>
      <FlashCard
      question = {cards[index].question}
      answer = {cards[index].answer}
      flipped = {flipped}
      />
      <div className="buttons">
        <button onClick={prevCard} className="prevBtn">Prev</button>
        <button onClick={toggleFlip}>{flipped?"Hide Answer" : "Show Answer"}</button>
        <button onClick={nextCard} className="nextBtn">Next</button>
      </div>
    </main>
  )
}