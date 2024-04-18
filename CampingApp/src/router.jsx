import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import CustomBottomTab from './components/CustomBottomTab';

import Splash from './pages/Splash';
import OnboardingScreen from './pages/OnboardingScreen';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const renderTabBar = props => <CustomBottomTab {...props} />;

// const SearchTab = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="Search" component={Search} />
//       <Stack.Screen name="SearchList" component={SearchList} />
//     </Stack.Navigator>
//   );
// };

// const MainTab = () => {
//   return (
//     <Tab.Navigator
//       tabBar={renderTabBar}
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Tab.Screen name="홈" component={Home} />
//       <Tab.Screen name="검색" component={SearchTab} />
//       <Tab.Screen name="추가" component={Add} />
//       <Tab.Screen name="쇼츠" component={Play} />
//       <Tab.Screen name="마이페이지" component={Mypage} />
//     </Tab.Navigator>
//   );
// };
const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Router;
