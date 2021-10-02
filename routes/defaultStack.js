import { createStackNavigator } from '@react-navigation/native-stack'
import { createAppContainer } from '@react-navigation/native'
import Home from '../screens/home'
import listDetail from '../screens/listDetail' 

const screens = {
    Home: {
        screen: Home
    },
    listDetail: {
        screen: listDetail
    }
}

const defaultStack = createStackNavigator(screens);

export default createAppContainer(defaultStack);