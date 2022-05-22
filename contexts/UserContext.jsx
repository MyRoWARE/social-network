import { createContext, useContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState({ name: 'jeff', user: 'test' });

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const exposed = {
    user,
    setUser,
  };
  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;
