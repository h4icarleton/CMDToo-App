import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeButton from './components/HomeButton.js';
import { ThemeProvider } from 'styled-components';
import COLORS from './components/GlobalStyles.js';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import {
    ParentGuide,
    ParentGuideByCategory,
    ParentGuideInformation
} from './pages/ParentGuide';
import { ParentTips, ScenerioTips } from './pages/ParentTips.js';
import {
    StyledView,
    StyledHomeButtonView,
    StyledHomeText
} from './components/StyledView';
import { Play } from './pages/Play.js';
import { HowToPlay } from './pages/HowToPlay.js';

function HomeScreen({ navigation }) {
    return (
        <StyledView>
            <Image
                source={require('./assets/genconnect_logo-black.png')}
                style={{
                    width: 303,
                    height: 100,
                    marginTop: 170
                }}
            />
            <StyledHomeButtonView>
                <StyledHomeText
                    style={{ zIndex: 1, left: 10, top: 45 }}
                    onPress={() => navigation.navigate('Play')}
                >
                    {' '}
                    PLAY{' '}
                </StyledHomeText>

                <StyledHomeText
                    style={{ zIndex: 1, right: 18, top: 35, color: '#EE3282' }}
                    onPress={() => navigation.navigate('How To Play')}
                >
                    {' '}
                    HOW TO PLAY{' '}
                </StyledHomeText>

                <StyledHomeText
                    style={{ zIndex: 1, left: 13, top: 250 }}
                    onPress={() => navigation.navigate('Parent Guide')}
                >
                    {' '}
                    PARENT GUIDE{' '}
                </StyledHomeText>

                <StyledHomeText
                    style={{ zIndex: 1, right: 18, top: 250 }}
                    onPress={() => navigation.navigate('Parent Tips')}
                >
                    {' '}
                    PARENT TIPS{' '}
                </StyledHomeText>
                <HomeButton
                    text="play"
                    onPress={() => navigation.navigate('Play')}
                />
                <HomeButton
                    text="how to play"
                    onPress={() => navigation.navigate('How To Play')}
                />
                <HomeButton
                    text="parent guide"
                    onPress={() => navigation.navigate('Parent Guide')}
                />
                <HomeButton
                    text="parent tips"
                    onPress={() => navigation.navigate('Parent Tips')}
                />
            </StyledHomeButtonView>
            <StatusBar style="auto" />
        </StyledView>
    );
}

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <ThemeProvider theme={{ colors: COLORS }}>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen
                        name="Parent Guide"
                        component={ParentGuide}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen name="Play" component={Play} />
                    <Stack.Screen
                        name="How To Play"
                        component={HowToPlay}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen
                        name="Parent Guide by Category"
                        component={ParentGuideByCategory}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen
                        name="Parent Guide Information"
                        component={ParentGuideInformation}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen
                        name="Parent Tips"
                        component={ParentTips}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen
                        name="Parent Tips Information"
                        component={ScenerioTips}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                </Stack.Navigator>
            </ThemeProvider>
        </NavigationContainer>
    );
}
