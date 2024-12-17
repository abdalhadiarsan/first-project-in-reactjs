import React, { createContext, useRef, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);



  return (
    <UserContext.Provider value={{ users , setUsers  ,setTasks , tasks }}>
      {children}
    </UserContext.Provider>
  );
};
