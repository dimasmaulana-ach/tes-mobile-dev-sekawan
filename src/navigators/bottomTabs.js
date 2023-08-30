import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import {FeatureList, Profile, Settings} from '~screens';

const Tab = createBottomTabNavigator();

const TabNavigators = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBars {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Features" component={FeatureList} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const BottomTabBars = ({navigation, state}) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={Cursor} />
      <BottomNavigationTab icon={PersonIcon} />
      <BottomNavigationTab icon={SettingsIcons} />
    </BottomNavigation>
  );
};

const PersonIcon = props => <Icon {...props} name="person" />;

const Cursor = props => <Icon {...props} name="navigation-2" />;

const SettingsIcons = props => <Icon {...props} name="settings" />;

export default TabNavigators;
