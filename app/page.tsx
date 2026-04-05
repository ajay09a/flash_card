"use client";

import { useState } from "react";
import FlashCard from "./components/FlashCard";
import { cards } from "./data/cards";
import ProgressBar from "./components/ProgressBar";

export default function Home(){
  const [index, setIndex] = useState(0);

  const nextCard = ()=>{
    if(index <cards.length -1){
      setIndex(index + 1);
    }
  };
  const prevCard = ()=>{
    if(index > 0){
      setIndex(index-1);
    }
  };
  return (
    <main className="main">
      <ProgressBar current={index} total={cards.length}/>
      <FlashCard
      question = {cards[index].question}
      answer = {cards[index].answer}
      />
      <div className="buttons">
        <button onClick={prevCard} className="preBtn">Prev</button>
        <button onClick={nextCard} className="nextBtn">Next</button>
      </div>
    </main>
  )
}