import React, { useState } from "react";
import image from "./back.jpg";
import image4 from "./office1.jpg";
import image5 from "./about1.jpg";
import image6 from "./server.jpg";
import image10 from "./img 9.png";
import myImage3 from "./features-icon_img-1.png";
import myImage4 from "./features-icon_img-2.png";
import myImage5 from "./features-icon_img-3.png";
import { LiaBrainSolid } from "react-icons/lia";
import { GiTripleLock } from "react-icons/gi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import percent from "../Pages/percent.png";
import percent1 from "../Pages/percent1.png";
import percent2 from "../Pages/percent2.png";
import percent3 from "../Pages/percent3.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);
  const [isHovered3, setHovered3] = useState(false);
  const [isHovered4, setHovered4] = useState(false);
  const [isHovered5, setHovered5] = useState(false);

  // const backgroundImageUrl = "./background3.jpg";
  const [t,i18n] = useTranslation("global")

  const buttonStylesHovered = {
    backgroundColor: "#ff8a73",
    color: "#f8ece8",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const buttonStylesHovered1 = {
    backgroundColor: "#5580ff",
    color: "#dfeafc",
  };

  const elementContainer = {
    display: "flex",
    marginRight: "auto",
    marginLeft: "-9rem",
    position: "relative",
    gap: 10,
  };
  const elementBtn = {
    padding: "20px 47px",
    fontFamily: '"Poppins", sans-serif',
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1px",
    textShadow: "0 0 0 rgba(0, 0, 0, 0.3)",
    color: "#ff8a73",
    backgroundColor: "#f8ece8",
    border: "none",
    borderRadius: "999px",
    cursor: "pointer", // Add cursor: pointer to indicate the button is clickable
    transition: "background-color 0.3s",
  };
  const elementBtn1 = {
    padding: "20px 47px",
    fontFamily: '"Poppins", sans-serif',
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1px",
    textShadow: "0 0 0 rgba(0, 0, 0, 0.3)",
    color: "#5580ff",
    backgroundColor: "#dfeafc",
    border: "none",
    borderRadius: "999px",
  };
  const homePage2 = {
    width: "12%",
    height: "4rem",
    opacity: 0.8,
    marginLeft: "2rem",
    marginTop: "1rem",
  };
  const titleStyles = {
    padding: "0px",
    color: "#58468c",
    fontFamily: "monospace",
    fontSize: "22px",
    fontWeight: 600,
  };
  const hoverStyles = {
    textDecoration: "underline",
    cursor: "pointer",
    color: "#000",
  };
  const percentage = {
    width: "78%",
    height: "12rem",
    opacity: 0.8,
    marginLeft: "2rem",
    marginTop: "1rem",
  };
  return (
    <div className="hero border-1 pb-3 " style={{ marginRight: "1rem" }}>
      {/* <p>{t("home.body")}</p> */}
      <div className="card bg-dark text-white border-0 mx-3">
        <img
          className="card-img img-fluid"
          src={image}
          alt="Card"
          height={50}
          style={{ height: "35rem" }}
        />
        <div className="card-img-overlay d-flex align-items-center">
          <div className="container">
            <h1
              className="card-title fs-1 text fw-lighter"
              class=""
              style={{
                fontSize: "46px",
                color: "white",
                fontFamily: "fantasy",
                fontWeight: 500,
                letterSpacing: 6,
                marginLeft: "-6rem",
              }}
            >
              Welcome to <br></br>BITSS.fr
            </h1>
            {/* <h5
              className="card-title fs-1 text fw-lighter"
              class=""
              style={{ fontSize: "25px", color: "white", fontFamily: "Roboto", marginLeft:'4rem' }}
            >
              Your Trusted Cyber Security Partner
            </h5>
            <h6
              className="card-title fs-1 text fw-lighter"
              class=""
              style={{ fontSize: "15px", color: "white", marginLeft:'4rem' }}
            >
              Cyber Security Services
            </h6> */}
            <p
              className="card-text fs-5 d-none d-sm-block "
              class=""
              style={{
                fontSize: "15px",
                color: "#ffff",
                // backgroundColor: "rgb(0 0 0)",
                opacity: 0.5,
                borderRadius: "8px",
                textAlign: "left",
                padding: "20px",
                width: "500px",
                fontFamily: 'inherit',
                fontWeight: 600,
                marginLeft: "-11rem",
              }}
            >
              Bitss by BFIN – a French leading cyber security research company
              dedicated to stop:
              <br></br>
              <br></br> Stop Network, server, website Database theft, intrusion,
              hacking, website hostage ransom demands, data theft, client data
              theft, pirating website payments, spamming from website contact
              page to name a few security features.<br></br>
              <br></br> Bitss has five unique cyber secuity systems that protect
              Networks, servers, websites, video sites, and contact page
              spamming.<br></br>
            </p>
            <div style={elementContainer}>
              <p
                style={{
                  ...elementBtn,
                  ...(isHovered && buttonStylesHovered),
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                LEARN MORE
              </p>
              <p
                style={{
                  ...elementBtn1,
                  ...(isHovered1 && buttonStylesHovered1),
                }}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                CONTACT US
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row mr-9 ml-0px"
        style={{
          marginRight: 0,
          marginLeft: 6,
          marginTop: 11,
          background: 'linear-gradient(90deg, rgb(190 241 248), rgb(255 218 218)',
         padding: '1rem'
        }}
      >
        <div className="col-md-3 col-sm-6 mb-3 px-3">
          <div className="card h-100" style={{background:'darkcyan'}}>
            {/* <img
              className="card-img-top img-fluid"
              src="../Pages/percent.jpg"
              alt=""
              height={160}
            /> */}
              <img src={percent} alt="My Image" style={percentage} />
            <div className="card-body">
              <h5 className="card-title text-center" style={{color:'#ffff',fontWeight:800,fontSize:18}}>
                Network access sercurity
              </h5>
              <p style={{color: 'rgb(250, 244, 244)',fontSize:16,fontFamily:'monospace'}}>
                Bitss N for networks controlling servers. Respecting the bitss
                system 100% procedures for Cyberwall and Firewall security,
                Bitss
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3 px-3">
          <div className="card h-100" style={{background:'#9090c2'}}>
            {/* <img
              className="card-img-top img-fluid"
              src="../Pages/percent1.jpg"
              alt=""
              height={160}
            /> */}
            <img src={percent1} alt="My Image" style={percentage} />
            <div className="card-body">
              <h5 className="card-title text-center" style={{color:'#ffff',fontWeight:800,fontSize:18}}>
                Dedicated Server Access
              </h5>
              <p style={{color: 'rgb(250, 244, 244)',fontSize:16,fontFamily:'monospace'}}>
                Bitss S for total server protection housing administration
                sites, retail websites, service websites,
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3 px-3">
          <div className="card h-100" style={{background:'#8989ff'}}>
            {/* <img
              className="card-img-top img-fluid"
              src="../Pages/percent2.jpg"
              alt=""
              height={160}
            /> */}
              <img src={percent2} alt="My Image" style={percentage} />
            <div className="card-body">
              <h5 className="card-title text-center" style={{color:'#ffff',fontWeight:800,fontSize:18}}>Cloud Protection</h5>
              <p style={{color: 'rgb(250, 244, 244)',fontSize:16,fontFamily:'monospace'}}>
                All Websites and administration sites in cloud hosting, follow
                bitss and protect 
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3 px-3">
          <div className="card h-100" style={{background:'#24ab81'}}>
            {/* <img
              className="card-img-top img-fluid"
              src="../Pages/percent3.jpg"
              alt=""
              height={160}
            /> */}
              <img src={percent3} alt="My Image" style={percentage} />
            <div className="card-body">
              <h5 className="card-title text-center" style={{color:'#ffff',fontWeight:800,fontSize:18}}>
                Malware and Scam 
              </h5>
              <p style={{color: 'rgb(250, 244, 244)',fontSize:16,fontFamily:'monospace'}}>
                Bitss C secures web contact page, protect scamming by contact
                page
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body" style={{display:'flex',alignItems:'center',gap:20,padding:'1rem'}}>
        <h5
          className="card-title text-center"
          style={{ borderLeft: "4px solid blue", fontSize: "20px",height:'5rem',marginLeft:'26rem' }}
        > </h5>
          <h5>We are a French research company committed to protecting your online
          website
        </h5>
      </div>
      <div className="row" style={{ marginRight: 10, marginLeft: 10,marginBottom:'-1rem', background: 'linear-gradient(90deg, rgb(194 194 253), rgb(255 216 255)', }}>
        <div className="col-md-4 col-sm-6 mb-3 mt-3 px-3">
          <div
            className="card h-100"
            style={{ boxShadow: "3px 3px 3px 1px darkgray",background: 'linear-gradient(90deg, rgb(167 184 231), rgb(180 224 226)', }}
            
          >
            <img src={myImage3} alt="My Image" style={homePage2} />
            <div className="card-body">
              <h5 className="card-title text-center" style={{marginLeft:'-11rem',fontSize:22,fontFamily:'emoji',fontWeight:600}}>
                Network access sercurity
              </h5>
              <p className="text-muted">
                Bitss N enforced network security solutions, secure your network
                databases from unauthorized access and protect sensitive data.
                The theft of sensitive data can ruin your bsuiness and that of
                your clients business.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-3 mt-5 px-3">
          <div
            className="card h-100"
            style={{ boxShadow: "3px 3px 3px 1px darkgray", background: 'linear-gradient(90deg, rgb(167 184 231), rgb(180 224 226)', }}
          >
            <img src={myImage4} alt="My Image" style={homePage2} />
            <div className="card-body">
              <h5 className="card-title text-center" style={{marginLeft:'-8rem',fontSize:22,fontFamily:'emoji',fontWeight:600}}>
                Bitss WP protects all Website
              </h5>
              <p className="text-muted">
                Protect your admin database, monitor and block suspicious login
                attempts and brute-force attacks. And prevents data theft,
                content theft.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-3 mt-8 px-3">
          <div
            className="card h-100"
            style={{ boxShadow: "3px 3px 3px 1px darkgray",margin:'1rem',background: 'linear-gradient(90deg, rgb(167 184 231), rgb(180 224 226)', }}
          >
            <img src={myImage5} alt="My Image" style={homePage2} />
            <div className="card-body">
              <h5 className="card-title text-center" style={{marginLeft:'-4rem',fontSize:22,fontFamily:'emoji',fontWeight:600}}>
                Dedicated Server Access Security
              </h5>
              <p className="text-muted">
                Protect your dedicated server database, ensure the integrity and
                confidentiality of your dedicated servers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-3 px-3">
          <div
            className="card h-100"
            style={{ boxShadow: "3px 3px 3px 1px darkgray",margin:'1rem',background: 'linear-gradient(90deg, rgb(167 184 231), rgb(180 224 226)', }}
          >
            <img src={myImage3} alt="My Image" style={homePage2} />
            <div className="card-body">
              <h5 className="card-title text-center" style={{marginLeft:'-6rem',fontSize:22,fontFamily:'emoji',fontWeight:600}}>
                Malware and Scam Protection
              </h5>
              <p className="text-muted">
                Shield your systems from malware, ransomware, and phishing
                attacks
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-3 mt-2 px-3">
          <div
            className="card h-100 mt-8"
            style={{ boxShadow: "3px 3px 3px 1px darkgray",background: 'linear-gradient(90deg, rgb(167 184 231), rgb(180 224 226)', }}
          >
            <img src={myImage4} alt="My Image" style={homePage2} />
            <div className="card-body">
              <h5 className="card-title text-center" style={{marginLeft:'-6rem',fontSize:22,fontFamily:'emoji',fontWeight:600}}>
                Shield your systems from malware
              </h5>
              <p className="text-muted">
                Rapidly respond to security incidents, minimizing potential
                damages
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-3 mt-3 px-3">
          <div
            className="card h-100 mt-1"
            style={{ boxShadow: "3px 3px 3px 1px darkgray",background: 'linear-gradient(90deg, rgb(167 184 231), rgb(180 224 226)', }}
          >
            <img src={myImage5} alt="My Image" style={homePage2} />
            <div className="card-body">
              <h5 className="card-title text-center" style={{marginLeft:'-8rem',fontSize:22,fontFamily:'emoji',fontWeight:600}}>
                Client Login Pathway Security
              </h5>
              <p className="text-muted">
                Secure client login pathways to prevent scamming and
                unauthorized access to sensitive information and ensure reliable
                data encryption.
              </p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5
            className="card-title text-center"
            style={{
              fontSize: "36px",
              marginBottom: "-4px",
              color: "#6a56a6",
              fontWeight: 300,
              fontFamily: "sans-serif",
            }}
          >
            What's More? We Can Help You For Success.
          </h5>
        </div>
        <div className="row" style={{margin:'1rem'}}>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <LiaBrainSolid
                style={{
                  fontSize: 70,
                  color: "#4f5fcd",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginLeft: "8rem",
                  marginTop: "1rem",
                }}
              />
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={{ ...titleStyles, ...(isHovered2 ? hoverStyles : {}) }}
                  onMouseEnter={() => setHovered2(true)}
                  onMouseLeave={() => setHovered2(false)}
                >
                  Great Advices
                </h5>

                <p className="text-muted text-center">
                  Customized security Solutions With our top-notch Cyber defense
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <GiTripleLock
                style={{
                  fontSize: 70,
                  color: "#4f5fcd",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginLeft: "8rem",
                  marginTop: "1rem",
                }}
              />
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={{ ...titleStyles, ...(isHovered3 ? hoverStyles : {}) }}
                  onMouseEnter={() => setHovered3(true)}
                  onMouseLeave={() => setHovered3(false)}
                >
                  Extrem security
                </h5>
                <p className="text-muted text-center">
                  Proactive threat monitoring and personal cyber production
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <MdOutlineNotificationsActive
                style={{
                  fontSize: 70,
                  color: "#4f5fcd",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginLeft: "8rem",
                  marginTop: "1rem",
                }}
              />
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={{ ...titleStyles, ...(isHovered4 ? hoverStyles : {}) }}
                  onMouseEnter={() => setHovered4(true)}
                  onMouseLeave={() => setHovered4(false)}
                >
                  Notification altert
                </h5>
                <p className="text-muted text-center">
                  {" "}
                  Emplpoyee Security Awareness Programs
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <TbDeviceDesktopAnalytics
                style={{
                  fontSize: 70,
                  color: "#4f5fcd",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginLeft: "8rem",
                  marginTop: "1rem",
                }}
              />
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={{ ...titleStyles, ...(isHovered5 ? hoverStyles : {}) }}
                  onMouseEnter={() => setHovered5(true)}
                  onMouseLeave={() => setHovered5(false)}
                >
                  Regular analytic
                </h5>
                <p className="text-muted text-center">
                  Continual Security Enhancements{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image4}
            alt="Card"
            height={100}
            style={{height:'42rem',width:'90rem'}}
          />
        </div>
        <br></br>
        <br></br>
        <div className="card-body" style={{ padding: "80px" }}>
          <p
            className="card-title text-center"
            style={{ fontSize: "20px", marginBottom: "20px",fontFamily:'monospace',fontWeight:800 }}
          >
            BEST SERVICES
          </p>
          <h5
            className="card-title text-center"
            style={{ fontSize: "38px", marginBottom: "20px" }}
          >
            Our Services
          </h5>
        </div>
        <div className="row" style={{padding:'1rem'}}>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100" style={{background: 'linear-gradient(90deg, rgb(167 184 231), rgb(180 224 226)',}}>
              {/* <img className="card-img-top img-fluid" src="https://i.pinimg.com/originals/6a/8f/8f/6a8f8f9f5f34560405de991efefd6e82.png" alt="" height={100} /> */}
              <div className="card-body">
                <svg
                style={{color:'rgb(71 123 105)'}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-person-lines-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                </svg>

                <h5
                  className="card-title text-left"
                  style={{ fontFamily: "fangsong", fontWeight: 800,fontSize:26,color:'#0b559eed' }}
                >
                  Best Support
                  <i class="bi bi-person-lines-fill"></i>
                </h5>
                <p className="text-muted text-left">
                  Bitss support package includes: *Upgrading with new security
                  measures through ongoning research. *Training. *Assistance in
                  placing the software.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100" style={{ borderColor: "none",background: 'linear-gradient(90deg,  rgb(167 184 231), rgb(180 224 226)', }}>
              {/* <img className="card-img-top img-fluid" src="https://t3.ftcdn.net/jpg/02/75/45/16/360_F_275451672_Cotom984pdxLalnwtLKwpLjH7TPYZJMc.jpg" alt="" height={150} /> */}
              <div className="card-body">
                <svg
                style={{color:'rgb(71 123 105)'}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-list-columns-reverse"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5Zm-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z"
                  />
                </svg>
                <h5
                  className="card-title text-left"
                  style={{ fontFamily: "fangsong", fontWeight: 800,fontSize:26,color:'#0b559eed' }}
                >
                  Quick Response
                  <i class="bi bi-list-columns-reverse"></i>
                </h5>
                <p className="text-muted text-left">
                  We recognize the urgency and critical nature of cyber
                  incidents. Our dedicated incident response team is available
                  around the clock to swiftly address any security breaches or
                  threats that may arise.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100" style={{background: 'linear-gradient(90deg,  rgb(167 184 231), rgb(180 224 226)',}}>
              {/* <img className="card-img-top img-fluid" src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-notification-bell-icon-vector-vector-icon-template-png-image_4226911.jpg" alt="" height={120} /> */}
              <div className="card-body">
                <svg
                style={{color:'rgb(71 123 105)'}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-currency-dollar"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                </svg>

                <h5
                  className="card-title text-left"
                  style={{ fontFamily: "fangsong", fontWeight: 800,fontSize:26,color:'#0b559eed' }}
                >
                   Audits And Risk Assessments
                  <i class="bi bi-currency-dollar">
                    {" "}
                   
                  </i>
                </h5>
                <p className="text-muted text-left">
                  Our experts evaluate your security controls, policies, and
                  procedures to ensure adherence to industry regulations such as
                  GDPR, HIPAA, and PCI DSS.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100" style={{background: 'linear-gradient(90deg,  rgb(167 184 231), rgb(180 224 226)',}}>
              {/* <img className="card-img-top img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNFYCxEai5B75hIzPIt3oKGBKvrn8hylGVQ&usqp=CAU" alt="" height={170} /> */}
              <div className="card-body">
                <svg
                style={{color:'rgb(71 123 105)'}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-stack"
                  viewBox="0 0 16 16"
                >
                  <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                  <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                </svg>
                <h5
                  className="card-title text-left"
                  style={{ fontFamily: "fangsong", fontWeight: 800,fontSize:26,color:'#0b559eed' }}
                >
                  Security Awareness Training
                  {" "}
                  <i class="bi bi-stack"></i>
                </h5>
                <p className="text-muted text-left">
                  Our cyber security experts engaging and tailored security
                  awareness training programs educate your employees about the
                  latest threats and equip them with practical skills.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100" style={{background: 'linear-gradient(90deg, rgb(167 184 231), rgb(180 224 226)',}}>
              {/* <img className="card-img-top img-fluid" src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-notification-bell-icon-vector-vector-icon-template-png-image_4226911.jpg" alt="" height={120} /> */}
              <div className="card-body">
                <svg
                style={{color:'rgb(71 123 105)'}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-lightbulb"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                </svg>

                <h5
                  className="card-title text-left"
                  style={{ fontFamily: "fangsong", fontWeight: 800,fontSize:26,color:'#0b559eed' }}
                >
                  Real Solutions
                  <i class="bi bi-lightbulb-fill"></i>
                </h5>
                <p className="text-muted text-left">
                  Our approach is rooted in practicality and real-world
                  applicability to your business data protection. Through our
                  extensive experience and deep industry knowledge.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100" style={{background: 'linear-gradient(90deg, rgb(167 184 231), rgb(180 224 226)',}}>
              {/* <img className="card-img-top img-fluid" src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-notification-bell-icon-vector-vector-icon-template-png-image_4226911.jpg" alt="" height={120} /> */}
              <div className="card-body">
                <svg
                style={{color:'rgb(71 123 105)'}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-alarm"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                </svg>

                <h5
                  className="card-title text-left"
                  style={{ fontFamily: "fangsong", fontWeight: 800,fontSize:26,color:'#0b559eed' }}
                >
                   Secure Code Review
                  <i class="bi bi-lightbulb-fill">
                   
                  </i>
                </h5>
                <p className="text-muted text-left">
                  Our meticulous code review process examines your applications
                  to identify vulnerabilities at the source code level. We
                  employ industry-leading tools and methodologies to uncover
                  potential weaknesses that could be exploited by attackers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 mx-3 ml-10" style={{display:'flex',left:'9rem'}}>
          {/* <img
            className="card-img img-fluid"
            src={image5}
            alt="Card"
            height={100}
            style={{height:'35rem'}}
          /> */}
        </div>
        <div className="card border-0 mx-3" style={{padding:"0rem"}}>
          <img
            className="card-img img-fluid"
            src={image6}
            alt="Card"
            height={80}
            style={{height:'30rem',width:'90rem'}}
          />
        </div>
        <div className="card border-0 mx-3" style={{padding:"0rem"}}>
          <img
            className="card-img img-fluid"
            src={image10}
            alt="Card"
            height={100}
            style={{height:'0rem',marginBottom:'0rem'}}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
