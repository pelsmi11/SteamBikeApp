import { ShoppingMotorcycles } from "../interfaces/InterfaceMotorciley";
import { MotoState } from "./MotosProvider";

export interface ChangeMaounter {
  id: string;
  amount: number;
}

type MotoActionType =
  | { type: "[Moto] Add-Moto"; payload: ShoppingMotorcycles }
  | { type: "[Moto] change-Amount"; payload: ChangeMaounter }
  | { type: "[Moto] Payment" };

export const motosReducer = (
  state: MotoState,
  action: MotoActionType
): MotoState => {
  switch (action.type) {
    case "[Moto] Add-Moto":
      const existingMoto = state.shoppingMotos.find(
        (moto) => moto.id === action.payload.id
      );
      const updatedShoppingMotos = existingMoto
        ? state.shoppingMotos.map((moto) =>
            moto.id === action.payload.id ? action.payload : moto
          )
        : [...state.shoppingMotos, action.payload];
      return {
        ...state,
        shoppingMotos: updatedShoppingMotos,
      };
    case "[Moto] change-Amount":
      const changeAmount = state.shoppingMotos.map((moto) => {
        return moto.id === action.payload.id
          ? { ...moto, amount: action.payload.amount }
          : moto;
      });
      return {
        ...state,
        shoppingMotos: changeAmount,
      };
    case "[Moto] Payment":
      return {
        ...state,
        shoppingMotos: [],
      };
    default:
      return state;
  }
};
