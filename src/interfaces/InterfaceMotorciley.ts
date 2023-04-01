import { ImageSourcePropType } from "react-native/types";

export interface Motorcycles {
  id: string;
  name: string;
  img: string;
  edition: string;
  image: ImageSourcePropType;
  price: number;
}

export interface ShoppingMotorcycles {
  id: string;
  name: string;
  img: string;
  edition: string;
  image: ImageSourcePropType;
  price: number;
  amount: number;
}
