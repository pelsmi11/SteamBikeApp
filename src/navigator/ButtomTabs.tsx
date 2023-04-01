import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screen/HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { appColors } from "../constants/colors";
import { PaymentScreen } from "../screen/PaymentScreen";

const Tab = createBottomTabNavigator();

export const ButtomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: appColors.primary,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "SteampBikes",
          tabBarIcon: () => (
            <Ionicons name="bicycle" size={32} color={appColors.primary} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          tabBarLabel: "Payment",
          tabBarIcon: () => (
            <Ionicons name="pricetags" size={32} color={appColors.primary} />
          ),
          headerTitle: "Payment Process",
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};
