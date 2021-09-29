import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
`;

export const Division = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Section = styled.div`

`;

export const Navbar = styled.div``;

export const Sidebar = styled.div`
    width: 16%;
    height: 100%;

    @media (max-width: 600px) {
        width: 10%;
    }
`;

export const Content = styled.div`
    width: 70%;
    min-width: 500px;

    @media (max-width: 1030px) {
        width: 84%;
    }

    @media (max-width: 600px) {
        width: 90%;
    }
`;

export const Rightbar = styled.div`
    width: 250px;

    @media (max-width: 1030px) {
        display: none;
    }
`;