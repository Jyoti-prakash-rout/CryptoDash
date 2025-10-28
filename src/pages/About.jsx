import React from "react";

const About = () => {
  return (
    <>
      <div className="about">
        <h1>About Crypto Dash</h1>
        <p>
          Crypto Dash is a simple React application that display live
          cryptocurrency data using CoinGecko API.
        </p>
        <p>
          You can explore the top cryptocurrencies by market cap, filter by name
          or symbol, and sort them by price,market cap, or 24h change.
        </p>
        <p>
          🚀 Future features might include detailed coin views, favorites,
          pagination, and much more!
				</p>
				<p className="text-center text-2xl font-bold font-mono">Built with ❤️ by Jyoti</p>
      </div>
    </>
  );
};

export default About;
