import styled from 'styled-components';

const HeaderWrapper = styled.header `
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    margin: 0 auto;
`;

export function Header(){
    return(
        <HeaderWrapper>
            <h1> Jenny Li</h1>
            <h1> My Online Resume</h1>
        </HeaderWrapper>
    )
}