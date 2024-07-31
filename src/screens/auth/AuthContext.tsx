import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface State {
  isLoggedIn: boolean;
  userToken: string | null;
  email: string;
  password: string;
  pinConfirmed: boolean;
  pinCode: string;
  name: string;
  lastName: string;
  image: string;
}

type Action =
  | { type: 'INIT'; payload: State }
  | { type: 'LOGIN'; token: string; email: string; password: string }
  | { type: 'LOGOUT' }
  | { type: 'CONFIRM_PIN'; pinCode: string }
  | { type: 'SET_USER_DATA'; name: string; lastName: string; image: string };

const initialState: State = {
  isLoggedIn: false,
  userToken: null,
  email: '',
  password: '',
  pinConfirmed: false,
  pinCode: '',
  name: '',
  lastName: '',
  image: '',
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
    case 'SET_USER_DATA':
      return {
        ...state,
        name: action.name,
        lastName: action.lastName,
        image: action.image,
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
      const userData = await AsyncStorage.getItem('userData');

      if (storedState) {
        const parsedState = JSON.parse(storedState);
        dispatch({
          type: 'INIT',
          payload: {
            ...parsedState,
            ...(userData ? JSON.parse(userData) : {}),
          },
        });
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
