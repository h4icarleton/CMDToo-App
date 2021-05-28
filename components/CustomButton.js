import React from 'react';
import styled from 'styled-components/native';

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

const ButtonText = styled.Text`
    color: white;
    text-align: center;
    font-size: 25px;
    /* padding-bottom: 11px; */
`;

const CustomButton = ({ text, color, ...others }) => (
    <ButtonContainer color={others.disabled ? 'grey' : color} onPress={others.onPress} disabled={others.disabled}>
        <ButtonText>{text}</ButtonText>
    </ButtonContainer>
);

export default CustomButton;
