import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';

import {
	BookmarksScreen,
	CategoryNewsScreen,
	DetailsScreen,
	DiscoverScreen,
	HomeScreen,
	SearchScreen,
	SettingsScreen
} from '@app/screens';
import { Colors, FontFamily } from '@app/styles';
import { fs } from '@app/utils';

import { HomeScreenMenu, transparentHeaderOptions } from './headerOptions';
import { BottomTabParamList, RootStackParamList, TopTabParamList } from './paramsList';

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const Tab = createMaterialTopTabNavigator<TopTabParamList>();

export const stackNavigation = () => {
	return (
		<Stack.Navigator initialRouteName='Root' screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Root'>{bottomTabs}</Stack.Screen>
			<Stack.Screen
				name='Details'
				component={DetailsScreen}
				options={transparentHeaderOptions}
			/>
			<Stack.Screen name='Search' component={SearchScreen} />
		</Stack.Navigator>
	);
};

export const bottomTabs = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				headerShadowVisible: false,
				headerTitleStyle: {
					fontFamily: FontFamily.MEDIUM,
					fontSize: fs(20)
				},
				tabBarLabelStyle: { fontFamily: FontFamily.MEDIUM, fontSize: fs(14) }
			}}>
			<BottomTab.Screen
				name='Home'
				options={{
					headerRight: HomeScreenMenu,
					headerTitle: 'Daily News',
					tabBarIcon: ({ color, size, focused }) => (
						<Icon
							type='ionicon'
							name={focused ? 'home-sharp' : 'home-outline'}
							size={size}
							color={color}
						/>
					)
				}}>
				{topTabs}
			</BottomTab.Screen>
			<BottomTab.Screen
				name='Discover'
				component={DiscoverScreen}
				options={{
					headerRight: HomeScreenMenu,
					tabBarIcon: ({ color, size, focused }) => (
						<Icon
							type='ionicon'
							name={focused ? 'globe-sharp' : 'globe-outline'}
							size={size}
							color={color}
						/>
					)
				}}
			/>
			<BottomTab.Screen
				name='Bookmarks'
				component={BookmarksScreen}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<Icon
							type='ionicon'
							name={focused ? 'bookmark' : 'bookmark-outline'}
							size={size}
							color={color}
						/>
					)
				}}
			/>
			<BottomTab.Screen
				name='Settings'
				component={SettingsScreen}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<Icon
							type='ionicon'
							name={focused ? 'settings' : 'settings-outline'}
							size={size}
							color={color}
						/>
					)
				}}
			/>
		</BottomTab.Navigator>
	);
};

export const topTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarScrollEnabled: true,
				tabBarLabelStyle: {
					textTransform: 'none',
					fontSize: fs(16),
					fontFamily: FontFamily.MEDIUM
				},
				tabBarItemStyle: { width: 'auto' },
				tabBarIndicatorStyle: { backgroundColor: Colors.cinnabar },
				tabBarStyle: { elevation: 0 },
				lazy: true,
				lazyPreloadDistance: 1
			}}>
			<Tab.Screen name='All' component={HomeScreen} />
			<Tab.Screen
				name='Business'
				children={() => <CategoryNewsScreen category='business' />}
			/>
			<Tab.Screen
				name='Entertainment'
				children={() => <CategoryNewsScreen category='entertainment' />}
			/>
			<Tab.Screen name='General' children={() => <CategoryNewsScreen category='general' />} />
			<Tab.Screen name='Health' children={() => <CategoryNewsScreen category='health' />} />
			<Tab.Screen name='Science' children={() => <CategoryNewsScreen category='science' />} />
			<Tab.Screen name='Sports' children={() => <CategoryNewsScreen category='sports' />} />
			<Tab.Screen
				name='Technology'
				children={() => <CategoryNewsScreen category='technology' />}
			/>
		</Tab.Navigator>
	);
};
