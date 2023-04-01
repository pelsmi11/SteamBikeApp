import React, { useContext } from "react";
import { MotosContext } from "../context";

export const useMotosContex = () => {
  return useContext(MotosContext);
};
