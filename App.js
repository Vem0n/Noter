import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import EditScreen from "./src/screens/EditScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Provider } from "./src/components/BlogProvider";


const navigator = createStackNavigator({
  Index: IndexScreen,
  Edit: EditScreen,
  Create: CreateScreen,
  Show: ShowScreen
}, {
  initialRouteName: "Index",
  defaultNavigationOptions: {
    title: "Notes"
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider><App /></Provider>;
}