import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CustomButton from '../components/CustomButton.js';
import { CustomText } from '../components/CustomText.js';
import { BIG_MIN_HEIGHT_BUTTON } from '../components/Constants.js';
import {
    StyledView,
    ScrollStyledView,
    HowToPlayContainer
} from '../components/StyledView';

export const HowToPlay = ({ navigation }) => {
    return (
        <StyledView>
            <ScrollStyledView>
                <HowToPlayContainer>
                    <CustomText
                        text='press "play"'
                        color="CMDGreen"
                        count="1"
                    />
                    <CustomText
                        text="pick an order of players"
                        color="CMDPink"
                        count="2"
                    />
                    <CustomText
                        text="pick a category"
                        color="CMDPurple"
                        count="3"
                    />
                    <CustomText
                        text="answer the question"
                        color="CMDTurquoise"
                        count="4"
                    />
                    <CustomText
                        text="pass the phone to the next person"
                        color="CMDOrange"
                        count="5"
                    />
                    <CustomButton
                        text="play"
                        color="CMDGreen"
                        onPress={() => navigation.navigate('play')}
                        minHeight={BIG_MIN_HEIGHT_BUTTON}
                    />
                    <StatusBar style="auto" />
                </HowToPlayContainer>
            </ScrollStyledView>
        </StyledView>
    );
};
