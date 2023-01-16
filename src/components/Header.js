import { NavLink } from "react-router-dom";
import "./Header.css";

var links = [
    {href: "/", name: "Home"},
    {href: "/about", name: "About"},
    {href: "/projects", name: "Projects"}
];

function Header(){
    return (
        <div className="header">
            <ul className="menu">
                {links.map(function(el, elKey){
                    return <MenuItem key={elKey} {...el}  />
                })}
            </ul>
        </div>
    );
}

function MenuItem(prop){

    return (
        <li className="menu-item">
            <NavLink to={ prop.href } className={({ isActive }) => {
                let linkClasses = [];
                if(isActive){
                    linkClasses.push('menu-item-active')
                }

                return linkClasses.join(' ');
            }}>{ prop.name }</NavLink>
        </li>
    );
}

export default Header;