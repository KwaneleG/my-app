import { NavLink } from "react-router-dom";
import "./Footer.css";

var links = [
    {href: "https://github.com/kwaneleg", name: "GitHub"},
    {href: "https://www.linkedin.com/in/kwanelegcaleka", name: "LinkedIn"}
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
            <NavLink to={ prop.href }>{ prop.name }</NavLink>
        </li>
    );
}

export default Footer;