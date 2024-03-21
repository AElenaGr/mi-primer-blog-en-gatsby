import * as React from "react";
// import { Link } from "gatsby";
import Layout from '../componentes/layout'

const Blog = function () {
  // Blog es un componente, mayuscula la B
  // const nombre = "Pepe"
  return (
<Layout pageTitle='ENTRADAS BLOG'> 
      <p>Esto son entradas de blog</p> 
    </Layout>


  //   <main>
  //   <nav>
  //     <Link to="/">Home</Link>
  //     <Link to="/blog">Blog</Link>
  //     <Link to="/sobremi">Sobre mi</Link>
  //   </nav>
  //   <h1 className="text-center">Esto es un blog {nombre}</h1>
  // </main>
  )
  
};



export default Blog;
export const Head = () => <title>Blog</title>;
