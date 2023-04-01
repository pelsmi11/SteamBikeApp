import React from "react";
import { View, Text, Image, NativeModules, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ListMotos } from "../components/ListMotos";

const IMAGE_BASE_PATH = "../assets";

export const HomeScreen = () => {
  //   console.log(__dirname);
  const { top } = useSafeAreaInsets();
  const { StatusBarManager } = NativeModules;
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : top,
      }}
    >
      <ListMotos />
    </View>
  );
};
