import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Linking, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { CustomText } from '../components/CustomText.js';
import GeometryBackground from '../components/GeometryBackground';
import {
    StyledView,
    ScrollStyledView,
    HowToPlayContainer
} from '../components/StyledView';
import { BIG_MIN_HEIGHT_BUTTON } from '../components/Constants.js';
import FooterButton from '../components/FooterButton.js';
import { AboutTextboxContainer, AboutTextTitle, AboutText, AboutTextList } from '../components/CustomTextbox.js';
import Unorderedlist from 'react-native-unordered-list';

export const About = ({ navigation }) => {
    return (

        <ScrollView>
            <AboutTextboxContainer>
                <AboutTextTitle>THE GAME</AboutTextTitle>
                <AboutText>
                    GenConnect Game “The game that gets families talking” is a family card game created to add the spark in communication and family engagement. With six categories of questions and challenges ranging from ‘what would you do’ ‘Favorites’ ‘my bright future’ and ‘dance challenge’ families meet on a human level opening up lines of communication and building community as individuals. </AboutText>
            </AboutTextboxContainer>
            <AboutTextboxContainer>
                <AboutTextTitle>THE PURPOSE</AboutTextTitle>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x2765}>
                    <Text>
                        <AboutTextList>
                            Make conversations fun and engaging between the generations
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x2765}>
                    <Text>
                        <AboutTextList>
                            Get to know each other better
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x2765}>
                    <Text>
                        <AboutTextList>
                            Share stories that build friendships
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x2765}>
                    <Text>
                        <AboutTextList>
                            Make gatherings more interesting
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x2765}>
                    <Text>
                        <AboutTextList>
                            Building the skills necessary to better understand ourselves
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x2765}>
                    <Text>
                        <AboutTextList>
                            A larger vocabulary with which to communicate our emotions and needs
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x2765}>
                    <Text>
                        <AboutTextList>
                            How to empathize with the perspectives of others
                        </AboutTextList>
                    </Text>
                </Unorderedlist>

            </AboutTextboxContainer>
            <AboutTextboxContainer>
                <AboutTextTitle>THE PARENT GUIDE</AboutTextTitle>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x273F}>
                    <Text>
                        <AboutTextList>
                            How to respond without reacting
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x273F}>
                    <Text>
                        <AboutTextList>
                            Do’s and don’ts during conversation
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x273F}>
                    <Text>
                        <AboutTextList>
                            Active Listening
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x273F}>
                    <Text>
                        <AboutTextList>
                            Dealing with triggers
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x273F}>
                    <Text>
                        <AboutTextList>
                            Take answers and cultivate conversations, passion, skills and activity ideas
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x273F}>
                    <Text>
                        <AboutTextList>
                            Support for mental health
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x273F}>
                    <Text>
                        <AboutTextList>
                            Red Flags
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x273F}>
                    <Text>
                        <AboutTextList>
                            Cultivating Creativity
                        </AboutTextList>
                    </Text>
                </Unorderedlist>
                <Unorderedlist color='#46C1C1' bulletUnicode={0x273F}>
                    <Text>
                        <AboutTextList>
                            Tours of passion careers at local schools, colleges and programs
                        </AboutTextList>
                    </Text>
                </Unorderedlist>

            </AboutTextboxContainer>
            <AboutTextboxContainer>
                <AboutText style={{ 'fontWeight': '800' }}>Created and Designed by Cool Moms Dance Too! </AboutText>
                <AboutText style={{ 'fontWeight': '800' }}>Developed with ♥ by Hack4Impact Carleton</AboutText>
            </AboutTextboxContainer>

        </ScrollView>
    )

};





