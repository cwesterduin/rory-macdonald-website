import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./layout.css"
import { fallDown as Menu } from 'react-burger-menu'
import {
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

import { myContext } from './PageContext';




export default function Layout(props) {



  return (
    <myContext.Consumer>
      {context => (
    <>
      <header>
        <Link to={props.available ? "/studio-paintings" : "/"} style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1 style={{ display: `inline` }}>RORY MACDONALD</h1>
        </Link>
        <Menu right width={ '100%' }>
            <div className="preNav" tabIndex="0"></div>
              <Link  activeClassName="active" to="/">HOME</Link>
              <Link  activeClassName="active"  to="/painting">PAINTINGS</Link>
          <Link to="/about"  activeClassName="active">ABOUT</Link>
          <Link to="/contact"  activeClassName="active">CONTACT</Link>
        </Menu>
      </header>
      {props.children}
      <footer>
      <small Style="color:#aaa">© 2020 Rory Macdonald</small>
      </footer>
    </>
  )}
    </myContext.Consumer>


  )
}
