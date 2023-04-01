import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { appColors } from "../constants/colors";
import { useMotosContex } from "../hooks/useMotosContex";
import { shadowStyles } from "../theme/shadow";
import { TouchableOpacity } from "react-native-gesture-handler";

export const PayButton = () => {
  const { shoppingMotos, payment } = useMotosContex();
  const [amountTotal, setAmountTotal] = useState<number>(0);

  useEffect(() => {
    calcTotal();
  }, [shoppingMotos]);

  const calcTotal = () => {
    const total = shoppingMotos.reduce((accumulator, current) => {
      return accumulator + current.price * current.amount;
    }, 0);
    setAmountTotal(total);
  };

  return (
    <TouchableOpacity onPress={payment} activeOpacity={0.8}>
      <View style={styles.button}>
        <Text style={styles.textButton}>Check Out: ${amountTotal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: appColors.primary,
    height: 73,
    marginHorizontal: 50,
    borderRadius: 15,
    marginBottom: 30,
    justifyContent: "center",
    ...shadowStyles.shadow,
  },
  textButton: {
    textAlign: "center",
    fontSize: 24,
    color: appColors.white,
  },
});
