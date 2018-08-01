/**
 * @flow
 */

import type {
  NavigationScreenProp,
  NavigationEventSubscription,
} from 'react-navigation';
import { MapView } from 'expo';
import React from 'react';
import { Platform, ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';
import JobList from './views/JobList';
import MatchList from './views/MatchList';

import { Button } from '../commonComponents/ButtonWithMargin';

const ExampleJobs = [
  {
    name: 'Employee',
    description: 'View Emploiyees get after login',
  },
  {
    name: 'Employer',
    description: 'Employer view can be seen here whhen it is though out',
  },
  {
    name: 'App',
    description: 'Demo of all different views ant tabthings i can do with these packages',
  },
];

const MyNavScreen = ({ navigation, banner }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Go to home tab"
    />
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
    <StatusBar barStyle="default" />
  </SafeAreaView>
);

const JobMatchScreen = ({ navigation, banner }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <ScrollView>
    <MatchList/>
    </ScrollView>
    <StatusBar barStyle="default" />
  </SafeAreaView>
);
  // </SafeAreaView>


    // <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
const MapScreen = ({ navigation, banner }) => (


      <MapView
         style={{ flex: 1 }}
         initialRegion={{
           latitude: 38.701148,
           longitude: -9.420363,
           latitudeDelta: 0.02022,
           longitudeDelta: 0.00921,
         }}>

         <MapView.Marker
           key={1}
           coordinate={{latitude: 38.701148, longitude: -9.420363}}
           title={"Some Title"}
           description={"Hello world"}
           image={require('../assets/Marker1.png')}
         />
         <MapView.Marker
           key={2}
           coordinate={{latitude: 38.698048, longitude: -9.430363}}
           title={"Some Title"}
           description={"Hello world"}
           image={require('../assets/Marker2.png')}
         />
         <MapView.Marker
           key={3}
           coordinate={{latitude: 38.705148, longitude: -9.420363}}
           title={"Some Title"}
           description={"Hello world"}
           image={require('../assets/Marker3.png')}
         />
         <MapView.Marker
           key={4}
           coordinate={{latitude: 38.703148, longitude: -9.420363}}
           title={"Some Title"}
           description={"Hello world"}
           image={require('../assets/Marker4.png')}
         />
         <MapView.Marker
           key={5}
           coordinate={{latitude: 38.701148, longitude: -9.410363}}
           title={"Some Title"}
           description={"Hello world"}
           image={require('../assets/Marker5.png')}
         />
   </MapView>


);


    // <StatusBar barStyle="default" />
// <SampleText>{banner}</SampleText>
// <SampleText>Job Suggestions and notifications come here</SampleText>

const UserHistoryScreen = ({ navigation, banner }) => (

<SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
  <ScrollView>
  <JobList/>
  </ScrollView>



    <StatusBar barStyle="default" />

  </SafeAreaView>
);

const MyHomeScreen = ({ navigation }) => (
  <UserHistoryScreen banner="Here will be listed lots of the stuff " navigation={navigation} />

);

MyHomeScreen.navigationOptions = {
  tabBarTestIDProps: {
    testID: 'TEST_ID_HOME',
    accessibilityLabel: 'TEST_ID_HOME_ACLBL',
  },
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

type MyPeopleScreenProps = {
  navigation: NavigationScreenProp<*>,
};


class MyPeopleScreen extends React.Component<MyPeopleScreenProps> {
  _s0: NavigationEventSubscription;
  _s1: NavigationEventSubscription;
  _s2: NavigationEventSubscription;
  _s3: NavigationEventSubscription;

  static navigationOptions = {
    tabBarLabel: 'Matches',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-people' : 'ios-people-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };
  componentDidMount() {
    this._s0 = this.props.navigation.addListener('willFocus', this._onEvent);
    this._s1 = this.props.navigation.addListener('didFocus', this._onEvent);
    this._s2 = this.props.navigation.addListener('willBlur', this._onEvent);
    this._s3 = this.props.navigation.addListener('didBlur', this._onEvent);
  }
  componentWillUnmount() {
    this._s0.remove();
    this._s1.remove();
    this._s2.remove();
    this._s3.remove();
  }
  _onEvent = a => {
    console.log('EVENT ON PEOPLE TAB', a.type, a);
  };
  render() {
    const { navigation } = this.props;
    return <JobMatchScreen banner="List of dem matches and stuff" navigation={navigation} />;
  }
}

type MyMapScreenProps = {
  navigation: NavigationScreenProp<*>,
};
class MyMapScreen extends React.Component<MyMapScreenProps> {
  _s0: NavigationEventSubscription;
  _s1: NavigationEventSubscription;
  _s2: NavigationEventSubscription;
  _s3: NavigationEventSubscription;

  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-map' : 'ios-map-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };
  componentDidMount() {
    this._s0 = this.props.navigation.addListener('willFocus', this._onEvent);
    this._s1 = this.props.navigation.addListener('didFocus', this._onEvent);
    this._s2 = this.props.navigation.addListener('willBlur', this._onEvent);
    this._s3 = this.props.navigation.addListener('didBlur', this._onEvent);
  }
  componentWillUnmount() {
    this._s0.remove();
    this._s1.remove();
    this._s2.remove();
    this._s3.remove();
  }
  _onEvent = a => {
    console.log('EVENT ON CHAT TAB', a.type, a);
  };
  render() {
    const { navigation } = this.props;
    return <MapScreen banner="Jobs Near You" navigation={navigation} />;
  }
}

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Tab You can edit search and sugggestion properties, your profile settings and general app settings here." navigation={navigation} />
);

MySettingsScreen.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const SimpleTabs = createBottomTabNavigator(
  {
    Kartta: {
      screen: MyMapScreen,
      path: 'map',
    },
    Home: {
      screen: MyHomeScreen,
      path: '',
    },
    People: {
      screen: MyPeopleScreen,
      path: 'cart',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

type SimpleTabsContainerProps = {
  navigation: NavigationScreenProp<*>,
};

class SimpleTabsContainer extends React.Component<SimpleTabsContainerProps> {
  static router = SimpleTabs.router;
  _s0: NavigationEventSubscription;
  _s1: NavigationEventSubscription;
  _s2: NavigationEventSubscription;
  _s3: NavigationEventSubscription;

  componentDidMount() {
    this._s0 = this.props.navigation.addListener('willFocus', this._onAction);
    this._s1 = this.props.navigation.addListener('didFocus', this._onAction);
    this._s2 = this.props.navigation.addListener('willBlur', this._onAction);
    this._s3 = this.props.navigation.addListener('didBlur', this._onAction);
  }
  componentWillUnmount() {
    this._s0.remove();
    this._s1.remove();
    this._s2.remove();
    this._s3.remove();
  }
  _onAction = a => {
    console.log('TABS EVENT', a.type, a);
  };
  render() {
    return <SimpleTabs navigation={this.props.navigation} />;
  }
}

export default SimpleTabsContainer;
