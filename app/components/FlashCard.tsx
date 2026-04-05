"use client";


export default function FlashCard({question, answer, flipped}: any){
    return(
        <div
        className="card">
            {flipped ? answer : question}
        </div>
    )
}