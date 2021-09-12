import React from 'react';
import styled from 'styled-components/native';
import { CATEGORY } from './Constants.js';

const IconPlay = styled.Image`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 3%;
    bottom: 3%;
`;

const IconParentGuide = styled.Image`
    position: absolute;
    width: 35px;
    height: 35px;
    right: 18px;
    top: 18px;
`;

export const pickIconToDisplay = (categoryName, isDisable, isPlay) => {
    switch (categoryName) {
        case CATEGORY.FAVORITES:
            return isPlay ? (
                <IconPlay
                    source={require('../assets/genconnect_icon-favorites_filled.png')}
                />
            ) : (
                <IconParentGuide
                    source={require('../assets/genconnect_icon-favorites_filled.png')}
                />
            );

        case CATEGORY.DANCECHALLENGE:
            return isPlay ? (
                <IconPlay
                    source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                />
            ) : (
                <IconParentGuide
                    source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                />
            );

        case CATEGORY.ALLABOUTME:
            return isPlay ? (
                <IconPlay
                    source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                />
            ) : (
                <IconParentGuide
                    source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                />
            );

        case CATEGORY.INNERME:
            return isPlay ? (
                <IconPlay
                    source={require('../assets/genconnect_icon-innerme_filled.png')}
                />
            ) : (
                <IconParentGuide
                    source={require('../assets/genconnect_icon-innerme_filled.png')}
                />
            );

        case CATEGORY.WHATWOULDYOURDO:
            return isPlay ? (
                <IconPlay
                    source={require('../assets/genconnect_icon-whatwouldyoudo_filled.png')}
                />
            ) : (
                <IconParentGuide
                    source={require('../assets/genconnect_icon-whatwouldyoudo_filled.png')}
                />
            );

        case CATEGORY.BRIGHTFUTURE:
            if (isDisable) {
                return isPlay ? (
                    <IconPlay
                        source={require('../assets/genconnect_icon-brightfuture_filled.png')}
                    />
                ) : (
                    <IconParentGuide
                        source={require('../assets/genconnect_icon-brightfuture_filled.png')}
                    />
                );
            } else {
                return isPlay ? (
                    <IconPlay
                        source={require('../assets/genconnect_icon-brightfuture_pink_outline.png')}
                    />
                ) : (
                    <IconParentGuide
                        source={require('../assets/genconnect_icon-brightfuture_pink_outline.png')}
                    />
                );
            }

        default:
            return null;
    }
};
