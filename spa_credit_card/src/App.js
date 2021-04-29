import React from "react"
import CreditCard from "./CreditCard"

function App() {
  const cardInfo = {
    userName: 'Rigina Rysbekova',
    expirationData: '08/19',
    creditCardNum: '1234 5678 8965 4321',
    bankName: 'Comdirect'
  }
  return (
    <div className="App">
     <CreditCard 
        cardInfo={cardInfo}
     />
    </div>
  );
}

export default App;
