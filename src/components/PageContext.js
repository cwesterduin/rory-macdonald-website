import React, { useState } from 'react';

export const myContext = React.createContext();

const Provider = props => {
  const [parentPage, setParentPage] = useState(false);

  return (
    <myContext.Provider value={{
      parentPage,
      changeParentPage: (e) => setParentPage(e)
    }}>
      {props.children}
    </myContext.Provider>
  )
};

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);
