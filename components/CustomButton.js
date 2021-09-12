import React from 'react';
import styled from 'styled-components/native';
import { StandardText } from './CustomTextbox.js';
import { CATEGORY } from './Constants.js';

const ButtonContainer = styled.TouchableOpacity`
    align-self: stretch;
    justify-content: center;
    border-radius: 20px;
    ${props => (props.marginVertical ? `margin-vertical: ${props.marginVertical}};` : 'margin-vertical: 10px;')};
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
    position: absolute;
    left: 5%;
    bottom: 3%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    font-weight: 600;
`;

const Icon = styled.Image`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 3%;
    bottom: 3%;
`;

const pickIconToDisplay = (categoryName, isDisable) => {
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
            if (isDisable) {
                return (
                    <Icon
                        source={require('../assets/genconnect_icon-brightfuture_filled.png')}
                    />
                );
            } else {
                return (
                    <Icon
                        source={require('../assets/genconnect_icon-brightfuture_pink_outline.png')}
                    />
                );
            }

        default:
            return null;
    }
};

const CustomButton = ({
    text,
    color,
    warningText,
    minHeight,
    maxHeight,
    onPress,
    displayIcon,
    horizontalMargin,
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
            <StandardText color={color} style={{ fontWeight: fontWeight ? fontWeight : "900", fontSize: fontSize ? fontSize : 23, lineHeight: lineHeight ? lineHeight : 41 }}>{text}</StandardText>

            {warningText && (
                <WarningText categoryName={color}>{warningText}</WarningText>
            )}
            {displayIcon && pickIconToDisplay(color, others.disabled)}
        </ButtonContainer>
    );
};

export default CustomButton;
