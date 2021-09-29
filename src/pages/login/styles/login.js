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
    background-color: #fff;
    justify-content: center;

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

export const Legend = styled.h1`
    text-align: center;
    margin-bottom: 30px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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