import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const enjoys = [
  "rewatching the same shows",
  "unique chocolate truffle flavors",
  "adding new places to my lists on Google Maps",
  "collecting pins for every country i visit",
  "checking books off my ToBeRead"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % enjoys.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);
    
  return (
    <section style={{ padding: "20px 0px"}}>
      <h1>hi, i’m alexa!</h1>

      <h2>
        user experience designer{" "}
       <span className="smaller-text">& engineer ;)</span>
      </h2>


      <p style={{ maxWidth: "650px" }}>
        i enjoy{" "}
        <span
          style={{
            position: "relative",
            display: "inline-block",
            minWidth: "28ch"
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={enjoys[index]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              style={{left: 0 }}
            >
              {enjoys[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </p>
    </section>
  );
}




