import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './Header.sass'

export default class Header extends React.Component{
    render(){
        return(
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            ></Link>
        )
    }
}
