import React, { useState } from 'react';
import { CardTextbox } from './CustomTextbox.js';
import CustomButton from './CustomButton.js';
import {
    SMALL_HORIZONTAL_MARGIN_BUTTON,
    DONE_HORIZONTAL_MARGIN_BUTTON
} from './Constants.js';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Roboto } from '@expo-google-fonts/inter';

const CardTitleTextboxContainer = styled.View`
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    margin-horizontal: 20px;
    justify-content: center;
    min-width: 90%;
    height: 100%;
`;

const CardTitleText = styled.Text`
    font-style: normal;
    font-family: Avenir;
    font-weight: 700;
    font-size: 30px;
    line-height: 35.16px;
    text-align: center;
    color: ${props =>
        props.color === 'my bright future'
            ? props.theme.colors['CMDPink']
            : 'white'};
`;

const CardTitle = ({ text, color }) => (
    <CardTitleTextboxContainer color={color}>
        <CardTitleText color={color} style={{ fontFamily: Roboto }}>
            {text}
        </CardTitleText>
    </CardTitleTextboxContainer>
);

const CardView = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    margin-top: 7%;
    min-width: 95%;
    background-color: #FFF;
`;

const TwoButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-horizontal: 15px;
`;

const Card = ({
    category,
    question,
    color,
    hasFollowUp,
    setModalVisible,
    setOptions
}) => {
    const textList = [question.Question || question];
    const [followUp] = useState(
        <Card
            category={category}
            question={
                question['Follow Up']
                    ? question['Follow Up'].split('|')
                    : question['Follow Up']
            }
            color={color}
            hasFollowUp={false}
            setModalVisible={setModalVisible}
            setOptions={setOptions}
        ></Card>
    );
    return (
        <CardView>
            <View style={{ height: '100%' }}>
                <View style={{ height: '9%', justifyContent: 'stretch' }}>
                    <CardTitle text={category.toUpperCase()} color={color} />
                </View>
                <View style={{ height: '1.5%' }}></View>
                <View style={{ height: '77.5%' }}>
                    <CardTextbox textList={textList} color={color} />
                </View>
                <View style={{ height: '1.5%' }}></View>
                <View style={{ height: '9%' }}>
                    {hasFollowUp ? (
                        <TwoButtonContainer>
                            <CustomButton
                                text="DONE"
                                color={color}
                                onPress={() => setModalVisible(false)}
                                horizontalMargin={
                                    SMALL_HORIZONTAL_MARGIN_BUTTON
                                }
                                height="100%"
                                marginVertical="0"
                                fontWeight="500"
                                fontSize={28}
                            ></CustomButton>
                            <CustomButton
                                text="FOLLOW UP"
                                color={color}
                                onPress={() => setOptions(followUp)}
                                horizontalMargin={
                                    SMALL_HORIZONTAL_MARGIN_BUTTON
                                }
                                height="100%"
                                marginVertical="0"
                                fontWeight="500"
                                fontSize={28}
                            ></CustomButton>
                        </TwoButtonContainer>
                    ) : (
                            <CustomButton
                                text="DONE"
                                color={color}
                                onPress={() => setModalVisible(false)}
                                horizontalMargin={DONE_HORIZONTAL_MARGIN_BUTTON}
                                fontWeight="500"
                                fontSize={28}
                                lineHeight={38.25}
                                height="100%"
                                marginVertical="0"
                            ></CustomButton>
                        )}
                </View>
                <View style={{ height: '1.5%' }}></View>
            </View>
        </CardView>
    );
};

export default Card;
