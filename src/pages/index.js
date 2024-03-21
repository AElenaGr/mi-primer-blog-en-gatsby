// Step 1: Import React
import * as React from "react";
//import {Link} from 'gatsby' // {} import algo dentro de algo


import Layout from "../componentes/layout";

// Step 2: Define your component. LO QUE HAY DENTRO DEL LAYOUT ES EL CHILDREN
const IndexPage = () => {
  return (
    <Layout pageTitle='Pagina de inicio'> 
      <p>Esta es la pagina de inicio</p> 
    </Layout>

    // <main>
    //   <nav>
    //     <Link to='/'>Home</Link>
    //     <Link to='/blog'>Blog</Link>
    //     <Link to='/sobremi'>Sobre mi</Link>
    //   </nav>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
