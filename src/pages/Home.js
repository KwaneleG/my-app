import './Home.css';
import Me from '../assets/images/me.jpg';
import Projects from './Projects';

function Home(){

    return (
        <div className="container">
            <h1>Hi, my name is Kwanele Gcaleka.</h1>
            <div className="bio">
                <div className="left">
                    <img src={ Me } alt="Kwanele Gcaleka" />
                </div>
                <div className="right">
                    <p>This is a of about cake buy sell give you hi like go pick.
                    This is a of about cake buy sell give you hi like go pick.</p>
                    <p>This is a of about cake buy sell give you hi like go pick.
                    This is a of about cake buy sell give you hi like go pick.</p>
                    <p>This is a of about cake buy sell give you hi like go pick.
                    This is a of about cake buy sell give you hi like go pick.</p>
                </div>
            </div>
            <Projects />      
        </div>
    );
}


export  default Home;