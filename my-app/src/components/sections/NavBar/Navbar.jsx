import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import About from '../../pages/About/About';
import Skills from '../../pages/Skills/Skills';
import Webdev from '../../pages/Webdev/Webdev';
const navbarData = [
    {
        id: 1,
        title: 'About',
        to: '/about',
    },
    {
        id: 2,
        title: "Skills",
        to: "/skills",
      },
      {
        id: 3,
        title: "Web Dev Work",
        to: "/webdev",
      },
]

const Navbar = () => {
    return (
      <Router>
        <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
          <ul className="flex flex-wrap">
            {navbarData.map((el, id) => (
              <LinkItem el={el} key={id} />
            ))}
          </ul>
        </nav>
  
        <Switch>
          <Route exact path="/">
            <About/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/skills">
            <Skills/>
          </Route>
          <Route path="/webdev">
            <Webdev/>
          </Route>
        </Switch>
      </Router>
    );
  };
  
  const LinkItem = (props) => {
    const { title, to } = props.el;
    return (
      <li className="m-3 lg:mx-5">
        <NavLink
          to={to}
          activeClassName="text-blue-600"
          className="text-grey-500 pl-1 hover:text-blue-300 transition ease-out duration-200">
          {title}
        </NavLink>
      </li>
    );
  };
  
  export default Navbar;