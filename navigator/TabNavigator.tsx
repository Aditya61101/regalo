import React from 'react';
import { HomeScreen } from "../screens/HomeScreen";
import { DiscoverScreen } from "../screens/DiscoverScreen";
import { HistoryScreen } from "../screens/HistoryScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    const [fontsLoaded] = useFonts({
        'ClashDisplayMedium': require('../assets/fonts/ClashDisplay-Medium.otf'),
        'ClashDisplay': require('../assets/fonts/ClashDisplay-Regular.otf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#1a1a1a",
                    paddingBottom: 3,
                },
                tabBarLabelStyle: {
                    fontFamily: 'ClashDisplay'
                },
                tabBarActiveTintColor: "#ffd43a",
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused, size }) => (
                    <MaterialCommunityIcons name={focused ? "home" : "home-outline"} color="#FFD43A" size={size} />
                ),
            }} />
            <Tab.Screen name="Discover" component={DiscoverScreen} options={{
                tabBarLabel: 'Discover',
                tabBarIcon: ({ size }) => (
                    <MaterialIcons name="explore" size={size} color="#ffd43a" />
                ),
            }} />
            <Tab.Screen name="History" component={HistoryScreen} options={{
                tabBarLabel: 'History',
                tabBarIcon: ({ size }) => (
                    <MaterialIcons name="history-toggle-off" size={size} color="#ffd43a" />
                ),
            }} />
        </Tab.Navigator>
    )
}