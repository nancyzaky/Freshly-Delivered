import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signupcont" style={{ height: "30vh" }}>
      <h3>Log In</h3>
      <form>
        <TextField
          label="Email"
          variant="filled"
          required
          className="input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br></br>
        <TextField
          label="Password"
          variant="filled"
          required
          className="input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br></br>
      </form>
      <button className="btn">Log In</button>
      <section className="smallheader" style={{ marginTop: "20%" }}>
        <motion.h3
          style={{ color: "green" }}
          initial={{ scale: 0, x: -500 }}
          animate={{ scale: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 40,
          }}
        >
          Freshly delivered
        </motion.h3>
      </section>
    </div>
  );
};

export default LogIn;
