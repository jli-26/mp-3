import Footer from './components/Footer'; 
import { Header } from './components/Header';
import { Home, References, Certifications, Education, Work, Projects } from './components/Main';
import Nav from './components/Nav';
import styled from 'styled-components';
import {Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";

const StyledDiv =styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;`;


const Layout = styled.div`
  display: flex;
  width: 92%;
  margin: 0 auto;
  flex-direction: row; 
  @media (max-width: 900px){
    flex-direction: column; 
  }
`;



function Root(){
  return(
    <>
     <Layout><Nav/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/references" element={<References />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </Layout> 
    </>
  );
}

const router = createBrowserRouter(
  [
    {path: "*", Component: Root}
  ]
);

function App() {
  return (
    <StyledDiv>
      <Header/>
        <RouterProvider router={router}/>
      <Footer/>
    </StyledDiv>
  );
}


export default App;

