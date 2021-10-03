import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeButton from './components/HomeButton.js';
import { ThemeProvider } from 'styled-components';
import COLORS from './components/GlobalStyles.js';
import { Image, TouchableOpacity, View, Text, ScrollView, StyleSheet } from 'react-native';
import {
    ParentGuide,
    ParentGuideByCategory,
    ParentGuideInformation
} from './pages/ParentGuide';
import { ParentTips, ScenerioTips } from './pages/ParentTips.js';
import {
    StyledView,
    StyledHomeButtonView,
    StyledLogo,
    CustomButton
} from './components/StyledView';
import { Play } from './pages/Play.js';
import { HowToPlay } from './pages/HowToPlay.js';
import { FamilyAgreement } from './pages/FamilyAgreement.js';
import GeometryBackground from './components/GeometryBackground.js';
import { Text as SvgText, TextPath, Svg, Path }
    from 'react-native-svg';
import { BIG_MIN_HEIGHT_BUTTON } from './components/Constants.js';




const HomeScreen = ({ navigation }) => {
    return (
        <StyledView>
            <GeometryBackground />
            <ScrollView>

                <StyledLogo>
                    <Image
                        source={require('./assets/genconnect_logo-black.png')}
                        style={{
                            width: 350,
                            height: 130,
                            marginLeft: 10,
                            marginRight: 10
                        }}
                    />
                </StyledLogo>
                <Svg height="200px" width="100%">
                    <Path
                        d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145"
                        id='curve'
                    />
                    <SvgText fill="#EE3282"
                        stroke="none"
                        fontSize="20"
                        fontWeight="900"
                        fontFamily="Avenir"
                        x="35"
                    >
                        <TextPath href="#curve">
                            THE GAME THAT GETS FAMILIES TALKING!
                            </TextPath>
                    </SvgText>
                </Svg>

                <StyledHomeButtonView>
                    <HomeButton
                        text="PLAY GAME"
                        onPress={() => navigation.navigate('Play')}
                        source={require('./assets/genconnect_ombre_allaboutme.png')}
                    />
                    <HomeButton
                        text="HOW TO PLAY"
                        onPress={() => navigation.navigate('How To Play')}
                        source={require('./assets/genconnect_ombre_brightfuture.png')}
                    />
                    <HomeButton
                        text="PARENT GUIDE"
                        onPress={() => navigation.navigate('Parent Guide')}
                        source={require('./assets/genconnect_ombre_whatwouldyoudo.png')}
                    />
                    <HomeButton
                        text="PARENT TIPS"
                        onPress={() => navigation.navigate('Parent Tips')}
                        source={require('./assets/genconnect_ombre_dancechallenge.png')}
                    />
                </StyledHomeButtonView>
                <StatusBar style="auto" />
            </ScrollView>
        </StyledView >
    );
};

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <ThemeProvider theme={{ colors: COLORS }}>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false,
                        cardStyle: { backgroundColor: '#fff' }
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen
                        name="Parent Guide"
                        component={ParentGuide}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'rgba(70, 193, 193, 0.6)'
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
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen
                        name="Play"
                        component={Play}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'rgba(70, 193, 193, 0.6)'
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
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        })} />
                    <Stack.Screen
                        name="How To Play"
                        component={HowToPlay}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'rgba(70, 193, 193, 0.6)'
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
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen
                        name="Family Agreement"
                        component={FamilyAgreement}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'rgba(70, 193, 193, 0.6)'
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
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
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
                                backgroundColor: 'rgba(70, 193, 193, 0.6)'
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
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
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
                                backgroundColor: 'rgba(70, 193, 193, 0.6)'
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
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
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
                                backgroundColor: 'rgba(70, 193, 193, 0.6)'
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
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
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
                                backgroundColor: 'rgba(70, 193, 193, 0.6)'
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
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
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
