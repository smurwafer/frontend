import styled from 'styled-components/macro';

export const Container = styled.div`
    /* width: 100%; */
    height: 400px;
    background-color: gray;

    /* @media (max-width: 820px) {
        display: none;
    } */
`;

export const Display = styled.div`
    background-color: gray;
    width: 100%;
    height: 100%;
`;

export const Photo = styled.img`
    height: 399px;
    width: 100%;
    object-fit: cover;
`;