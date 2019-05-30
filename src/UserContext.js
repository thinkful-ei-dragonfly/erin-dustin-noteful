import React from 'react';

const UserContext = React.createContext({
   notes: [],
   folders: [],
  },
);

export default UserContext;
