import styled from 'styled-components';
import { useState, useEffect } from 'react';


const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 98%;
    margin: 0 auto;
    background-color: rgba(199, 196, 196, 0.78);
    padding: 2vh 1vw;
`;

const MainTitle = styled.h2`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: rgb(0, 0, 0);
`;

const StyledImage = styled.img`
    align-self: center;
    width: 30%; 
`;

const MainContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
`;

const StyledParagraph = styled.p`
    margin: 0 auto;
    font-size: calc(2px + 1vw);
`;

const StyledTable = styled.table`
    width: 100%;
    margin: 0 auto;
    align-self: center;

`;


const CalculatorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2vh;
`;

const Input = styled.input`
    display: block;
    margin: 4% auto;
    max-width: 20%;
`;

const Label = styled.label`
    display: block;
    margin: 4% auto;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 2%;
`;

const Button = styled.button`
    width: 20%;
    margin: 1vh auto;
    text-align: center;
    color: white;
    background-color: black;
`;

const Result = styled.h3`
    text-align: center;
`;

export function Home() {
    return (
        <MainWrapper>
            <MainTitle>Home Page</MainTitle>
            <StyledImage src="../src/images/IMG_9329.JPG" alt="Image of Jenny" />
            <MainContent id="main">
                <StyledParagraph>
                    My name is Jenny Li. I am currently a junior studying Computer Science at Boston University.
                    In the future, I want to be a Software Engineer and develop web applications to help other people. My hobbies include
                    playing the piano, gaming, and reading.
                    Please explore this page to learn more about me and my experience!
                </StyledParagraph>
            </MainContent>
        </MainWrapper>
    );
}

export function Certifications(){
    return(
       <MainWrapper>
        <MainTitle>Certifications Page</MainTitle>
        <StyledParagraph>Certifications play a crucial role in validating technical skills, demonstrating expertise, and enhancing 
                    career prospects in the software engineering field. They provide formal recognition of proficiency in specific technologies, 
                    methodologies, or best practices, helping professionals stand out in a competitive job market. Earning certifications from reputable organizations, 
                    such as <b>IEEE</b> or <b>ICCP</b>, can showcase a developer’s commitment to continuous learning and adherence to industry standards. Many employers 
                    view certifications as a sign of credibility, particularly for roles requiring specialized knowledge in areas like software development, 
                    cloud computing, security, and DevOps. Additionally, certifications can open doors to better job opportunities, promotions, and higher salaries by 
                    proving a candidate’s ability to apply theoretical knowledge in practical scenarios.</StyledParagraph>
        <ul>
            <li>Certified Software Development Professional (CSDP) – IEEE <u>(May 2023)</u></li>
            <li>Certified Software Engineer (CSE) – ICCP <u>(October 2024)</u></li>
            <li> Professional Software Developer (PSD) – IEEE <u>(October 2024)</u> </li>
        </ul>
        <StyledImage src ="../src/images/images.png" alt="certifications" />
       </MainWrapper> 
    );
}

export function Education() {
    return (
      <MainWrapper>
        <MainTitle>Education Page</MainTitle>
        <ul>
          <li>
            B.A in Computer Science | <em>Boston University, MA </em> May 2026 
          </li>
          <StyledImage src="../src/images/Boston-University-Logo.png" alt="BU school Logo" />
          <li>High School Diploma | <em>Brooklyn Technical High School NY</em> June 2022</li>
          <StyledImage src="../src/images/footer_logo.png" alt="BU school Logo" />
          <li>Middle School Diploma | | <em>I.S. 73 NY</em> June 2022</li>
          <StyledImage src="src/images/beelogofornewsposts.png" alt="BU school Logo" />
        </ul>
      </MainWrapper>
    );
}

export function Work(){
    return(
        <MainWrapper>
            <MainTitle>Work Page</MainTitle>
            <h3>BOE StartUp</h3>
            <p><em> Application Engineer (Volunteer)</em></p>
            <p>January 2025 – Present</p>
            <ul>
                    <li>Engineered core app features including user authentication and an innovative schedule optimization system </li>
                    <li>Implemented real-time data synchronization using <b>Google Firebase</b>, ensuring seamless cross-device functionality</li>
                    <li>Collaborated on UI/UX improvements using <b>Swift</b> and <b>SwiftUI </b>to create an intuitive, responsive interface</li>
            </ul>
            <h3>Fake News: Governance Research Lab</h3>
                <p><em> Full Stack Intern | Boston, MA</em></p>
                <p>September 2024 – Present</p>
                <ul>
                    <li>Engineered a high-fidelity misinformation simulation using <b>React.js, JavaScript, and LLMs,</b> engaging <b>100+ participants across 5+ experiments</b> to study the effects of warrants 
                        on misinformation spread</li>
                    <li>Optimized server infrastructure to manage over <b>252 MiB/hour of outgoing data and 12.71 MiB/hour</b> of incoming data during peak usage, ensuring 
                        stable performance</li>
                    <li> Deployed and scaled applications on <b>Google Cloud</b>, improving workflow efficiency and maintaining high availability and responsiveness</li>
            </ul>
        </MainWrapper>
    );
}

export function References(){
    return(    
    <MainWrapper>
        <MainTitle>Reference Page</MainTitle>
        <StyledImage src = "src/images/pngimg.com - phone_PNG48919.png" alt = "phone image"/>
        <StyledParagraph> Here is a list of my professional and personal refernces. My professional references can atest for my character within both my academic work, but also
            my offical work in my lab research and internships. Meanwhile my personal refernces can atest for my character as a coworker, family member, and a friend. 
        </StyledParagraph>
        <h3>Professional</h3>
        <StyledTable border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Taymaz Davoodi</td>
                    <td>Professor</td>
                    <td>828-901-3920</td>
                </tr>
                <tr>
                    <td>Sam Smith</td>
                    <td>Professor</td>
                    <td>818-403-4020</td>
                </tr>
            </tbody>
        </StyledTable>
        <h3>Personal</h3>
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Relation</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lisa Li</td>
                    <td>Mother</td>
                    <td>402-901-4920</td>
                </tr>
                <tr>
                    <td>Andy Wu</td>
                    <td>Father</td>
                    <td>234-546-7653</td>
                </tr>
            </tbody>
        </table>
   </MainWrapper>);
}


export function Projects() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operation, setOperation] = useState<string | null>(null);
    const [result, setResult] = useState('');

    const handleFirstNumberChange = (e: any) => {
        setFirstNumber(e.target.value);
    };

    const handleSecondNumberChange = (e: any) => {
        setSecondNumber(e.target.value);
    };

    const calculate = (op: string) => {
        setOperation(op);
    };

    useEffect(() => {
        let calculatedResult: number = 0;
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        switch (operation) {
            case 'add':
                calculatedResult = num1 + num2;
                break;
            case 'subtract':
                calculatedResult = num1 - num2;
                break;
            case 'multiply':
                calculatedResult = num1 * num2;
                break;
            case 'divide':
                calculatedResult = num2 !== 0 ? num1 / num2 : 0;
                break;
            case 'power':
                calculatedResult = Math.pow(num1, num2);
                break;
            default:
                calculatedResult = 0;
        }

        setResult(calculatedResult.toString());
    }, [firstNumber, secondNumber, operation]);

    return (
        <MainWrapper>
            <MainTitle>Project Page</MainTitle>
            <CalculatorWrapper>
                <StyledImage src="src/images/pngimg.com - calculator_PNG7939.png" alt="Calculator Image" />
                <Label>First Number:</Label>
                <Input
                    id="first"
                    type="number"
                    value={firstNumber}
                    onChange={handleFirstNumberChange}
                />
                <Label>Second Number:</Label>
                <Input
                    id="second"
                    type="number"
                    value={secondNumber}
                    onChange={handleSecondNumberChange}
                />
                <ButtonWrapper>
                    <Button onClick={() => calculate('add')}>+</Button>
                    <Button onClick={() => calculate('subtract')}>-</Button>
                    <Button onClick={() => calculate('multiply')}>*</Button>
                    <Button onClick={() => calculate('divide')}>/</Button>
                    <Button onClick={() => calculate('power')}>**</Button>
                </ButtonWrapper>
                <Result>Result: {result}</Result>
            </CalculatorWrapper>
        </MainWrapper>
    );
}
