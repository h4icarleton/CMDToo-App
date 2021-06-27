import React from 'react';
import styled from 'styled-components/native';
import { StandardText } from './CustomTextbox.js';

const ButtonContainer = styled.TouchableOpacity`
    align-self: stretch;
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    /* padding-vertical: 15px;*/
    margin-vertical: 10px;
    margin-horizontal: 20px;
    max-height: 75px;
    flex-grow: 100;

    justify-content: center;
`;

const SmallButtonContainer = styled.TouchableOpacity`
    align-self: stretch;
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    /* padding-vertical: 15px;*/
    margin-vertical: 10px;
    margin-horizontal: 5px;
    max-height: 75px;
    flex-grow: 100;

    justify-content: center;
`;

const WarningText = styled.Text`
    color: #ffffff;
    position: absolute;
    right: 5%;
    bottom: 3%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    font-weight: 600;
`;

const CustomButton = ({
    text,
    color,
    warningText,
    isSmall = false,
    ...others
}) => {
    if (isSmall) {
        return (
            <SmallButtonContainer
                color={others.disabled ? 'grey' : color}
                onPress={others.onPress}
                disabled={others.disabled}
            >
                <StandardText>{text}</StandardText>
                {warningText !== undefined ? (
                    <WarningText>{warningText}</WarningText>
                ) : (
                    <WarningText></WarningText>
                )}
            </SmallButtonContainer>
        );
    } else {
        return (
            <ButtonContainer
                color={others.disabled ? 'grey' : color}
                onPress={others.onPress}
                disabled={others.disabled}
            >
                <StandardText>{text}</StandardText>
                {warningText !== undefined ? (
                    <WarningText>{warningText}</WarningText>
                ) : (
                    <WarningText></WarningText>
                )}
            </ButtonContainer>
        );
    }
};

export default CustomButton;
