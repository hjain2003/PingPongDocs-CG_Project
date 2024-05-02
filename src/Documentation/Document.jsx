import React, { useEffect, useState } from "react";
import "./Document.css";
import { Accordion } from "react-bootstrap";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import projectgif from "./gifmaker_me.gif";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Document = () => {
  const [color, setColor] = useState('#13192B');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
      <nav>
        <h1>Ping Pong Game</h1>
        <div className="quick_links">
          <a href="https://hjain2003.github.io/0x08-2d-animation-project/" id="link" className='special' target="_blank">
            Live Demo
          </a>
          &nbsp;&nbsp;
          <ScrollLink to="overview" smooth={true} duration={500} delay={0} offset={-60} className="menu_item">
            Overview |
          </ScrollLink>
          &nbsp;&nbsp;
          <ScrollLink to="projectgif" smooth={true} duration={500} delay={0} offset={-60} className="menu_item">
            Project GIF |
          </ScrollLink>
          &nbsp;&nbsp;
          <ScrollLink to="resources" smooth={true} duration={500} delay={0} offset={-60} className="menu_item">
            Resources |
          </ScrollLink>
          &nbsp;&nbsp;
          <ScrollLink to="inspiration" smooth={true} duration={500} delay={0} offset={-60} className="menu_item">
            Inspiration |
          </ScrollLink>
          &nbsp;&nbsp;
          <ScrollLink to="objectives" smooth={true} duration={500} delay={0} offset={-60} className="menu_item">
          Objectives |
          </ScrollLink>
          &nbsp;&nbsp;
          <ScrollLink to="challenges" smooth={true} duration={500} delay={0} offset={-60} className="menu_item">
          Challenges &nbsp;&nbsp;
          </ScrollLink>
        </div>
      </nav>
      <br />

      <div className="full-body">
      <span id="made-by">MADE BY : Harsh Jain(102103432), Shreeya Chatterji(102103447)</span>
      <h1 className="heading" data-aos="fade-right">Documentation</h1>

      <a href="https://hjain2003.github.io/0x08-2d-animation-project/" id="link" target="_blank">
        [Click here to see live demo]
      </a>
      <br />
      <br />

      <div className="about" id="overview">
        <h4 className="subheading" data-aos="fade-right">Overview</h4>
        <p className="overview-desc">
          The Ping Pong project is an interactive game developed using HTML5 Canvas and JavaScript. The player controls
          a paddle to bounce a ball and prevent it from falling off the bottom of the screen. Each successful bounce
          earns points, while missed bounces lead to a deduction of lives. The objective is to survive as long as
          possible (measured via an inbuilt stopwatch) with the highest score possible having 3 lives(or chances) in
          hand.{" "}
        </p>
      </div>
      <br />

      <div className="gif_container" id="projectgif">
        <h4 className="subheading" data-aos="fade-right">Project GIF</h4>
        <img src={projectgif} alt="" className="gif-insert" />
      </div>
      <br /><br />

      <div id="resources">
       <h4 className="subheading" data-aos="fade-right">Resources and Assets</h4>
        <ul data-aos="fade-up">
            <li className="list_subheading">Audio</li>
            <ul data-aos="fade-up" className="ref-links">
                <li>game-start.mp3</li>
                <li>game-over.mp3</li>
                <li>miss_bounce.mp3</li>
                <li>successful-bounce.mp3</li>
            </ul>
            <li className="list_subheading">Icons</li>
            <ul data-aos="fade-up" className="ref-links">
            <li><a href="https://unpkg.com/">unpkg.com - ionicons (for "download" icon)</a></li>
            </ul>
            <li className="list_subheading">Fonts</li>
            <ul data-aos="fade-up">
                <li>Arial</li>
            </ul>
            <li className="list_subheading">Design</li>
            <ul data-aos="fade-up">
                <li>Figma</li>
                <li>Canva</li>
            </ul>
            <li className="list_subheading">Websites/Videos for reference</li>
            <ul className="ref-links" data-aos="fade-up">
                <li><a href="https://chat.openai.com/chat">ChatGPT by OpenAI</a></li>
                <li><a href="https://pixabay.com/sound-effects/search/game/">Audio files from Pixabay</a></li>
                <li><a href="https://stackoverflow.com/questions/9880279/how-do-i-add-a-simple-onclick-event-handler-to-a-canvas-element">How to add onClick events-errors resolution</a></li>
                <li><a href="https://www.youtube.com/watch?v=xbdJf9MRL7A">Canvas Object Interaction Events Example</a></li>
                <li><a href="https://www.youtube.com/watch?v=XYzA_kPWyJ8&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=6">Canvas Collision Detection</a></li>
                <li><a href="https://www.youtube.com/watch?v=789weryntzM&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=7">HTML5 Collision Detection Part II</a></li>
            </ul>
        </ul>
      </div>
      <br/>

      <div id="inspiration">
        <h4 className="subheading" data-aos="fade-right">Sources of Inspiration</h4>
        <ul className="ref-links" data-aos="fade-up">
          <li><a href="https://en.wikipedia.org/wiki/Breakout_(video_game)">The "OG" Breakout Game</a></li>
          <li><a href="https://www.youtube.com/watch?v=VYC5Q_9-rB4">The classic windows bubbles screensaver</a></li>
          <li>Some games we have worked on before:</li>
          <ul className="ref-links" data-aos="fade-up">
          <li><a href="https://github.com/shreeyachatzz/TicTacToe_ReactNative">Tic-Tac-Toe</a></li>
          <li><a href="https://shreeyachatzz.github.io/FlappyBirdie/">Flappy Bird</a></li>
          <li><a href="https://github.com/shreeyachatzz/Pixel_Jump">Pixel Jump</a></li>          
        </ul>
          </ul>
          
      </div>

      <br />

      <div id="objectives">
        <h4 className="subheading" data-aos="fade-right">Objectives</h4>
        <span id="make_it_white">Following were our objectives at each step when building this project : </span>
        <ol data-aos="fade-up">
          <br />
          <li>Ideating and designing the project using Figma</li>
          <li>Scouring the internet to find resources and inspiration for the project</li>
          <li>Drawing the ball, paddle, text, and clock elements required for the game</li>
          <li>Implement keyboard control functionality to move the paddle</li>
          <li>Adding animation logic for the ball's movement and collision detection logic</li>
          <li>Integrating the stopwatch, score, and lives functionality into the game.</li>
          <li>Smoothening out animations, improving UI, fixing bugs</li>
        </ol>

        <br />
        <span id="make_it_white">Through this project, we were able to learn the following concepts in html and js :</span>
        <ol data-aos="fade-up">
          <li><span id="make_it_white">Canvas drawing : </span>Understanding how to use the HTML5 canvas element and drawing basic shapes</li>
          <li><span id="make_it_white">Event handling : </span> Implementing event listeners to detect user input, such as keyboard controls and mouse clicks.</li>
          <li><span id="make_it_white">Animations and Transformations : </span>Creating smooth animations using requestAnimationFrame and updating canvas elements dynamically.</li>
          <li> <span id="make_it_white">Collision Detection : </span>Implementing the logic to detect collisions between game and canvas elements</li>
        </ol>
      </div>

      <br />

      <div id="challenges" className="accordians-container">
        <h4 className="subheading" data-aos="fade-right">Challenges (Click to Expand)</h4>
        
        <div className="accordian-wrapper">
        <Accordion className="accordian">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="acc-header">Challenge #1 : Collision Detection</Accordion.Header>
            <Accordion.Body className="acc_item">
              <p><b>Situation : </b>Though we were able to move the ball, we needed a way to detect the collision between the paddle and the ball and also between the ball and the canvas so that it can be rebounded</p>
              <p><b>Task : </b>To use geometrical calculations to detect the interaction between the ball and other elements </p>
              <p><b>Action : </b>Added multiple if conditions to check if the edge of the ball has reached or surpassed the edge of the paddle or the height/width of the canvas </p>
              <p><b>Result : </b>Successfully able to detect collisions and incrememt the score counter in case of paddle ball interaction</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className="acc-header">Challenge #2 : Event Listeners</Accordion.Header>
            <Accordion.Body className="acc_item">
              <p><b>Situation :</b> After a player loses the game, the animations for the ball and the clock began again without any delay</p>
              <p><b>Task : </b>To restrict the animations until an event occurs </p>
              <p><b>Action : </b>Added a keyboard event listener so that a game can only start when the user wants to. All the self incrementing animations were also modified so as to always check the state of the game before executing its animation function </p>
              <p><b>Result : </b>Successfully restricted the animations and added a "Press Enter to Play" feature</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
      </div>
      <br /><br />
      </div>

      <footer>
        <span>Thank You!</span>
         <span>Made with ❤️ by Harsh and Shreeya</span>
      </footer>

    </>
  );
};

export default Document;
