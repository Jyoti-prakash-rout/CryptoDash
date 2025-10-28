import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import CoinCard from "./components/CoinCard";
import LimitSelector from "./components/LimitSelector";
import FilterInput from "./components/FilterInput";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
        );
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        console.log(data);
        setCoins(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [limit]);

  const filterdCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(filter.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
      {loading && <p>Loading...</p>}
      {error && <div className="error"> {error} </div>}

      <div className="top-controls">
        <FilterInput filter={filter} setFilter={setFilter} />
        <LimitSelector limit={limit} setLimit={setLimit} />
      </div>

      {!loading && !error && (
        <main className="grid">
          {filterdCoins.length > 0 ? (
            filterdCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
          ) : (
            <p className="text-center font-bold">No matching coins found! 😐</p>
          )}
        </main>
      )}
    </div>
  );
};

export default App;
