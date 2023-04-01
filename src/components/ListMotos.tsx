import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { motorcycles } from "../constants/motorcycle";
import { ItemMotorcycle } from "./ItemMotorcycle";

export const ListMotos = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={motorcycles}
        renderItem={({ item }) => <ItemMotorcycle motorcycle={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
