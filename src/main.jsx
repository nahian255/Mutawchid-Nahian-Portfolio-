import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './pages/home/Home';
import ContactMe from './pages/home/ContactMe';
import AboutMe from './pages/home/About me';
import Skills from './pages/home/Skills';
import Projects from './pages/home/Project';
import Project1 from './pages/home/Project1';
import Project2 from './pages/home/Project2';
import Project3 from './pages/home/Project3';
import Test from './pages/Test';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <AboutMe></AboutMe>
      },
      {
        path: 'contactMe',
        element: <ContactMe />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'project',
        element: <Projects />
      },
      {
        path: 'project/languageSafari',
        element: <Project1 />
      },
      {
        path: 'project/heroToy',
        element: <Project2 />
      },
      {
        path: 'project/chefHub',
        element: <Project3 />
      },
      {
        path: 'test',
        element: <Test></Test>
      },


    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
