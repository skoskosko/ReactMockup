/**
 * @flow
 */

import type {
  NavigationScreenProp,
  NavigationEventSubscription,
} from 'react-navigation';

import React from 'react';
import { Platform, ScrollView, StatusBar, View, Text } from 'react-native';
import { SafeAreaView, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';
import PeopleList from './views/PeopleList';
import ListingList from './views/ListingList';
import MatchesList from './views/MatchesList';
import { Button } from '../commonComponents/ButtonWithMargin';



const JobListingsScreen = ({ navigation, banner }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <SampleText>{banner}</SampleText>
    <ScrollView>
   <ListingList></ListingList>
  </ScrollView>
    <StatusBar barStyle="default" />
  </SafeAreaView>
);

const MatchScreen = ({ navigation, banner }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <SampleText>{banner}</SampleText>

      <ScrollView>
      <MatchesList/>
      </ScrollView>

    <StatusBar barStyle="default" />
  </SafeAreaView>
);

const UserHistoryScreen = ({ navigation, banner }) => (

  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <SampleText>{banner}</SampleText>

  <SampleText>Job Suggestions and notifications come here</SampleText>

    <StatusBar barStyle="default" />

  </SafeAreaView>
);

const PeopleScreen = ({ navigation }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <Text>

    </Text>
    <Text>
      Candidates for your listings
    </Text>
    <ScrollView>
    <PeopleList/>
    </ScrollView>
    <StatusBar barStyle="default" />
  </SafeAreaView>






);

PeopleScreen.navigationOptions = {
  tabBarTestIDProps: {
    testID: 'TEST_ID_HOME',
    accessibilityLabel: 'TEST_ID_HOME_ACLBL',
  },
  tabBarLabel: 'People',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

type ListingScreenProps = {
  navigation: NavigationScreenProp<*>,
};


class ListingScreen extends React.Component<ListingScreenProps> {
  _s0: NavigationEventSubscription;
  _s1: NavigationEventSubscription;
  _s2: NavigationEventSubscription;
  _s3: NavigationEventSubscription;

  static navigationOptions = {
    tabBarLabel: 'Listings',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-search' : 'ios-search-outline'}
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
    return <JobListingsScreen banner="Your Listings" navigation={navigation} />;
  }
}

type MatchesScreenProps = {
  navigation: NavigationScreenProp<*>,
};
class MatchesScreen extends React.Component<MatchesScreenProps> {
  _s0: NavigationEventSubscription;
  _s1: NavigationEventSubscription;
  _s2: NavigationEventSubscription;
  _s3: NavigationEventSubscription;

  static navigationOptions = {
    tabBarLabel: 'Matches',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-star' : 'ios-star-outline'}
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
    return <MatchScreen banner="Matches for your listings" navigation={navigation} />;
  }
}



const SimpleTabs = createBottomTabNavigator(
  {
    People: {
      screen: PeopleScreen,
      path: 'People',
    },
    Listing: {
      screen: ListingScreen,
      path: 'Listing',
    },
    Matches: {
      screen: MatchesScreen,
      path: 'Matches',
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
