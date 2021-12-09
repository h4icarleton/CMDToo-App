import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import HomeButton from './components/HomeButton.js';
import { ThemeProvider } from 'styled-components';
import COLORS from './components/GlobalStyles.js';
import {
    TouchableOpacity,
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native';
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
    StyledTagline
} from './components/StyledView';
import { Play } from './pages/Play.js';
import { HowToPlay } from './pages/HowToPlay.js';
import { FamilyAgreement } from './pages/FamilyAgreement.js';
import GeometryBackground from './components/GeometryBackground.js';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { Footer as Information } from './pages/Footer.js';
import { About } from './pages/About.js';
import * as SplashScreen from 'expo-splash-screen';

async function _cacheResourcesAsync() {
    const images = [
        require('./assets/genconnect_logo-black.png'),
        require('./assets/genconnect_ombre_allaboutme.png'),
        require('./assets/genconnect_ombre_brightfuture.png'),
        require('./assets/genconnect_ombre_whatwouldyoudo.png'),
        require('./assets/genconnect_ombre_dancechallenge.png')
    ];

    const cacheImages = images.map(image => {
        return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
}

const HomeScreen = ({ navigation }) => {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        SplashScreen.preventAutoHideAsync();
        return (
            <AppLoading
                startAsync={_cacheResourcesAsync}
                onFinish={() => setIsReady({ isReady: true })}
                onError={console.warn}
            />
        );
    } else {
        return (
            <StyledView>
                <GeometryBackground />
                <StyledLogo style={{ marginTop: '0%' }}>
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
                <StyledTagline>The game that gets families talking!</StyledTagline>

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
                <TouchableOpacity
                    onPress={() => navigation.navigate('Information')}
                    style={{
                        position: 'absolute',
                        right: 20,
                        top: 40,
                    }} >
                    <Image
                        source={require('./assets/footer_info.png')}
                        style={{
                            width: 50,
                            height: 50
                        }}
                    />
                </TouchableOpacity>
            </StyledView>
        );
    }
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
                        })}
                    />
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
                        name="Information"
                        component={Information}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'white',
                            },
                            headerTintColor: '#46C1C1',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                color: '#46C1C1'
                            },
                            cardStyle: {
                                backgroundColor: '#46C1C1'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon-inverted.png')}
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
                        name="About"
                        component={About}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'white',
                            },
                            headerTintColor: '#46C1C1',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                color: '#46C1C1'
                            },
                            cardStyle: {
                                backgroundColor: '#46C1C1'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon-inverted.png')}
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
