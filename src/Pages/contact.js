import React,{useState} from "react";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { AiOutlineSlack } from "react-icons/ai";
import { AiOutlineUngroup } from "react-icons/ai";
import { AiOutlineSelect } from "react-icons/ai";
import server1 from './serverSecurity.jpg';
const Contact = () => {

  const [isHovered2, setHovered2] = useState(false);
  const [isHovered3, setHovered3] = useState(false);
  const [isHovered4, setHovered4] = useState(false);
  const [isHovered5, setHovered5] = useState(false);

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
  const server = {
    width: "100%",
    height: "27rem",
    opacity: 0.8,
    // marginLeft: "2rem",
    // marginTop: "1rem",
  };
  return (
    <div
      className="row"
      style={{ marginleft: "2rem", marginRight: "2rem", marginTop: "0rem",background: 'linear-gradient(90deg, rgb(194 194 253), rgb(255 216 255)', }}
    >
      <div className="col-md-6 col-sm-6 mb-3 px-3">
        <div className="card h-100%" style={{ border: "none",margin:'1rem' }}>
          {/* <img className="card-img-top img-fluid" src="https://raw.githubusercontent.com/luispadron/UICircularProgressRing/master/.github/demo.gif" alt="" height={160} /> */}
          <div className="container my-3 py-3">
            <h1
              className="text-left "
              style={{ color: "blue", marginTop: "5px",marginleft:'6rem' }}
            >
              <b style={{marginleft:'5rem'}}>BITSS Cyber Security</b>
            </h1>
            <hr />
            <p
              className="lead text-left"
              style={{ fontFamily: 300, fontSize: "17px", width: "500px" }}
            >
              <br></br>At Bitss.fr, we understand that cyber threats are
              constantly evolving, and staying one step ahead is crucial.
              Whether you're a business owner, an IT professional, or simply
              someone who values their online privacy, our platform will provide
              you with comprehensive resources to help you navigate the complex
              world of cyber security.<br></br>
              <br></br>Our team of experts is working tirelessly to bring you
              the latest insights, practical tips, and expert guidance to
              safeguard your online presence.<br></br>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 mb-3 px-3">
        <div className="card h-80%" style={{ margin:'1rem' }}>
        <img src={server1} alt="My Image" style={server} />
          {/* <img
            className="card-img-top img-fluid"
            src="https://bitss.fr/wp-content/uploads/2023/07/bitss.fr_.png"
            alt=""
            height={100}
            style={{height:'27rem'}}
          /> */}
          {/* <div className="container my-3 py-3">
            <hr />
          </div> */}
        </div>
      </div>
      {/* <div className="container my-3 py-3">
        <h1
          className="text-center "
          style={{
            color: "#404040",
            marginBottom: "50px",
            fontWeight: 700,
            paddingBottoms: "20px",
          }}
        >
          Our prime goal is to serve ultimate security
        </h1>

        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/computer-password-6343273-5231322.png"
                alt=""
                height={160}
                style={{height:'15rem'}}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  network access sercurity
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://static.vecteezy.com/system/resources/previews/010/855/003/original/3d-illustration-security-lock-png.png"
                alt=""
                height={160}
                style={{height:'15rem'}}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  wordpress admin login security
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://cdn-icons-png.flaticon.com/512/6933/6933034.png"
                alt=""
                height={160}
                style={{height:'15rem'}}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  dedicated server access security
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://howtoremove.guide/wp-content/uploads/2020/06/Online-Virus-Scanner.png"
                alt=""
                height={160}
                style={{height:'15rem'}}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  cloud protection and client login pathway security protection
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://cyone.eu/wp-content/uploads/2015/01/two_factor_authentication-705x700.png"
                alt=""
                height={160}
                style={{height:'15rem'}}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  malware, scam protection
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        <div className="row" style={{margin:'1rem'}}>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100" style={{background:'#cdeaf2'}}>
              <AiOutlineDeploymentUnit
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
            <div className="card h-100" style={{background:'#cdeaf2'}}>
              <AiOutlineSlack
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
            <div className="card h-100" style={{background:'#cdeaf2'}}>
              <AiOutlineUngroup
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
            <div className="card h-100" style={{background:'#cdeaf2'}}>
              <AiOutlineSelect
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

      <div className="container my-3 py-3">
        <h1
          className="text-center "
          style={{
            color: "#404040",
            marginBottom: "0px",
            fontWeight: 700,
            paddingBottoms: "20px",
          }}
        >
          Contact Us To Get Our Security Service
        </h1>
        <hr />
        <p className="lead text-center">
          Bitss Website contact form protection anyi spam, and performance
          increases with the use of Bitss WP protection
        </p>
      </div>
      <div className="row" style={{margin:'1rem'}}>
        <div className="col-md-4 col-sm-6 mb-3 px-3">
          <div className="card h-100%">
            <img
              className="card-img-top img-fluid"
              src="https://static.vecteezy.com/system/resources/previews/003/223/540/large_2x/cyber-security-data-protection-logo-on-white-vector.jpg"
              alt=""
              height={100}
              style={{height:'20rem',width:'26rem'}}
            />
            <div className="card-body">
              <h5 className="card-title text-center">
                @ Cyber security Bitss N for network protection to purchase this
                contact
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-3 px-3">
          <div className="card h-100%">
            <img
              className="card-img-top img-fluid"
              src="https://i.pinimg.com/736x/43/a6/eb/43a6ebfd3fd7cfd5d6e9f10f2e867a67.jpg"
              alt=""
              height={160}
              style={{height:'20rem',width:'26rem'}}
            />
            <div className="card-body">
              <h5 className="card-title text-center">
                Server Protection @ Cyber Security Bitss S for dedicated server
                protection
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-3 px-3">
          <div className="card h-100%">
            <img
              className="card-img-top img-fluid"
              src="https://www.seekpng.com/png/detail/956-9564033_icon-for-network-1-global-network-logo-png.png"
              alt=""
              height={160}
              style={{height:'20rem',width:'29rem'}}
            />
            <div className="card-body">
              <h5 className="card-title text-center">
                WordPress Protection @ Cyber Security Bitss WP for website
                protection to database
              </h5>
            </div>
          </div>
        </div>
        <div className="row" style={{margin:'1rem'}}>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              {/* <img className="card-img-top img-fluid" src="https://raw.githubusercontent.com/luispadron/UICircularProgressRing/master/.github/demo.gif" alt="" height={160} /> */}
              <div className="card-body">
                <h5
                  className="card-title text-left"
                  style={{ fontWeight: 800, fontSize: "30px", margin: "25px" }}
                >
                  Cyper Protection
                </h5>
                <p
                  className="text-muted"
                  style={{ margin: "25px", padding: "10px" }}
                >
                  <br></br> Malware, such as ransomware, botnet software, RATs
                  (remote access Trojans), rootkits and bootkits, spyware,
                  Trojans, viruses, and worms.<br></br>
                  <br></br> Backdoors, which allow remote access.Formjacking,
                  which inserts malicious code into online forms.<br></br>
                  <br></br> Cryptojacking, which installs illicit cryptocurrency
                  mining software.<br></br>
                  <br></br> DDoS (distributed denial-of-service) attacks, which
                  flood servers, systems, and networks with traffic to knock
                  them offline.<br></br>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              {/* <img className="card-img-top img-fluid" src="https://raw.githubusercontent.com/luispadron/UICircularProgressRing/master/.github/demo.gif" alt="" height={160} /> */}
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={{ fontWeight: 800, fontSize: "30px", margin: "18px" }}
                >
                  WordPress Protection
                </h5>
                <p
                  className="text-muted"
                  style={{ margin: "25px", padding: "10px" }}
                >
                  <br></br> ✔ Customized Security Solutions<br></br>
                  <br></br>✔ Proactive Threat Monitoring<br></br>
                  <br></br> ✔ Trusted Partner Network<br></br>
                  <br></br> BFIN BITSS WP cyber protection for wordpress is an
                  easy-to-use plugin for fighting off intrusion and malicios
                  spamming on your WordPress website. This BITTS works by
                  screening suspected spam against its database of known spam
                  entries, blocking backdoor access and strengthening access
                  security.<br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://bitss.fr/wp-content/uploads/2023/07/security_logo_4.png"
                alt=""
                height={160}
              />
              <div className="card-body">
                <a
                  className="card-title text-center"
                  href="https://officetools.bobosoho.com/fixed-business-xtra-packages/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  bitss.fr cyber security
                </a>
                <p className="text-muted"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
