import React, { createContext, useState, useRef } from "react";

// Initialize the context
export const QueueRef = createContext();
export const QueueChange = createContext();

// eslint-disable-next-line react/prop-types
const QueueProvider = ({ children }) => {
  const queue = useRef();

  const queueRef = ref => {
    queue.current = ref;
    console.log(ref);
    return queue;
  };

  const queueChange = () => {
    return queue.current.next();
  };

  return (
    <QueueRef.Provider value={queueRef}>
      <QueueChange.Provider value={queueChange}>
        {children}
      </QueueChange.Provider>
    </QueueRef.Provider>
  );
};

export default QueueProvider;
