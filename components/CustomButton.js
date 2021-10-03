import React from 'react';
import styled from 'styled-components/native';
import { StandardText, SmallerStandardText } from './CustomTextbox.js';
import { CATEGORY, ICONTYPE } from './Constants.js';
import { pickIconToDisplay } from './Icon.js';

const ButtonContainer = styled.TouchableOpacity`
    align-self: stretch;
    justify-content: center;
    border-radius: 20px;
    ${props =>
        props.marginVertical
            ? `margin-vertical: ${props.marginVertical}};`
            : 'margin-vertical: 10px;'};
    flex-grow: 100;

    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};

    margin-horizontal: ${props =>
        props.horizontalMargin ? `${props.horizontalMargin}` : '25px'};

    ${props =>
        props.maxHeight
            ? `max-height: ${props.maxHeight};`
            : 'padding: 10px 20px;'};

    ${props => (props.minHeight ? `min-height: ${props.minHeight}};` : '')};
    ${props => (props.height ? `height: ${props.height}};` : '')};
`;

const WarningText = styled.Text`
    color: ${props =>
        props.categoryName === CATEGORY.BRIGHTFUTURE
            ? props.theme.colors['CMDPink']
            : 'white'};
    ${props => (props.isDisable ? 'color: white' : '')};
    position: absolute;
    left: 5%;
    bottom: 3%;
    font-weight: 600;
`;

const StandardTextContainer = styled.View`
    align-items: center;
`;

const CustomButton = ({
    text,
    color,
    warningText,
    minHeight,
    maxHeight,
    onPress,
    displayIcon,
    horizontalMargin,
    isAllCap,
    fixedTextWidth,
    fontWeight,
    fontSize,
    lineHeight,
    height,
    marginVertical,
    ...others
}) => {
    return (
        <ButtonContainer
            color={others.disabled ? 'grey' : color}
            onPress={onPress}
            disabled={others.disabled}
            maxHeight={maxHeight}
            height={height}
            minHeight={minHeight}
            horizontalMargin={horizontalMargin}
            marginVertical={marginVertical}
        >
            <StandardTextContainer>
                <StandardText
                    color={color}
                    isDisable={others.disabled}
                    fixedTextWidth={fixedTextWidth}
                >
                    {isAllCap ? text.toUpperCase() : text}
                </StandardText>
            </StandardTextContainer>
            {warningText && (
                <WarningText isDisable={others.disabled} categoryName={color}>
                    {warningText}
                </WarningText>
            )}
            {displayIcon &&
                pickIconToDisplay(color, ICONTYPE.PLAYPAGE, others.disabled)}
        </ButtonContainer>
    );
};

const CustomButton2 = ({
    text,
    color,
    warningText,
    minHeight,
    maxHeight,
    onPress,
    displayIcon,
    horizontalMargin,
    isAllCap,
    fixedTextWidth,
    fontWeight,
    fontSize,
    lineHeight,
    height,
    marginVertical,
    ...others
}) => {
    return (
        <ButtonContainer
            color={others.disabled ? 'grey' : color}
            onPress={onPress}
            disabled={others.disabled}
            maxHeight={maxHeight}
            height={height}
            minHeight={minHeight}
            horizontalMargin={horizontalMargin}
            marginVertical={marginVertical}
        >
            <StandardTextContainer>
                <SmallerStandardText
                    color={color}
                    isDisable={others.disabled}
                    fixedTextWidth={fixedTextWidth}
                >
                    {isAllCap ? text.toUpperCase() : text}
                </SmallerStandardText>
            </StandardTextContainer>
            {warningText && (
                <WarningText isDisable={others.disabled} categoryName={color}>
                    {warningText}
                </WarningText>
            )}
            {displayIcon &&
                pickIconToDisplay(color, ICONTYPE.PLAYPAGE, others.disabled)}
        </ButtonContainer>
    );
};


export default CustomButton;
