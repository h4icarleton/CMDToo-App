import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { CATEGORY } from './Constants.js';

const TextboxContainer = styled.View`
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    margin-horizontal: 20px;
    justify-content: center;
    padding: 20px 50px;
    min-width: 90%;
`;

const SmallerTextboxContainer = styled.View`
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    margin-horizontal: 20px;
    justify-content: center;
    padding: 20px 40px;
    min-width: 90%;
`;

export const StandardText = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 41px;
    text-align: center;
    font-weight: 900;
    color: ${props =>
        props.color === 'my bright future'
            ? props.theme.colors['CMDPink']
            : 'white'};
`;

export const CategoryText = styled(StandardText)`
    font-size: 23px;
    line-height: 32px;
    font-weight: 900;
    width: 191px;
    flex-shrink: 1;
`;

export const GroupText = styled(StandardText)`
    font-size: 20px;
    line-height: 27.32px;
    font-weight: 800;
    width: 290px;
    flex-shrink: 1;
`;

export const CategoryQuestionText = styled(StandardText)`
    font-size: 23px;
    line-height: 31.42px;
    font-weight: 800;
    flex-shrink: 1;
`;

export const SmallerStandardText = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 41px;
    text-align: center;

    color: #ffffff;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const BoldText = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 41px;
    text-align: center;

    color: #ffffff;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const SmallerBoldText = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 41px;
    text-align: center;

    color: #ffffff;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

const CardContainer = styled.View`
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    margin-horizontal: 20px;
    justify-content: ${props => (props.length > 1 ? 'space-around' : 'center')};
    padding: 0 30px;
    height: 100%;
`; // margin-bottom is added by ButtonContainer

const ParentTipContainer = styled.View`
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    margin-top: 10px;
    margin-horizontal: 20px;
    justify-content: ${props => (props.length > 1 ? 'space-around' : 'center')};
    padding: 40px 50px;
    min-height: ${props => (props.isScroll ? '500px' : '90%')};
`;

const ParentTipText = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ParentGuideContainer = styled.View`
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    margin-top: 10px;
    margin-horizontal: 20px;
    justify-content: ${props =>
        props.length > 1
            ? props.length == 2
                ? 'space-around'
                : 'space-between'
            : 'center'};
    padding: ${props =>
        props.length > 1 ? '50px 40px 50px 40px' : '40px 40px'};
    min-height: ${props => (props.isScroll ? '500px' : '70%')};
`;

export const StandardTextbox = ({ text, color }) => (
    <TextboxContainer color={color}>
        <StandardText color={color}>{text}</StandardText>
    </TextboxContainer>
);

export const SmallerStandardTextbox = ({ text, color }) => (
    <SmallerTextboxContainer color={color}>
        <SmallerStandardText>{text}</SmallerStandardText>
    </SmallerTextboxContainer>
);

const Icon = styled.Image`
    width: 130px;
    height: 130px;
    align-self: center;
`;

const pickIconToDisplay = (categoryName) => {
    switch (categoryName) {
        case CATEGORY.FAVORITES:
            return (
                <Icon
                    source={require('../assets/genconnect_icon-favorites_filled.png')}
                />
            );

        case CATEGORY.DANCECHALLENGE:
            return (
                <Icon
                    source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                />
            );

        case CATEGORY.ALLABOUTME:
            return (
                <Icon
                    source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                />
            );

        case CATEGORY.INNERME:
            return (
                <Icon
                    source={require('../assets/genconnect_icon-innerme_filled.png')}
                />
            );

        case CATEGORY.WHATWOULDYOURDO:
            return (
                <Icon
                    source={require('../assets/genconnect_icon-whatwouldyoudo_filled.png')}
                />
            );

        case CATEGORY.BRIGHTFUTURE:
            return (
                <Icon
                    source={require('../assets/genconnect_icon-brightfuture_pink_outline.png')}
                />
            );

        default:
            return <Icon
                source={require('../assets/genconnect_icon-brightfuture_pink_outline.png')}
            />;
    }
};

export const CardTextbox = ({ textList, color }) => {
    const displayText = textList.map((text, index) => (
        <StandardText color={color} key={index} style={{ fontWeight: "900", fontSize: 30, lineHeight: 49.18 }}>
            {text.toString().toUpperCase()}
        </StandardText>
    ));

    return (
        <CardContainer length={textList.length} color={color} isScroll={true} >
            {pickIconToDisplay(color)}
            {displayText}
        </CardContainer>
    );
};

export const ParentTipsTextbox = ({ textList, color }) => {
    const displayText = textList.map((text, index) => (
        <ParentTipText key={index}>
            <SmallerStandardText>{text}</SmallerStandardText>
        </ParentTipText>
    ));

    return (
        <ParentTipContainer
            length={textList.length}
            color={color}
            isScroll={true}
        >
            {displayText}
        </ParentTipContainer>
    );
};

const TextBoarder = styled.View`
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const InterpretationTextBox = ({
    groupText,
    interpretationText,
    color,
    isScroll = true
}) => {
    let displayText = [];
    let index = 0;
    displayText.push(
        <TextBoarder key={index++}>
            <SmallerBoldText>{'INTERPRETATIONS'}</SmallerBoldText>
        </TextBoarder>
    );

    const splitInterpretationText = interpretationText.split('|');
    const splitGroupText = groupText.split('|');

    if (groupText == '' && interpretationText == '') {
        splitInterpretationText.push('no interpretation');
    }

    splitGroupText.forEach(text => {
        if (text != '') {
            displayText.push(
                <TextBoarder key={index++}>
                    <SmallerStandardText>{text}</SmallerStandardText>
                </TextBoarder>
            );
        }
    });
    splitInterpretationText.forEach(text => {
        if (text != '') {
            displayText.push(
                <TextBoarder key={index++}>
                    <SmallerStandardText>{text}</SmallerStandardText>
                </TextBoarder>
            );
        }
    });
    return (
        <ParentGuideContainer
            length={displayText.length}
            color={color}
            isScroll={isScroll}
        >
            {displayText}
        </ParentGuideContainer>
    );
};
