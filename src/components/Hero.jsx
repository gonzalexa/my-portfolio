import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>hi, i’m alexa!</h1>

        <h2>
          user experience designer{" "}
          <span className="smaller-text">& engineer ;)</span>
        </h2>
      </div>
    </section>
  );
}




