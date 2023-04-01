import React from "react";
import {
  View,
  Text,
  NativeModules,
  Platform,
  FlatList,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMotosContex } from "../hooks/useMotosContex";
import { PaymentItem } from "../components/PaymentItem";
import { appColors } from "../constants/colors";
import { shadowStyles } from "../theme/shadow";
import { PayButton } from "../components/PayButton";

const testItem = ["1", "2", "3", "4", "5"];

export const PaymentScreen = () => {
  const { top } = useSafeAreaInsets();
  const { StatusBarManager } = NativeModules;

  const { shoppingMotos } = useMotosContex();
  const renderListHeader = () => {
    return (
      <View style={{ marginVertical: 20, marginLeft: 40 }}>
        <Text style={{ fontWeight: "bold", fontSize: 21, marginBottom: 20 }}>
          Your Cart
        </Text>
        <Text style={{ fontSize: 18 }}>Check and Payment</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        // paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : top,
      }}
    >
      <FlatList
        data={shoppingMotos}
        renderItem={({ item }) => <PaymentItem moto={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderListHeader}
        ListFooterComponent={PayButton}
      />
    </View>
  );
};
