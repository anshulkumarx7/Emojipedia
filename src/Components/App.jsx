import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(emojiterms){
    return <Card 
        key={emojiterms.id}
        emoji={emojiterms.emoji}
        name={emojiterms.name}
        meaning={emojiterms.meaning}
    />
}
function App(){
    return <div>
        <Header />
        <div className="Dictionary">{emojipedia.map(createCard)}</div>
        <Footer />
    </div>
}

export default App;