import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";

const SignUp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [zcode, setZcode] = useState("");
  const [number, setNumber] = useState(0);
  const [bname, setBname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordc, setPasswordc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const handleSub = (e) => {
    e.preventDefault();
    if (password !== passwordc) {
      setError(true);
      setErrorMessage("passwords don't match");
    }
  };
  return (
    <>
      <div className="signupcont">
        <h3>Sign Up</h3>
        <form>
          <TextField
            label="First Name"
            variant="filled"
            required
            className="input"
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
          <br></br>
          <TextField
            label="Last Name"
            variant="filled"
            required
            className="input"
            value={lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
          <br></br>
          <TextField
            label="Email"
            variant="filled"
            type="email"
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
            type="password"
            required
            className="input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br></br>
          <TextField
            label="Confirm Password"
            variant="filled"
            type="password"
            required
            className="input"
            value={passwordc}
            onChange={(e) => {
              setPasswordc(e.target.value);
            }}
          />
          <br></br>
          <TextField
            label="Business Name"
            variant="filled"
            required
            className="input"
            value={bname}
            onChange={(e) => {
              setBname(e.target.value);
            }}
          />
          <br></br>
          <TextField
            label="Zip Code"
            variant="filled"
            required
            className="input"
            value={zcode}
            onChange={(e) => {
              setZcode(e.target.value);
            }}
          />
          <br></br>
          <TextField
            label="Mobile"
            variant="filled"
            required
            className="input"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <br></br>
          {error && <h4>{errorMessage}</h4>}
          <button type="submit" className="btn" onClick={handleSub}>
            Sign Up
          </button>
        </form>
        <section className="smallheader">
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
    </>
  );
};

export default SignUp;
