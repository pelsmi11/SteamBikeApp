import { createContext } from "react";
import {
  Motorcycles,
  ShoppingMotorcycles,
} from "../interfaces/InterfaceMotorciley";

interface ContextProps {
  shoppingMotos: ShoppingMotorcycles[];

  //Methods
  addNewMoto: (moto: Motorcycles) => void;
  changeAmount: (id: string, amount: number) => void;
  payment: () => void;
  removeMoto: (id: string) => void;
  //   updateEntry: (entry: Entry, showSnackbar?: boolean) => void;
  //   deleteEntry: (entry: Entry, showSnackbar?: boolean) => void;
}

export const MotosContext = createContext({} as ContextProps);
