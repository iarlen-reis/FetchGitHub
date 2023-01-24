import { createContext, useContext, useState } from "react";

export const RepositoryContext = createContext();

export const RepositoryProvider = ({ children }) => {
  const [repository, setRepository] = useState(null);
  const [userRepository, setUserRepository] = useState("");

  return (
    <RepositoryContext.Provider
      value={{ repository, setRepository, userRepository, setUserRepository }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export const useRepositoryContext = () => {
  return useContext(RepositoryContext);
};
