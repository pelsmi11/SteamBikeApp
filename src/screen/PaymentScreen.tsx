import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  NativeModules,
  Platform,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMotosContex } from "../hooks/useMotosContex";
import { PaymentItem } from "../components/PaymentItem";
import { appColors } from "../constants/colors";
import { shadowStyles } from "../theme/shadow";
import { PayButton } from "../components/PayButton";
import { RenderListHeader } from "../components/RenderListHeader";
import {
  Motorcycles,
  ShoppingMotorcycles,
} from "../interfaces/InterfaceMotorciley";
import Ionicons from "@expo/vector-icons/Ionicons";

interface RowSwipeAnimatedValues {
  [key: string]: Animated.Value;
}

export const PaymentScreen = () => {
  const { top } = useSafeAreaInsets();
  const { StatusBarManager } = NativeModules;

  const { shoppingMotos, removeMoto } = useMotosContex();

  const rowSwipeAnimatedValues = useRef<RowSwipeAnimatedValues>(
    shoppingMotos.reduce<RowSwipeAnimatedValues>((acc, moto) => {
      acc[moto.id] = new Animated.Value(0);
      return acc;
    }, {})
  ).current;

  useEffect(() => {
    const newAnimatedValues = shoppingMotos.reduce<RowSwipeAnimatedValues>(
      (acc, moto) => {
        acc[moto.id] = new Animated.Value(0);
        return acc;
      },
      {}
    );

    for (const key in rowSwipeAnimatedValues) {
      if (!(key in newAnimatedValues)) {
        delete rowSwipeAnimatedValues[key];
      }
    }

    for (const key in newAnimatedValues) {
      if (!(key in rowSwipeAnimatedValues)) {
        rowSwipeAnimatedValues[key] = newAnimatedValues[key];
      }
    }
  }, [shoppingMotos]);

  const renderHiddenItem = (data: { item: Motorcycles }, rowMap: any) => {
    const rowSwipeAnimatedValue = rowSwipeAnimatedValues[data.item.id];

    if (!rowSwipeAnimatedValue) {
      rowSwipeAnimatedValues[data.item.id] = new Animated.Value(0);
    }

    return (
      <Animated.View
        style={[
          styles.rowBack,
          {
            transform: [
              {
                translateX: rowSwipeAnimatedValues[data.item.id].interpolate({
                  inputRange: [-75, 0],
                  outputRange: [0, 75],
                }),
              },
            ],
          },
        ]}
      >
        <View style={{ width: "100%" }} />
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnDelete]}
          onPress={() => handleDelete(data.item)}
        >
          <Ionicons name="trash" size={50} color={appColors.white} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const handleDelete = (moto: Motorcycles) => {
    removeMoto(moto.id);
  };

  return (
    <View
      style={{
        flex: 1,
        // paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : top,
      }}
    >
      <SwipeListView<ShoppingMotorcycles>
        data={shoppingMotos}
        renderItem={({ item }) => <PaymentItem moto={item} />}
        renderHiddenItem={renderHiddenItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={RenderListHeader}
        ListFooterComponent={PayButton}
        rightOpenValue={-75}
        onSwipeValueChange={(swipeData) => {
          const rowKey = swipeData.key;
          const newRowSwipeAnimatedValue = swipeData.value;

          if (rowSwipeAnimatedValues[rowKey]) {
            rowSwipeAnimatedValues[rowKey].setValue(newRowSwipeAnimatedValue);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 15,
  },
  backRightBtn: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 75,
  },
  backRightBtnDelete: {
    backgroundColor: appColors.primary,
    borderRadius: 12,
    right: 0,
    height: 123,
  },
  backTextWhite: {
    color: "#FFF",
  },
});
