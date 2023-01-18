import { NavLink } from "react-router-dom";
import "./Footer.css";

var links = [
    {href: "//github.com/kwaneleg", name: "GitHub"},
    {href: "//www.linkedin.com/in/kwanelegcaleka", name: "LinkedIn"},
    {href: "/", name: "YouTube"}
];

function Footer(){
    return (
        <div className="footer">
            <ul className="footer-items">
                {links.map(function(el, elKey){
                    return <FooterItem key={elKey} {...el}  />
                })}
            </ul>
        </div>
    );
}

function FooterItem(prop){

    return (
        <li className="footer-item">
            <NavLink to={ prop.href } target="_blank">{ prop.name }</NavLink>
        </li>
    );
}

export default Footer;