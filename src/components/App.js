
import './../css/main.css';
import { useRef, useState } from 'react';
import myPhoto from './../images/jose.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faReact,
  faNode,
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faPhp,
  faJava,
  faAws,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faBarsStaggered,
  faDatabase,
  faEnvelope,
  faGraduationCap,
  faIdCard,
  faLaptopCode,
  faListCheck,
  faLocationDot,
  faPhone,
  faRoute
} from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons/faAngleDoubleDown';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons/faAngleDoubleUp';

function App() {
  const sections = {
    'introduction': useRef(null),
    'skills': useRef(null),
    'highlights': useRef(null),
    'experience': useRef(null),
    'education': useRef(null)
  },

  accordions = {
    'content1': useRef(null),
    'content2': useRef(null),
    'content3': useRef(null),
    'content4': useRef(null),
    'content5': useRef(null),
    'content6': useRef(null),
    'content7': useRef(null),
    'content8': useRef(null),
  },

  [activeAccordions, setActiveAccordions] = useState({
    'content1': false,
    'content2': false,
    'content3': false,
    'content4': false,
    'content5': false,
    'content6': false,
    'content7': false,
    'content8': false
  }),
  
  scrollToSection = (reference) => {
    let tempObj = JSON.parse(JSON.stringify(activeAccordions));

    setTimeout(() => {
      sections[reference].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    }, tempObj['content7'] ? 750 : 0);

    if (tempObj['content7']) {
      tempObj['content7'] = !tempObj['content7'];
      setActiveAccordions(JSON.parse(JSON.stringify(tempObj)));
    }
  },

  toggleAccordion = (reference) => {
    let tempObj = JSON.parse(JSON.stringify(activeAccordions));

    tempObj[reference] = !tempObj[reference];
    setActiveAccordions(JSON.parse(JSON.stringify(tempObj)));
  };

  return (
    <>
      {/* Navigation Menu */}
      <nav className='nav-menu'>
        {/* Big Menu */}
        <div className='hide-l lg-g-5'>
          <div id="nav_introduction" className='nav-button' onClick={() => { scrollToSection("introduction") }}>
            INTRODUCTION
          </div>
          <div id="nav_education" className='nav-button' onClick={() => { scrollToSection("education") }}>
            EDUCATION
          </div>
          <div id="nav_skills" className='nav-button' onClick={() => { scrollToSection("skills") }}>
            SKILLS
          </div>
          <div id="nav_highlights" className='nav-button' onClick={() => { scrollToSection("highlights") }}>
            HIGHLIGHTS
          </div>
          <div id="nav_experience" className='nav-button' onClick={() => { scrollToSection("experience") }}>
            EXPERIENCE
          </div>
        </div>
        {/* Small Menu */}
        <div className='show-l nav-wrapper'>
          <FontAwesomeIcon icon={activeAccordions.content7 ? faBarsStaggered : faBars} className='nav-burger' onClick={() => { toggleAccordion('content7') }}/>
          <div ref={accordions.content7} className='answer-container padding-25-x' style={{'paddingBottom': activeAccordions.content7 ? '3vh' : '0px', height: activeAccordions.content7 ? accordions.content7.current.scrollHeight : 0}}>
            <div id="nav_introduction" className='padding-5 nav-button' onClick={() => { scrollToSection("introduction") }}>
              INTRODUCTION
            </div>
            <div id="nav_education" className='padding-5 nav-button' onClick={() => { scrollToSection("education") }}>
              EDUCATION
            </div>
            <div id="nav_skills" className='padding-5 nav-button' onClick={() => { scrollToSection("skills") }}>
              SKILLS
            </div>
            <div id="nav_highlights" className='padding-5 nav-button' onClick={() => { scrollToSection("highlights") }}>
              HIGHLIGHTS
            </div>
            <div id="nav_experience" className='padding-5 nav-button' onClick={() => { scrollToSection("experience") }}>
              EXPERIENCE
            </div>
          </div>
        </div>
      </nav>

      {/* Main Article */}
      <main className='article-container'>

        {/* Introduction */}
        <section ref={sections.introduction} className='xsm-g-1 md-g-2 xlg-g-3 margin-15'>
          <aside>
            <div className='lg-g-6 title'>
              <FontAwesomeIcon icon={faIdCard} className='align-end' />
              <div className='md-c-5 align-center'>Jose<br />Lopez-Reyes</div>
            </div>
            <div className='heading'>
              Full Stack Software Engineer
            </div>
            <p className='padding-25-t'>
            I modernize legacy systems into future-proof solutions—like slashing CPU usage by 86% for Firefly’s RV control tech while preserving 7 years of user familiarity.<br /><br />With JavaScript, React, and AWS expertise, I bridge hardware and software, crafting full-stack tools that scale, from IoT integrations (6+ components) to mentoring teams under tight deadlines.<br /><br />My work isn’t just code; it’s collaboration, whether leading 20+ client projects or retrofitting old RVs for today’s market. Let’s turn complex challenges into seamless experiences.
            </p>
          </aside>
          <img src={myPhoto} className='justify-center align-center fluid-image' />
          <aside className='md-c-2 xlg-c-1 md-g-2 margin-25-y'>
            <div className='xxsm-c-1 xlg-c-2 xlg-g-4 xsm-g-6 heading padding-15'>
              <FontAwesomeIcon icon={faEnvelope} size='2x' className='xxsm-c-1 justify-end align-center padding-25-r' />
              <div className='xlg-c-3 xsm-c-5 align-center'><a href="mailto:jose.rys@outlook.com">jose.rys@outlook.com</a></div>
            </div>
            <div className='xxsm-c-1 xlg-c-2 xlg-g-4 xsm-g-6 heading padding-15'>
              <FontAwesomeIcon icon={faPhone} size='2x' className='xxsm-c-1 justify-end align-center padding-25-r' />
              <div className='xlg-c-3 xsm-c-5 align-center'>(574) 992-1089</div>
            </div>
            <div className='xxsm-c-1 xlg-c-2 xlg-g-4 xsm-g-6 heading padding-15'>
              <FontAwesomeIcon icon={faLocationDot} size='2x' className='xxsm-c-1 justify-end align-center padding-25-r' />
              <div className='xlg-c-3 xsm-c-5 align-center'>Mishawaka, Indiana</div>
            </div>
            <div className='xxsm-c-1 xlg-c-2 xlg-g-4 xsm-g-6 heading padding-15'>
              <FontAwesomeIcon icon={faLinkedin} size='2x' className='xxsm-c-1 justify-end align-center padding-25-r' />
              <div className='xlg-c-3 xsm-c-5 align-center'><a href="https://www.linkedin.com/in/joselpz-rys" target="_blank" title="Check Out My LinkIn">joselpz-rys</a></div>
            </div>
            <div className='xxsm-c-1 xlg-c-2 xlg-g-4 xsm-g-6 heading padding-15'>
              <FontAwesomeIcon icon={faGithub} size='2x' className='xxsm-c-1 justify-end align-center padding-25-r' />
              <div className='xlg-c-3 xsm-c-5 align-center'><a href="https://github.com/joserys" target="_blank" title="Check Out My LinkIn">joserys</a></div>
            </div>
          </aside>
        </section>

        <hr />

        {/* Education */}
        <section ref={sections.education} className='margin-15'>
          <div className='lg-c-1 xxlg-c-2 md-g-12 title margin-15-b'>
            <FontAwesomeIcon icon={faGraduationCap} className='md-c-1 align-center justify-center align-center' />
            <div className='md-c-11 align-center'>Education</div>
          </div>
          <div className='lg-g-2 heading'>
            <div className='md-c-1 justify-start'>Indiana University - Kokomo</div>
            <div className='md-c-1 justify-end'>August 2018 - May 2021</div>
          </div>
          <ul>
            <li>Bachelor of Science in Information Science.</li>
            <li>Cognate (Specialization) in Computer Science.</li>
          </ul>
        </section>

        <hr />

        {/* Skills */}
        <section ref={sections.skills} className='margin-15'>
          <div className='lg-c-1 xxlg-c-2 md-g-12 title margin-15-b'>
            <FontAwesomeIcon icon={faListCheck} className='md-c-1 align-center justify-center align-center' />
            <div className='md-c-11 align-center'>Skills</div>
          </div>
          <div className='heading'>Web Development</div>
          <div className='xsm-g-2 sm-g-4 md-g-6 lg-g-7'>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faSquareJs} size='3x'/>
              <div className='iconHeading'>Javascript</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faHtml5} size='3x' />
              <div className='iconHeading'>HTML</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faCss3Alt} size='3x' />
              <div className='iconHeading'>CSS</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faSass} size='3x' />
              <div className='iconHeading'>SASS</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faBootstrap} size='3x' />
              <div className='iconHeading'>Bootstrap</div>
            </div>
          </div>
          <div className='heading padding-15-t'>Javascript Libraries/Frameworks</div>
          <div className='xsm-g-2 sm-g-4 md-g-6 lg-g-7'>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faReact} size='3x' />
              <div className='iconHeading'>React</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faAngular} size='3x' />
              <div className='iconHeading'>Angular</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faNode} size='3x' /> 
              <div className='iconHeading'>Node.js</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faSquareJs} size='3x' /> 
              <div className='iconHeading'>JQuery</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faSquareJs} size='3x' /> 
              <div className='iconHeading'>Ionic Capacitor</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faSquareJs} size='3x' /> 
              <div className='iconHeading'>Next.js</div>
            </div>
          </div>
          <div className='heading padding-15-t'>Backend Development</div>
          <div className='xsm-g-2 sm-g-4 md-g-6 lg-g-7'>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faPhp} size='3x' />
              <div className='iconHeading'>PHP</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faDatabase} size='3x' />
              <div className='iconHeading'>MySQL</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faJava} size='3x' />
              <div className='iconHeading'>Java</div>
            </div>
            <div className='xsm-c-1 icon-wrapper'>
              <FontAwesomeIcon icon={faAws} size='3x'/>
              <div className='iconHeading'>AWS</div>
            </div>
          </div>
        </section>

        <hr />

        {/* Highlights */}
        <section ref={sections.highlights} className='margin-15'>
          <div className='lg-c-1 xxlg-c-2 md-g-12 title margin-15-b'>
            <FontAwesomeIcon icon={faLaptopCode} className='md-c-1 align-center justify-center align-center' />
            <div className='md-c-11 align-center'>Highlighted Projects</div>
          </div>

          <div className='wrapper'>
            <div id="accordion_content6" className='question-container subHeading lg-g-11' onClick={() => { toggleAccordion('content6'); }}>
              <div className='lg-c-5 align-center justify-start'>Optimization of 7-year-old Software</div>
              <FontAwesomeIcon icon={faAngleDoubleDown} className={`hide-m arrow justify-center align-center lg-c-1 ${activeAccordions.content6 ? 'active' : ''}`}/>
              <div className='lg-c-5 align-center justify-end'>Firefly Integrations LCC</div>
            </div>
            <div ref={accordions.content6} className='answer-container padding-25-x' style={{'paddingBottom': activeAccordions.content6 ? '3vh' : '0px', height: activeAccordions.content6 ? accordions.content6.current.scrollHeight : 0}}>
              <hr />
              <ul className='answer-content'>
                <li>Optimized the backend and front end of Firefly's 7-year-old Linux-based RV control unit software.</li>
                <li>Reduced CPU usage from 15% to 2% in idle state and from 28% to 15% during heavy processing.</li>
                <li>Ensured that the software functioned and appeared the same as it has for the last 7 years.</li>
              </ul>
            </div>
          </div>

          <div className='wrapper'>
            <div id="accordion_content8" className='question-container subHeading lg-g-11' onClick={() => { toggleAccordion('content8'); }}>
              <div className='lg-c-5 align-center justify-start'>Developed AWS interface on 10-year-old software</div>
              <FontAwesomeIcon icon={faAngleDoubleDown} className={`hide-m arrow justify-center align-center lg-c-1 ${activeAccordions.content8 ? 'active' : ''}`}/>
              <div className='lg-c-5 align-center justify-end'>Firefly Integrations LCC</div>
            </div>
            <div ref={accordions.content8} className='answer-container padding-25-x' style={{'paddingBottom': activeAccordions.content8 ? '3vh' : '0px', height: activeAccordions.content8 ? accordions.content8.current.scrollHeight : 0}}>
              <hr />
              <ul className='answer-content'>
                <li>Interfaced with AWS S3 bucket to store configurations, allowing for individual updates of RV software.</li>
                <li>Implemented syncing management, ensuring all devices connected to the RV use the same configuration file.</li>
                <li>Updated implementation of different components to maintain the functionality and workflow of the software.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr />

        {/* Experience */}
        <section ref={sections.experience} className='margin-15'>
          <div className='lg-c-1 xxlg-c-2 md-g-12 title margin-15-b'>
            <FontAwesomeIcon icon={faRoute} className='md-c-1 align-center justify-center align-center' />
            <div className='md-c-11 align-center'>Experience</div>
          </div>

          <div className='heading'>Firefly Integrations LLC</div>

          <div className='wrapper'>
            <div id="accordion_content1" className='question-container subHeading lg-g-7' onClick={() => { toggleAccordion('content1'); }}>
              <div className='md-c-3 align-center justify-start'>Senior Software Engineer</div>
              <FontAwesomeIcon icon={faAngleDoubleDown} className={`hide-m arrow justify-center align-center md-c-1 ${activeAccordions.content1 ? 'active' : ''}`}/>
              <div className='md-c-3 align-center justify-end'>November 2022 - Present</div>
            </div>
            <div ref={accordions.content1} className='answer-container padding-25-x' style={{'paddingBottom': activeAccordions.content1 ? '3vh' : '0px', height: activeAccordions.content1 ? accordions.content1.current.scrollHeight : 0}}>
              <hr />
              <ul className='answer-content'>
                <li>Traveled to customer manufacturers’ locations to debug and resolve programming issues.</li>
                <li>Was 1 of 2 engineers selected to represent Firefly’s App team at a live Q&A panel and answer customers' questions.</li>
                <li>Integrated 6 new electronic hardware components to work seamlessly with Firefly’s Smart RV app and Linux-based RV control unit using the Ionic Capacitor Javascript framework.</li>
                <li>Upgraded old software on old RVs to be compatible with newer software and electronics, allowing for a higher resale price.</li>
                <li>Researched and updated the smart RV software to be used in new technologies (e.g., digital remote) to improve user interaction.</li>
                <li>Incorporated Capacitor and Cordova plugins using Android native code (Java).</li>
                <li>Developed features for 5 different apps, managing different demands per client.</li>
                <li>Programmed new features for the Firefly’s Linux-based RV control unit and smart RV apps.</li>
                <li>Improved user experience by implementing the latest UX design standards.</li>
              </ul>
            </div>
          </div>

          <div className='wrapper'>
            <div id="accordion_content2" className='question-container subHeading lg-g-7' onClick={() => { toggleAccordion('content2'); }}>
              <div className='md-c-3 align-center justify-start'>Team Lead</div>
              <FontAwesomeIcon icon={faAngleDoubleDown} className={`hide-m arrow justify-center align-center md-c-1 ${activeAccordions.content2 ? 'active' : ''}`}/>
              <div className='md-c-3 align-center justify-end'>July 2023 - March 2024</div>
            </div>
            <div ref={accordions.content2} className='answer-container padding-25-x' style={{'paddingBottom': activeAccordions.content2 ? '3vh' : '0px', height: activeAccordions.content2 ? accordions.content2.current.scrollHeight : 0}}>
              <hr />
              <ul className='answer-content'>
                <li>Supervised a team of 4 software engineers to support app development for 20 different clients.</li>
                <li>Collaborated with the design and integration teams to ensure clients’ expectations were fulfilled.</li>
                <li>Collaborated with tech support and customer service teams to ensure maintenance of older systems was done promptly, without disturbing the current production schedule.</li>
                <li>Researched and designed various solutions for bigger projects before scheduling and assigning the project to an engineer, obtaining the client’s approval before beginning development.</li>
                <li>Trained new team members while maintaining the current team schedule and ensuring quality work.</li>
              </ul>
            </div>
          </div>

          <div className='wrapper'>
            <div id="accordion_content3" className='question-container subHeading lg-g-7' onClick={() => { toggleAccordion('content3'); }}>
              <div className='md-c-3 align-center justify-start'>Associate Software Engineer</div>
              <FontAwesomeIcon icon={faAngleDoubleDown} className={`hide-m arrow justify-center align-center md-c-1 ${activeAccordions.content3 ? 'active' : ''}`}/>
              <div className='md-c-3 align-center justify-end'>August 2021 - May 2022</div>
            </div>
            <div ref={accordions.content3} className='answer-container padding-25-x' style={{'paddingBottom': activeAccordions.content3 ? '3vh' : '0px', height: activeAccordions.content3 ? accordions.content3.current.scrollHeight : 0}}>
              <hr />
              <ul className='answer-content'>
                <li>Maintained all external hardware integrations, ensuring they were up to date with industry standards.</li>
                <li>Ensured IOS/Android Applications function and appear similar to the Linux-based RV control unit while feeling native to each system within Ionic’s single code-base environment.</li>
              </ul>
            </div>
          </div>

          <div className='heading margin-15-t'>Suite Living Nursing Home</div>

          <div className='wrapper'>
            <div id="accordion_content4" className='question-container subHeading lg-g-7' onClick={() => { toggleAccordion('content4'); }}>
              <div className='md-c-3 align-center justify-start'>Full Stack Web Developer</div>
              <FontAwesomeIcon icon={faAngleDoubleDown} className={`hide-m arrow justify-center align-center md-c-1 ${activeAccordions.content4 ? 'active' : ''}`}/>
              <div className='md-c-3 align-center justify-end'>August 2020 - May 2021</div>
            </div>
            <div ref={accordions.content4} className='answer-container padding-25-x' style={{'paddingBottom': activeAccordions.content4 ? '3vh' : '0px', height: activeAccordions.content4 ? accordions.content4.current.scrollHeight : 0}}>
              <hr />
              <ul className='answer-content'>
                <li>Led a team of 5 entry-level PHP, SQL, and Ajax developers to overhaul the Suite-Living website.</li>
                <li>Programmed a maintenance ticket system using PHP and MySQL.</li>
              </ul>
            </div>
          </div>
          
          <div className='wrapper'>
            <div id="accordion_content5" className='question-container subHeading lg-g-7' onClick={() => { toggleAccordion('content5'); }}>
              <div className='md-c-3 align-center justify-start'>Web Consultant</div>
              <FontAwesomeIcon icon={faAngleDoubleDown} className={`hide-m arrow justify-center align-center md-c-1 ${activeAccordions.content5 ? 'active' : ''}`}/>
              <div className='md-c-3 align-center justify-end'>August 2020 - May 2021</div>
            </div>
            <div ref={accordions.content5} className='answer-container padding-25-x' style={{'paddingBottom': activeAccordions.content5 ? '3vh' : '0px', height: activeAccordions.content5 ? accordions.content5.current.scrollHeight : 0}}>
              <hr />
              <ul className='answer-content'>
                <li>Communicated with the client and team members to design a new website that meets the client’s expectations while providing a modern user-friendly design.</li>
                <li>Designed and documented a relational database to contain essential user input.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Menu */}
      <footer className='footer-menu'>© 2025 Jose Lopez-Reyes. All rights reserved.</footer>
    </>
  );
}

export default App;
