import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61yChtmB5RL._SX3000_.jpg"
          alt="Amazon Banner"
        />
        <div className="home_row">
          <Product
            id="12345678"
            title="PlayStation 5"
            price={499.99}
            rating={5}
            image="https://media.direct.playstation.com/is/image/sierialto/PS5-front-with-dualsense?$Background_Large$"
          />
          <Product
            id="9101112"
            title="Apple iPhone 15 Pro Max (1 TB) - Blue Titanium"
            price={1599.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81uHhPfJhhL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="13141516"
            title="CeraVe Hydrating Cleanser"
            price={35.06}
            rating={3}
            image="https://m.media-amazon.com/images/I/61Qahk76dYL._AC_SL1500_.jpg"
          />
          <Product
            id="171819"
            title="Crocs"
            price={39.28}
            rating={5}
            image="https://m.media-amazon.com/images/I/718K79ecZwL._AC_UX575_.jpg"
          />
          <Product
            id="20212223"
            title="Amazon Fire TV Cube, Hands-free streaming device with Alexa, Wi-Fi 6E, 4K Ultra HD"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61-Ps9NldbL._AC_SL1000_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="24252627"
            title="Kobe Bryant Buzzer Beater Shot vs. The Heat Unframed: 24x36 inch (60x90 cm)"
            price={135}
            rating={5}
            image="https://cdn.nba.com/teams/legacy/www.nba.com/lakers/sites/lakers/files/kobe_miami_game_winner091204.jpg"
          />
          <Product
            id="28293031"
            title="NBA 2K24 Black Mamba Edition - PlayStation 5"
            price={99.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81bV43pRRyL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
