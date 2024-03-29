// import ChatScreen from "./src/pages/ChatScreen";
// import AnimateExample from "./src/pages/AnimateExample";
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router'

function App(): React.JSX.Element {

  return (

    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    
  ); 
}


export default App;
