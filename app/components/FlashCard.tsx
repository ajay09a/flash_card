"use client";

import { useState } from "react";

export default function FlashCard({question, answer}: any){
    const [flipped, setFlipped] = useState(false);
    return(
        <div
        onClick={()=>setFlipped(!flipped)}
        className="card">
            <p className="inner-box">{flipped ? answer : question}</p>
        </div>
    )
}