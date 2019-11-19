import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

const Checkout = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    /* Experiment with the properties, use https://www.react-spring.io/docs/hooks/api for reference */
    // config: {
    //   tension: 400,
    //   friction: 200
    // }
    config: config.wobbly
  });

  return (
    <div
      className="checkout"
      style={{ pointerEvents: isOpen ? "all" : "none" }}
    >
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`)
        }}
        className="checkout-left"
      ></animated.div>
      <animated.div
        style={{ transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`) }}
        className="checkout-right"
      ></animated.div>
    </div>
  );
};

export default Checkout;
