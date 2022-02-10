import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Pop from "./Pop";
const Home = ({ closeSub }) => {
  const [popUp, setPopUp] = useState(false);
  const closePop = () => {
    setPopUp(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setPopUp(true);
    }, 3000);
  }, []);
  return (
    <div style={{ display: "grid" }}>
      <section style={{ height: "50vh", width: "100%", alignItems: "center" }}>
        {/* <img
          src={
            "https://cdn.shopify.com/s/files/1/0680/3205/files/IMG_1902-1_1024x1024.jpeg?v=1556102132"
          }
        /> */}
      </section>
      {popUp && <Pop closePop={closePop}></Pop>}

      <div className="main">
        <motion.section className="home-all">
          <Link to="/whoweare">
            <motion.img
              src="https://dietitiandebbie.com/wp-content/uploads/2021/03/Mocha-Smoothie-with-Peanut-Butter.jpg"
              alt="pic"
              initial={{ scale: 0.5, x: -200 }}
              animate={{ scale: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 30,
              }}
              style={{ width: "100%", height: "100vh" }}
            />
            <section className="headerCont">
              <h1>Who we are</h1>
            </section>
          </Link>
        </motion.section>

        <motion.section className="home-all">
          <Link to="/howitworks">
            <motion.img
              src="https://cookieandkate.com/images/2018/05/blueberry-smoothie-recipe-1.jpg"
              alt="pic"
              initial={{ scale: 0.5, y: -200 }}
              animate={{ scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 30,
              }}
              style={{ width: "100%", height: "100vh" }}
            />

            <section className="headerCont">
              <h1>How it works </h1>
            </section>
          </Link>
        </motion.section>
        <motion.section className="home-all">
          {" "}
          <Link to="/benefits">
            <motion.img
              src="https://ohsheglows.com/wp-content/uploads/2014/03/greensmoothie.jpg"
              alt="pic"
              initial={{ scale: 0.5, y: 200 }}
              animate={{ scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 30,
              }}
              style={{ width: "100%", height: "100vh" }}
            />
            <section className="headerCont">
              <h1>Benefits</h1>
            </section>
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
