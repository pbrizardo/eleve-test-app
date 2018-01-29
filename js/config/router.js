import Home from '../screens/Home';
import Restaurants from '../screens/Restaurants';
import { TabNavigator } from 'react-navigation';

export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarVisible: false
        }
    },
    Restaurants: { 
        screen: Restaurants,
        navigationOptions: {
            tabBarVisible: false
        }
    }
}, {
    animationEnabled: true
});
