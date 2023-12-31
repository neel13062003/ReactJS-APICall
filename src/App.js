import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./Coin";

// function Coin({ name, symbol, imgsrc, price }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{symbol}</p>
//       <p>{price}</p>
//       <img src={imgsrc} alt={name} />
//     </div>
//   );
// }

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAllcoins = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "inr",
            },
          }
        );
        //console.log(data);
        setCoins(data);
      } catch (error) {
        //console.error("Error fetching data:", error);
      }
    };

    fetchAllcoins();
  }, []);

  return (
    <>
      <div>
        <h1>React Axios Example</h1>
        {coins.map((i) => (
          <Coin
            key={i.id}
            name={i.name}
            symbol={i.symbol}
            imgsrc={i.image}
            price={i.current_price}
          />
        ))}
      </div>
    </>
  );
}

export default App;