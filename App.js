// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import CreateBill from "./Screens/CreateBill";
import Prompt from './Screens/Prompt';
import SignUpScreen from './Screens/SignUp'; // Ensure the path is correct
import SignInScreen from './Screens/SignIn';
import InvoiceHome from './Screens/InvoiceHome';
import Settings from './Screens/Settings';
import Add from './Screens/Add';
import History from './Screens/InvoiceHistory';
import SignedInHome from './Screens/SignedInHome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="CreateBill" component={CreateBill} />
        <Stack.Screen name="Prompt" component={Prompt} />
        <Stack.Screen name="MakeAnInvoice" component={InvoiceHome} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name = "SignedInHome" component={SignedInHome} options={{ headerShown: false }}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}