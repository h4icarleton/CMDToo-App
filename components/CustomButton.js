import React from 'react';
import styled from 'styled-components/native';
import { StandardText } from './CustomTextbox.js';
import { CATEGORY } from './Constants.js';
import { pickIconToDisplay } from './Icon.js';

const ButtonContainer = styled.TouchableOpacity`
    align-self: stretch;
    justify-content: center;
    border-radius: 20px;
    margin-vertical: 10px;
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
`;

const WarningText = styled.Text`
    color: ${props =>
        props.categoryName === CATEGORY.BRIGHTFUTURE
            ? props.theme.colors['CMDPink']
            : 'white'};
    position: absolute;
    left: 5%;
    bottom: 3%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    font-weight: 600;
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
    ...others
}) => {
    return (
        <ButtonContainer
            color={others.disabled ? 'grey' : color}
            onPress={onPress}
            disabled={others.disabled}
            maxHeight={maxHeight}
            minHeight={minHeight}
            horizontalMargin={horizontalMargin}
        >
            <StandardText color={color}>{text}</StandardText>

            {warningText && (
                <WarningText categoryName={color}>{warningText}</WarningText>
            )}
            {displayIcon && pickIconToDisplay(color, others.disabled, true)}
        </ButtonContainer>
    );
};

export default CustomButton;
