import styled from 'styled-components';

const FooterWrapper = styled.footer`
    width: 90%;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 253, 250);
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
`;

export default function Footer(){
    return(
        <FooterWrapper>
            <p>All rights reserved: <a href ="">Credits</a>&#169;</p>
        </FooterWrapper>
    )
}