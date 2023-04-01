import { Text, View } from "react-native";

export const RenderListHeader = () => {
  return (
    <View style={{ marginVertical: 20, marginLeft: 40 }}>
      <Text style={{ fontWeight: "bold", fontSize: 21, marginBottom: 20 }}>
        Your Cart
      </Text>
      <Text style={{ fontSize: 18 }}>Check and Payment</Text>
    </View>
  );
};
