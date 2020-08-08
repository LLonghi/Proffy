import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from './StudyTabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <SafeAreaProvider>
            <NavigationContainer >
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="Landing" component={Landing} />
                    <Screen name="GiveClasses" component={GiveClasses} />
                    <Screen name="Study" component={StudyTabs} />
                </Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default AppStack;