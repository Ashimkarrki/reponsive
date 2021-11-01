import { React, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import CountryList from "./CountryList";
const Footer = () => {
  const [data, setData] = useState(CountryList);
  console.log(CountryList);
  return (
    <div className="footerContainer">
      <h1>Ableton</h1>
      <div className="further">
        <p>
          <a href="#">
            Register Live or Push <AiOutlineRight className="angularIcon" />
          </a>
        </p>
        <p>
          <a href="#">
            About Ableton <AiOutlineRight className="angularIcon" />
          </a>
        </p>
        <p>
          <a href="#">
            Jobs <AiOutlineRight className="angularIcon" />
          </a>
        </p>
        <p className="logos">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
            alt=""
          />
          <img
            src="https://cdn-icons.flaticon.com/png/512/3256/premium/3256013.png?token=exp=1635566169~hmac=c9391388c0d8e042c4dd3d1b60ac0145"
            alt=""
          />
        </p>
      </div>
      <div className="education">
        <h3>Education</h3>
        <p>
          <a href="#">
            Offers for students and teachers{" "}
            <AiOutlineRight className="angularIcon" />
          </a>
        </p>
        <p>
          <a href="#">
            Ableton for the Classroom <AiOutlineRight className="angularIcon" />
          </a>
        </p>
        <p>
          <a href="#">
            Ableton for Colleges and Universities{" "}
            <AiOutlineRight className="angularIcon" />
          </a>
        </p>
      </div>
      <div className="signUp">
        <h3>Sign up to our newsletter</h3>
        <p>
          Enter your email address to stay up to date with the latest offers,
          tutorials, downloads, surveys and more.
        </p>
        <input type="text" placeholder=" Email Address" />
        <button>Sign up</button>
      </div>
      <div className="community">
        <h3>Community</h3>
        <p>
          <a href="#">
            Find Ableton User Groups <AiOutlineRight className="angularIcon" />
          </a>
        </p>
        <p>
          <a href="#">
            Find Certified Training <AiOutlineRight className="angularIcon" />
          </a>
        </p>
        <p>
          <a href="#">
            Become a Certified Trainer
            <AiOutlineRight className="angularIcon" />
          </a>
        </p>
      </div>
      <div className="distributors">
        <h3>Distributors</h3>
        <p>
          <a href="#">
            Find Distributors <AiOutlineRight className="angularIcon" />
          </a>
        </p>
        <p>
          <a href="#">
            Try Push in-stort <AiOutlineRight className="angularIcon" />
          </a>
        </p>
      </div>
      <div className="language">
        <h3>Language and Location</h3>
        <select className="language">
          <option value="1">English</option>
          <option value="2">Nepali</option>
          <option value="3">Nenglish</option>
        </select>
        <select className="option">
          {data.map((s, index) => {
            return (
              <option key={index} value={index}>
                {s}
              </option>
            );
          })}
        </select>
      </div>
      <div className="footerFooter">
        <a href="#">Contact Us</a>

        <a href="#">Press Resources</a>
        <a href="#">Legal Info</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Settings</a>
        <a href="#">Imprint</a>
        <a href="#">
          Made in Berlin{" "}
          <img
            src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-hallmark.ef5355379032.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
