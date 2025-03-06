import styled from 'styled-components';
import { Link } from "react-router-dom";


const NavContainer = styled.nav `
    width: 30%;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: rgb(255, 255, 255);
    @media (max-width: 900px){
        width: 100%;
    }
`;

const NavWrapper = styled.nav `
    width: 100%; 
`;

const UnorderedList = styled.ul`
    display: flex;
    border: 5px;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgb(0, 0, 0);
    font-size: calc(1px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    margin: 0 auto;
    @media (max-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgb(0, 0, 0);
        list-style: none;
        padding-left: 0;
        margin: 0 auto;
      }
`;


const ListItem = styled.li`
    font-size: calc(2px + 2vw);
    width: 80%;
    background-color:rgba(240, 227, 227, 0.78);
    padding: 2vh 0;
    margin: 5vh auto;
    @media (max-width: 900px) {
        background-color:rgba(240, 227, 227, 0.78);
      }`;

export default function Nav(){
    return(
        <NavContainer>
            <NavWrapper>
                <UnorderedList>
                    <ListItem>
                        <Link to = {`/`}>Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to = {`/certifications`}>Certifications</Link>
                    </ListItem>
                    <ListItem>
                        <Link to = {`/education`}>Education</Link>
                    </ListItem>
                    <ListItem> 
                        <Link to = {`/projects`}>Projects</Link>
                    </ListItem>
                    <ListItem>
                        <Link to = {`/references`}>References</Link>
                    </ListItem>
                    <ListItem> 
                        <Link to = {`/work`}>Work</Link>
                    </ListItem>
                </UnorderedList>
            </NavWrapper>
        </NavContainer>

    );
}

