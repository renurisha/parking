import React from "react";
import { Link } from "react-router-dom";
import './header.css';
const headerCircles=[
    {
        key:1,
        tag:"Featured",
        icon:<i class="fa-solid fa-star"></i>,
    },
    {
    key:2,
    tag:"Armoury",
    icon:<i class="fa-solid fa-star"></i>,
}
,

{
    key:3,
    tag:"Aquatics",
    icon:<i class="fa-solid fa-star"></i>,
},
{
    key:4,
    tag:"Cycling",
    icon:<i class="fa-solid fa-star"></i>,
},
{
    key:5,
    tag:"Equestrian",
    icon:<i class="fa-solid fa-star"></i>,
},
{
    key:6,
    tag:"Extreme",
    icon:<i class="fa-solid fa-star"></i>,
},
{
    key:7,
    tag:"Golf",
    icon:<i class="fa-solid fa-star"></i>
},
{
    key:8,
    tag:"Gymnastics",
    icon:<i class="fa-solid fa-star"></i>,
},
{
    key:9,
    tag:"Lake & Sea",
    icon:<i class="fa-solid fa-star"></i>,
}
]
export class Header extends React.Component{
    render(){
        return <div className="header">
            <ul><li>HOME</li>
            <li><Link to={'/'}>PARKING locations</Link></li>
            <li>CONTACT US</li>
            <li><Link to={'/login'}>SIGNIN</Link></li>
            <li>SignUp</li></ul>
        </div>
    }
}