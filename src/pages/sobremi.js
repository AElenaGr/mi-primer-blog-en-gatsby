// Step 1: Import React
import * as React from 'react'
// import {Link} from 'gatsby'
import Layout from '../componentes/layout'

// Step 2: Define your component
const SobreMi = () => {
return (
  <Layout pageTitle='SOBRE MI'> 
      <p>Esto es sobre mi jeje</p> 
    </Layout>

  // <main>
  //   <nav>
  //     <Link to="/">Home</Link>
  //     <Link to="/blog">Blog</Link>
  //     <Link to="/sobremi">Sobre mi</Link>
  //   </nav>
  //   <h1>Esta es la pagina sobre mi</h1>
  //   <p>Holaaaaaaaaaaaaaaaaaaaaaa</p>
  // </main>
)
}


// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Sobre Mi</title>


// Step 3: Export your component
export default SobreMi
