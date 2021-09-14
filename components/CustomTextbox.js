import React from 'react';
import styled from 'styled-components/native';
import { pickIconToDisplay } from './Icon';
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
    font-size: 23px;
    line-height: 41px;
    text-align: center;
    font-weight: 900;
    color: ${props =>
        props.color === 'my bright future'
            ? props.theme.colors['CMDPink']
            : 'white'};
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
    padding: 28px
    min-height: ${props => (props.isScroll ? '500px' : '70%')};
`;

const QuestionText = styled(StandardText)`
    font-size: 25px;
`;

const HeadingText = styled(StandardText)`
    font-size: 20px;
    font-weight: 800;
    line-height: 25px;
`;

const SubHeadingText = styled(StandardText)`
    font-size: 20px;
    font-weight: 800;
    line-height: 25px;
`;

const ContentText = styled(StandardText)`
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
`;

export const StandardTextbox = ({ text, color }) => (
    <TextboxContainer color={color}>
        <StandardText color={color}>{text}</StandardText>
    </TextboxContainer>
);

export const QuestionTextbox = ({ text, color }) => (
    <TextboxContainer color={color}>
        <QuestionText color={color}>{text}</QuestionText>
    </TextboxContainer>
);

const Icon = styled.Image`
    width: 130px;
    height: 130px;
    align-self: center;
`;

const pickIconToDisplay = categoryName => {
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
            return (
                <Icon
                    source={require('../assets/genconnect_icon-brightfuture_pink_outline.png')}
                />
            );
    }
};

export const CardTextbox = ({ textList, color }) => {
    const displayText = textList.map((text, index) => (
        <StandardText
            color={color}
            key={index}
            style={{ fontWeight: '900', fontSize: 30, lineHeight: 49.18 }}
        >
            {text.toString().toUpperCase()}
        </StandardText>
    ));

    return (
        <CardContainer length={textList.length} color={color} isScroll={true}>
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

export const InterpretationTextbox = ({
    groupText,
    interpretationText,
    color,
    isScroll = true
}) => {
    let displayText = [];
    let index = 0;
    displayText.push(
        <TextBoarder key={index++}>
            <HeadingText color={color}>{'INTERPRETATIONS'}</HeadingText>
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
                    <SubHeadingText color={color}>{text}</SubHeadingText>
                </TextBoarder>
            );
        }
    });
    splitInterpretationText.forEach(text => {
        if (text != '') {
            displayText.push(
                <TextBoarder key={index++}>
                    <ContentText color={color}>{text}</ContentText>
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
            {pickIconToDisplay(color, false, false)}
        </ParentGuideContainer>
    );
};
