import React from 'react';
import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  Icon,
  TextInput,
  InteractionManager,
  View,
} from 'react-native';
import { SafeAreaView, createStackNavigator, withNavigationFocus } from 'react-navigation';
import { Button } from '../commonComponents/ButtonWithMargin';
import SimpleTabs from '../employee/SimpleTabs';
import EmployerScreen from '../employer/EmployerScreen';
import { Asset, Constants, ScreenOrientation } from 'expo';

ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);


import Home from '../Home';

const ExampleInfo = {
  SimpleTabs: {
    name: 'Employee',
    description: 'View Emploiyees get after login',
  },
  EmployerScreen: {
    name: 'Employer',
    description: 'Employer view can be seen here whhen it is though out',
  },
  Home: {
    name: 'Home',
    description: 'Demo of all different views ant tabthings i can do with these packages',
  },
};

const ExampleRoutes = {
  SimpleTabs: SimpleTabs,
  EmployerScreen: EmployerScreen,
  Home: Home
};


class Login extends React.Component {
  // static navigationOptions = {
  //   title: 'Home',
  // };


  // <TextInput
  //   ref={c => (this._textInput = c)}
  //   style={{
  //     backgroundColor: 'white',
  //     height: 24,
  //     width: 150,
  //     borderColor: '#555',
  //     borderWidth: 1,
  //   }}
  // />
  // <TextInput
  //   ref={c => (this._textInput = c)}
  //   style={{
  //     backgroundColor: 'white',
  //     height: 24,
  //     width: 150,
  //     borderColor: '#555',
  //     borderWidth: 1,
  //   }}
  // />
  // onPress={() => navigation.goBack(null)}

// #1d3bc6b blue
// #27b2c6 blueish
// #b7e0e0 whiteish
// #35bc09 green
// #47645f graygreenish

   // <Icon name={"chevron-right"}  size={30} color="#01a699" />
  render() {
    const { navigation } = this.props;
    return (





      <View style={{ flex: 1 }}>
        <Image
        resizeMode={'cover'}
        style={{top:'5%', width: '100%', height: 200 }}
          source={require('../assets/logo.png')}
        />

        <View style={styles.center}>


          <TouchableOpacity
            onPress={() => {
              let routeName = 'SimpleTabs';
              let route = ExampleRoutes[routeName];
              if (route.screen || route.path || route.params) {
                const { path, params, screen } = route;
                const { router } = screen;
                const action =
                  path && router.getActionForPathAndParams(path, params);
                navigation.navigate(routeName, {}, action);
              } else {
                navigation.navigate(routeName);
              }
            }}
            style={{
              borderWidth:1,
              borderColor:'rgba(0,0,0,0.2)',
              alignItems:'center',
              justifyContent:'center',
              width:100,
              height:100,
              backgroundColor:'#fff',
              borderRadius:100,
            }}>
              <Text>Employee</Text>

        </TouchableOpacity>

          <Text>

          </Text>


        <TouchableOpacity
          onPress={() => {
            let routeName = 'EmployerScreen';
            let route = ExampleRoutes[routeName];
            if (route.screen || route.path || route.params) {
              const { path, params, screen } = route;
              const { router } = screen;
              const action =
                path && router.getActionForPathAndParams(path, params);
              navigation.navigate(routeName, {}, action);
            } else {
              navigation.navigate(routeName);
            }
          }}
          style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:100,
            height:100,
            backgroundColor:'#fff',
            borderRadius:100,
          }}>
            <Text>Employer</Text>

      </TouchableOpacity>


      </View>


          <StatusBar barStyle="default" />
      </View>

    );
  }
}

const AppNavigator = createStackNavigator(
  {
    ...ExampleRoutes,
    Index: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);



export default AppNavigator;

const styles = StyleSheet.create({
  center: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  statusBarUnderlay: {
    backgroundColor: '#673ab7',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Constants.statusBarHeight,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
  backgroundUnderlay: {
    backgroundColor: '#673ab7',
    position: 'absolute',
    top: -100,
    height: 300,
    left: 0,
    right: 0,
  },
  bannerContainer: {
    // backgroundColor: '#673ab7',
    alignItems: 'center',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  bannerImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: '#fff',
    margin: 8,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    marginVertical: 8,
    marginRight: 5,
  },
});
