import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface State {
  isLoggedIn: boolean;
  userToken: string | null;
  email: string;
  password: string;
  pinConfirmed: boolean;
  pinCode: string;
}

type Action =
  | { type: 'INIT'; payload: State }
  | { type: 'LOGIN'; token: string; email: string; password: string }
  | { type: 'LOGOUT' }
  | { type: 'CONFIRM_PIN'; pinCode: string };

const initialState: State = {
  isLoggedIn: false,
  userToken: null,
  email: '',
  password: '',
  pinConfirmed: false,
  pinCode: '',
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        ...action.payload,
      };
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        userToken: action.token,
        email: action.email,
        password: action.password,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        userToken: null,
        email: '',
        password: '',
        pinConfirmed: false,
        pinCode: '',
      };
    case 'CONFIRM_PIN':
      return {
        ...state,
        pinConfirmed: true,
        pinCode: action.pinCode,
      };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadState = async () => {
      const storedState = await AsyncStorage.getItem('appState');
      if (storedState) {
        dispatch({ type: 'INIT', payload: JSON.parse(storedState) });
      }
    };

    loadState();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
