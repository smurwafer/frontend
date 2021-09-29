import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    height: 400px;
    width: 70%;
    max-width: 750px;
    display: flex;
    margin: auto;
    margin-top: 10%;
    border: 0.5px solid #ccc;

    @media (max-width: 820px) {
        border: 0;
    }
`;

export const DisplaySection = styled.div`
    width: 50%;
    height: 100%;

    @media (max-width: 820px) {
        display: none;
    }
`;

export const Section = styled.div`
    position: relative;
    flex: 1;
    height: 100%;
`;

export const Form = styled.form`
    max-width: 400px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    margin: auto;
`;


export const Display = styled.div`
    width: 100%;
    height: 100%;
    background-color: gray;
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const Legend = styled.h1`
    text-align: center;
    margin-bottom: 50px;
`;

export const PageNavigator = styled.div`
    padding: 10px;
    bottom: 10px;
    left: 0;
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 820px) {
        margin: auto;
        position: relative;
        padding: 20px 0px;
    }
`;

export const ProfileContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;
    margin: auto;
    margin-bottom: 10px;
    border: 0.5px solid #ccc;
`;

export const ProfilePhoto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const UploadText = styled.p`
    cursor: pointer;
    color: #1894FF;
    font-size: 15px;
`;

export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export const SwitchText = styled.p`
    font-size: 14px;
    margin: 0;
`;

export const SwitchLink = styled.p`
    cursor: pointer;
    font-size: 14px;
    margin: 0;
    color: #1894FF;
`;

export const HelperContainer = styled.div`
    margin: 5px 10px;
`;

export const Helper = styled.p`
    font-size: 10px;
    color: #828282;
`;

export const Row = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
`;