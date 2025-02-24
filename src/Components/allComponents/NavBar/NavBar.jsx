import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../../../assets/img/logo.png'
import './NavBarStyle.css'
import Mega from './Mega';
import GetStarted from './GetStarted';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function NavBar() {
    const list = [
        {
          lable: 'Home',
          path: '/'
        },
        {
          lable: 'About',
          path: 'about'
        },
        {
          lable: 'Services',
          path: 'services'
        },
        {
          lable: 'Portfolio',
          path: 'portfolio'
        },
        {
          lable: 'Team',
          path: 'team'
        },
        {
          lable: 'Blog',
          path: 'blog'
        },
        {
          lable: 'Dropdown',
          submenu: [
            {
              label: "Drop Down  1",
              path: ""
            },
            {
              label: "Deep Dropdown",
              path: "",
              submenu: [
                {
                  label: "Deep dropdown  1",
                  path: ""
                },
                {
                  label: "Deep dropdown  2",
                  path: ""
                },
                {
                  label: "Deep dropdown  3",
                  path: ""
                },
                {
                  label: "Deep dropdown  4",
                  path: ""
                },
                {
                  label: "Deep dropdown  5",
                  path: ""
                }
              ]
            },
            {
                label: "Drop Down  2",
                path: ""
              },
              {
                label: "Drop Down  3",
                path: ""
              },
              {
                label: "Drop Down  4",
                path: ""
              },
          ]
        },
      ];

      const renderSubMenuItems = (submenuItems) => {
        return submenuItems.map((subItem) => {
          if (subItem.submenu) {
            return (
              <NavDropdown title={subItem.label} id={`deep-nav-dropdown-${subItem.label}`} key={subItem.label}>
                {renderSubMenuItems(subItem.submenu)}
              </NavDropdown>
            );
          } else {
            return (
              <NavDropdown.Item href={subItem.url} key={subItem.label}>
                {subItem.label}
              </NavDropdown.Item>
            );
          }
        });
      };
    
      const [scrollPosition, setScrollPosition] = useState(0);

      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const navbarClass = scrollPosition >  30 ? 'navbar navbar-expand-lg shadow bg-light fixed-top ' : ' navbar navbar-expand-lg fixed-top ';

      return (
        <Navbar expand="lg" className={navbarClass}>
          <Container className=''>
            <Navbar.Brand href="#home" className='d-flex align-items-center '>
                <img src={img} alt="" />
                <h2 className='logo pt-2 ps-1'>FlexStart</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center ">
              <Nav className="mx-auto d-flex align-items-center ">
                {list.map((item) => {
                  if (item.submenu) {
                    return (
                      <NavDropdown title={item.lable} id={`basic-nav-dropdown-${item.lable}`} key={item.lable}>
                        {renderSubMenuItems(item.submenu)}
                      </NavDropdown>
                    );
                  } else {
                    return (
                      <NavLink to={item.path} key={item.lable} className='px-2 '>
                        {item.lable}
                      </NavLink>
                    );
                  }
                })}
                <Mega/>
                <NavLink to={'/contact'} >Contact</NavLink>
              </Nav>
                <GetStarted btnTitle={'Get Started'}/>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar