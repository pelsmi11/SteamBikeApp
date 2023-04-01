import React, { FC, useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ShoppingMotorcycles } from "../interfaces/InterfaceMotorciley";
import { shadowStyles } from "../theme/shadow";
import { appColors } from "../constants/colors";
import { useMotosContex } from "../hooks/useMotosContex";

interface Props {
  moto: ShoppingMotorcycles;
}

export const PaymentItem: FC<Props> = ({ moto }) => {
  const [amount, setAmount] = useState(moto.amount);

  const { shoppingMotos, changeAmount } = useMotosContex();

  const handleChangeAmount = (increment: number) => {
    if (increment === -1 && amount === 1) return;
    setAmount(amount + increment);
  };

  useEffect(() => {
    hancleChangeAmount(moto.id, amount);
  }, [amount]);

  const hancleChangeAmount = (id: string, amount: number) => {
    changeAmount(id, amount);
  };
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 30 }}>
        <View style={styles.imageContainer}>
          {moto.img && (
            <Image
              style={styles.image}
              source={moto.image}
              resizeMode="contain"
            />
          )}
        </View>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{moto.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text>{moto.edition}</Text>
            <Text>
              <Text
                style={{ fontWeight: "bold", color: "#36877D", fontSize: 16 }}
              >
                ${moto.price}
              </Text>
              /NOW
            </Text>
          </View>
          <View
            style={{
              backgroundColor: appColors.gray,
              flex: 1,
              marginHorizontal: 5,
              borderRadius: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            >
              <TouchableOpacity
                onPress={() => handleChangeAmount(-1)}
                style={{ flex: 1 }}
              >
                <Text style={{ fontSize: 20, textAlign: "center" }}>{"<"}</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 10, marginHorizontal: 10 }}>
                {amount}
              </Text>
              <TouchableOpacity
                onPress={() => handleChangeAmount(1)}
                style={{ flex: 1 }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  {">"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 123,
    backgroundColor: appColors.white,
    marginVertical: 15,
    marginHorizontal: 30,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    ...shadowStyles.shadow,
  },
  imageContainer: {
    width: 104,
    height: 107,
    backgroundColor: appColors.gray,
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  image: {
    width: 150,
    height: 118,
    position: "absolute",
  },
});
