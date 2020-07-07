import { createContext } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const DataContext = createContext({
  error: {},
  bills: [],
  types: [],
  profile: {},
});
