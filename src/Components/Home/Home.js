import React from "react";
import Comment from "../Comment/Comment";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="hmoe-add-aria">
        <div className="text-aria">
          <h1>Hp is the Best</h1>
          <h3>HP 15s-du1115TU Celeron N4020 15.6" HD Laptop </h3>
          <p>
            {" "}
            <small>
              {" "}
              The 15s-du1115TU powered by Intel Celeron N4020 (1.1 GHz up to 2.8
              GHz, 2 cores) with Intel UHD Graphics 600. This Hp 15s series
              laptop comes with micro-edge display, the barely visible bezel
              revolutionizes your display by letting a larger screen fit into a
              smaller frame, that is featured with 15.6" diagonal, HD (1366 x
              768), micro-edge, BrightView,
            </small>
          </p>
        </div>
        <div className="image-aria">
          <img
            src="https://www.hpexclusive.com.bd/image/cache/catalog/laptop/hp-15s/hp-15s-00020-500x500.jpg"
            alt=""
          />
        </div>
      </div>
      <Comment></Comment>
    </div>
  );
};

export default Home;
