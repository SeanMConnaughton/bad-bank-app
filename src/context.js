import { createContext } from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';

// Correctly create the UserContext
const UserContext = createContext(null);

export default UserContext;
