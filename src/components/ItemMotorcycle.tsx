import React, { FC } from "react";
import { Motorcycles } from "../interfaces/InterfaceMotorciley";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import { appColors } from "../constants/colors";
import { motorcycles } from "../constants/motorcycle";
import { shadowStyles } from "../theme/shadow";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigator/Navigator";

interface Props {
  motorcycle: Motorcycles;
}

export const ItemMotorcycle: FC<Props> = ({ motorcycle }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("ProductScreen", motorcycle)}
    >
      <View style={styles.container}>
        <View style={{ marginHorizontal: 30 }}>
          <View style={styles.imageContainer}>
            {motorcycle.img && (
              <Image
                style={styles.image}
                source={motorcycle.image}
                resizeMode="contain"
              />
            )}
          </View>
        </View>
        <View style={{ flex: 1, paddingHorizontal: 5 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {motorcycle.name}
          </Text>
          <View>
            <View>
              <Text>{motorcycle.edition}</Text>
              <Text>
                <Text
                  style={{ fontWeight: "bold", color: "#36877D", fontSize: 16 }}
                >
                  ${motorcycle.price}
                </Text>
                /NOW
              </Text>
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
