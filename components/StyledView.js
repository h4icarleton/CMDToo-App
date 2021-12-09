import styled from 'styled-components/native';

export const StyledView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const StyledHomeButtonView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 500px;
`;
export const StyledLogo = styled.View`
    align-items: center;
`;

export const ScrollStyledView = styled.ScrollView`
    margin-top: 3px;
    margin-bottom: 15px;
    width: 100%;
`;

export const Curvytext = styled.Text`
    background-color: #333;
    font-family: 'Luckiest Guy', cursive;
    font-size: 40px;
`;

export const CurvyTextPath = styled.Text`
    path {
        fill: transparent;
    }
`;

export const BigScrollStyledView = styled.ScrollView`
    margin-bottom: 10px;
`;

export const HowToPlayContainer = styled.View`
    padding-bottom: 20px;
    padding-top: 10px;
    min-width: 100%;
`;

export const ParentGuideContainer = styled.View`
    flex-shrink: 1;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    min-height: 100%;
`;

export const AppLogo = styled.Text`
    margin-top: 30%;
    text-align: center;
    font-family: Avenir;
    font-weight: 900;
    font-size: 35px;
`;

export const YouFinished = styled.Text`
    text-align: center;
    font-family: Avenir;
    font-weight: 900;
    font-size: 35px;
`;

export const AppDesc = styled.Text`
    padding-top: 15px;
    font-family: Avenir;
    padding-bottom: 15px;
    font-size: 18px;
`;

export const CategoryHeader = styled.Text`
    font-size: 24px;
    align-items: flex-start;
    justify-content: center;
    font-family: Avenir;
    font-weight: 900;
    text-align: center;
    padding-top: 15px;
`;

export const ParentTipsHeaderContainer = styled.View`
    margin-top: 30px;
`;

export const ParentTipsHeader = styled.Text`
    align-self: stretch;
    font-size: 24px;
    min-height: 50px;
    text-align: center;
    font-family: Avenir;
    font-weight: 900;
`;

export const ViewBy = styled.TextInput`
    flex-direction: row;
    align-self: stretch;
    margin: 0 20px;
    padding: 20px 0;
    font-size: 28px;
    font-weight: 600;
    justify-content: flex-start;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-left-width: 0px;
    border-right-width: 0px;
    text-align: center;
`;

export const ViewHeading = styled.Text`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    margin: 5px 20px 5px 20px;
    font-size: 18px;
`;

export const AutoMatch = styled.Text`
    padding-left: 15px;
    margin: 7.5px 0;
    font-size: 20px;
    font-size: 13px;
    font-family: Avenir;
    line-height: 18px;
    align-content: center;
`;

export const ParentTipsContainer = styled.View`
    flex-shrink: 1;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    min-height: 100%;
`;

export const ScenerioContainer = styled(ParentTipsContainer)`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const StyledTagline = styled.Text`
    font-weight: 800;
    font-family: Avenir;
    font-size: 18px;
    text-align: center;
    color: #ee3282;
    padding-top: 10px;
    padding-bottom: 20px;
`;
