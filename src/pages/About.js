import './About.css';
import cv from '../assets/documents/cv.pdf';

function About(){

    return (
        <div className="container">
            <h1>About me</h1>
            <p>I am a software developer looking for internship program at
SovTech. I like programming  and I also like problem solving 
it's what keep me thinking in mind and that when I believe I'm 
still alive. I like resolving critical problems.</p>
<br></br>

<p>I deed my final year in 2022 at DUT for Diploma in ICT, and my 
Matric in 2018.The love of computers started while i was in high school, my school didn't have enough computers. 
This was a reason i shaped my career path to this qualification, this taught me a lot about how life 
is today. This helped me in accessing my career pathway toward 
Technology. In my childhood I was falling in love with devices Including cellphones, gaming,
Computers. I really want to acquire more practical knowledge around Computer through 
Internship as work experience.</p>

            <p>Please <a href={cv}  target="_blank" rel="noreferrer">download</a> and view my cv</p>
        </div>
    );
}


export default About;