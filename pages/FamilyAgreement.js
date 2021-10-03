import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CustomButton from '../components/CustomButton.js';
import { CustomText } from '../components/CustomText.js';
import GeometryBackground from '../components/GeometryBackground';
import {
    StyledView,
    ScrollStyledView,
    HowToPlayContainer,
    CategoryHeader
} from '../components/StyledView';
import { BIG_MIN_HEIGHT_BUTTON } from '../components/Constants.js';

export const FamilyAgreement = ({ navigation }) => {
    return (
        <StyledView>
            <GeometryBackground />
            <ScrollStyledView>
                <HowToPlayContainer>
                    <CustomText
                        text='Meet on a human level'
                        color="CMDGreen"
                        count="1"
                    />
                    <CustomText
                        text="Respect each other's individuality"
                        color="CMDPink"
                        count="2"
                    />
                    <CustomText
                        text="Don't take anything personal"
                        color="CMDTurquoise"
                        count="3"
                    />
                    <CustomText
                        text="Learn about your friends and family"
                        color="CMDOrange"
                        count="4"
                    />
                    <CustomText
                        text="Have FUN!!"
                        color="CMDPurple"
                        count="5"
                    />
                    <CustomButton
                        text="Go Back"
                        color="CMDGreen"
                        onPress={() => navigation.navigate('How To Play')}
                        minHeight={BIG_MIN_HEIGHT_BUTTON}
                    />
                    <StatusBar style="auto" />
                </HowToPlayContainer>
            </ScrollStyledView>
        </StyledView>
    );
};
