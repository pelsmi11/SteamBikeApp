import { FC, useReducer, useEffect } from "react";
import { ChangeMaounter, MotosContext, motosReducer } from "./";
import {
  Motorcycles,
  ShoppingMotorcycles,
} from "../interfaces/InterfaceMotorciley";
import { Platform, ToastAndroid } from "react-native";

export interface MotoState {
  shoppingMotos: ShoppingMotorcycles[];
}

const Moto_INITIAL_STATE: MotoState = {
  shoppingMotos: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MotosProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(motosReducer, Moto_INITIAL_STATE);

  const addNewMoto = (moto: Motorcycles) => {
    const newMotos: ShoppingMotorcycles = {
      ...moto,
      amount: 1,
    };
    dispatch({ type: "[Moto] Add-Moto", payload: newMotos });
  };

  const changeAmount = (id: string, amount: number) => {
    const newAmount: ChangeMaounter = {
      id,
      amount,
    };
    dispatch({ type: "[Moto] change-Amount", payload: newAmount });
  };

  const payment = () => {
    dispatch({ type: "[Moto] Payment" });
    if (Platform.OS === "android") {
      ToastAndroid.show("Gracias por su compra", ToastAndroid.LONG);
    }
  };

  const removeMoto = (id: string) => {
    dispatch({ type: "[Moto] Removed-Moto", payload: id });
  };

  return (
    <MotosContext.Provider
      value={{
        ...state,

        //Methods
        addNewMoto,
        changeAmount,
        payment,
        removeMoto,
      }}
    >
      {children}
    </MotosContext.Provider>
  );
};
