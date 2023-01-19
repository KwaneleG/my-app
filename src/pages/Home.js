import './Home.css';
import Me from '../assets/images/me.jpg';
import Projects from './Projects';

function Home(){

    return (
        <div className="container">
            <h1>Hi, my name is Kwanele T Gcaleka.</h1>
            <div className="bio" >
                <div className="left">
                    <img src={ Me } alt="Kwanele Gcaleka" />
                </div>
                <div className="right">
                    <p>This is my software project/website i have been working on in the past days, it serves as my portfolio
                        where i will post my projects for update about my work.</p>
                    <p>I value clarity, empathy, and integrity above all else. These ideals guide my approach to 
                        problem solving all the time and also life in general.
                    </p>
                    <br></br>
                    
                    <p>
                        I believe that when building softwares you need time, this means time matters at all cost.
                        <br></br>The fact that time is essential, it is in our concern that we priorities it. 
                        The qoute i like says "WASTED TIME IS WORSE THAN WASTED MONEY", 
                        this makes me believe that money can buy anything besides TIME.

                       
                    </p>
                     <br></br>
                     <br></br>
                 
                        STAY TUNE FOR MORE UPDATES...
                </div>
            </div>
            <Projects />      
        </div>
    );
}


export  default Home;