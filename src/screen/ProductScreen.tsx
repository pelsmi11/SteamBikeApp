import { StackScreenProps } from "@react-navigation/stack";
import React, { FC } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RootStackParams } from "../navigator/Navigator";
import { appColors } from "../constants/colors";
import { useMotosContex } from "../hooks/useMotosContex";

interface Props extends StackScreenProps<RootStackParams, "ProductScreen"> {}

export const ProductScreen: FC<Props> = ({ route, navigation }) => {
  const { addNewMoto } = useMotosContex();
  const motorcycle = route.params;
  const handlePress = () => {
    addNewMoto(motorcycle);
    navigation.navigate("PaymentScreen" as any);
  };
  return (
    <ScrollView style={{}}>
      <View style={{ alignItems: "center" }}>
        <View>
          <View style={{ alignItems: "center" }}>
            <Image source={require("../assets/motos/Fotos.png")} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.textSteampBikes}>{motorcycle.name}</Text>
            <Text style={styles.textEdition}>{motorcycle.edition}</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", height: 350 }}>
          <Image
            style={styles.bikeImage}
            source={motorcycle.image}
            resizeMode="contain"
          />
          <Image
            style={styles.podiumImage}
            source={require("../assets/motos/Podium.png")}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Text>
            <Text style={styles.textPrice}>${motorcycle.price}</Text>
            /NOW
          </Text>
        </View>
        <View style={{ width: 30 }} />
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textSteampBikes: {
    fontSize: 45,
    textAlign: "center",
  },
  textEdition: {
    fontSize: 21,
    textAlign: "center",
  },
  bikeImage: {
    height: 327,
    width: 390,
    position: "absolute",
    bottom: 30,
  },
  podiumImage: {
    width: 344,
    height: 68,
    position: "absolute",
    bottom: 20,
    zIndex: -1,
  },
  textPrice: {
    fontWeight: "bold",
    color: "#36877D",
    fontSize: 30,
  },
  button: {
    width: 199,
    height: 60,
    borderRadius: 10,
    backgroundColor: appColors.primary,
    justifyContent: "center",
    alignContent: "center",
  },
  textButton: {
    color: appColors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
