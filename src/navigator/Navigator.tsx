import { createStackNavigator } from "@react-navigation/stack";
import { Motorcycles } from "../interfaces/InterfaceMotorciley";
import { HomeScreen } from "../screen/HomeScreen";
import { ButtomTabs } from "./ButtomTabs";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProductScreen } from "../screen/ProductScreen";

export type RootStackParams = {
  ButtomTabs: undefined;
  ProductScreen: Motorcycles;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  "ProductScreen"
>;

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ButtomTabs"
        component={ButtomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={({ route }) => ({
          headerTitle: route?.params?.name || "SteamBike",
        })}
      />
    </Stack.Navigator>
  );
};
