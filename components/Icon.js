import React from 'react';
import styled from 'styled-components/native';
import { CATEGORY, ICONTYPE } from './Constants.js';

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

const IconCard = styled.Image`
    width: 130px;
    height: 130px;
    align-self: center;
`;

export const pickIconToDisplay = (categoryName, iconType, isDisable) => {
    switch (categoryName) {
        case CATEGORY.FAVORITES:
            switch (iconType) {
                case ICONTYPE.PLAYPAGE:
                    return (
                        <IconPlay
                            source={require('../assets/genconnect_icon-favorites_filled.png')}
                        />
                    );
                case ICONTYPE.PARENTGUIDEPAGE:
                    return (
                        <IconParentGuide
                            source={require('../assets/genconnect_icon-favorites_filled.png')}
                        />
                    );
                case ICONTYPE.CARDPAGE:
                    return (
                        <IconCard
                            source={require('../assets/genconnect_icon-favorites_filled.png')}
                        />
                    );
                default:
                    return null;
            }
        case CATEGORY.DANCECHALLENGE:
            switch (iconType) {
                case ICONTYPE.PLAYPAGE:
                    return (
                        <IconPlay
                            source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                        />
                    );
                case ICONTYPE.PARENTGUIDEPAGE:
                    return (
                        <IconParentGuide
                            source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                        />
                    );
                case ICONTYPE.CARDPAGE:
                    return (
                        <IconCard
                            source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                        />
                    );
                default:
                    return null;
            }

        case CATEGORY.ALLABOUTME:
            switch (iconType) {
                case ICONTYPE.PLAYPAGE:
                    return (
                        <IconPlay
                            source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                        />
                    );
                case ICONTYPE.PARENTGUIDEPAGE:
                    return (
                        <IconParentGuide
                            source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                        />
                    );
                case ICONTYPE.CARDPAGE:
                    return (
                        <IconCard
                            source={require('../assets/genconnect_icon-allaboutme_filled.png')}
                        />
                    );
                default:
                    return null;
            }

        case CATEGORY.INNERME:
            switch (iconType) {
                case ICONTYPE.PLAYPAGE:
                    return (
                        <IconPlay
                            source={require('../assets/genconnect_icon-innerme_filled.png')}
                        />
                    );
                case ICONTYPE.PARENTGUIDEPAGE:
                    return (
                        <IconParentGuide
                            source={require('../assets/genconnect_icon-innerme_filled.png')}
                        />
                    );
                case ICONTYPE.CARDPAGE:
                    return (
                        <IconCard
                            source={require('../assets/genconnect_icon-innerme_filled.png')}
                        />
                    );
                default:
                    return null;
            }

        case CATEGORY.WHATWOULDYOURDO:
            switch (iconType) {
                case ICONTYPE.PLAYPAGE:
                    return (
                        <IconPlay
                            source={require('../assets/genconnect_icon-whatwouldyoudo_filled.png')}
                        />
                    );
                case ICONTYPE.PARENTGUIDEPAGE:
                    return (
                        <IconParentGuide
                            source={require('../assets/genconnect_icon-whatwouldyoudo_filled.png')}
                        />
                    );
                case ICONTYPE.CARDPAGE:
                    return (
                        <IconCard
                            source={require('../assets/genconnect_icon-whatwouldyoudo_filled.png')}
                        />
                    );
                default:
                    return null;
            }

        case CATEGORY.BRIGHTFUTURE:
            switch (iconType) {
                case ICONTYPE.PLAYPAGE:
                    return isDisable ? (
                        <IconPlay
                            source={require('../assets/genconnect_icon-brightfuture_filled.png')}
                        />
                    ) : (
                        <IconPlay
                            source={require('../assets/genconnect_icon-brightfuture_pink_outline.png')}
                        />
                    );
                case ICONTYPE.PARENTGUIDEPAGE:
                    return isDisable ? (
                        <IconParentGuide
                            source={require('../assets/genconnect_icon-brightfuture_filled.png')}
                        />
                    ) : (
                        <IconParentGuide
                            source={require('../assets/genconnect_icon-brightfuture_pink_outline.png')}
                        />
                    );
                case ICONTYPE.CARDPAGE:
                    return isDisable ? (
                        <IconCard
                            source={require('../assets/genconnect_icon-brightfuture_filled.png')}
                        />
                    ) : (
                        <IconCard
                            source={require('../assets/genconnect_icon-brightfuture_pink_outline.png')}
                        />
                    );
                default:
                    return null;
            }

        default:
            return null;
    }
};
