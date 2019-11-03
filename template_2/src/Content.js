import React, { useEffect, useRef, useState } from "react";
import "./Css/Content.css";
import squareWhite from "./Images/square-white.png";
import { ReactComponent as Logo } from "./Images/logo.svg";
import { ReactComponent as Diamond1 } from "./Images/img-2.svg";
import { ReactComponent as Diamond2 } from "./Images/img-1.svg";
import { ReactComponent as Diamond3 } from "./Images/img-3.svg";
import { ReactComponent as FacebookLogo } from "./Images/facebook-f-brands.svg";
import { ReactComponent as TwitterLogo } from "./Images/twitter-brands.svg";
import { ReactComponent as GithubLogo } from "./Images/github-brands.svg";
import { ReactComponent as ArrowDownLogo } from "./Images/caret-down-solid.svg";

function Content() {
  var elementsToShow = useRef(null);
  var [size, setSize] = useState(0);

  useEffect(() => {
    elementsToShow.current = document.querySelectorAll(".show-on-scroll");
    let contentFooterContact = document.querySelector(".Content-footer-contact");
    contentFooterContact.addEventListener("mouseover", contentFooterContactHover);
    contentFooterContact.addEventListener("mouseout", contentFooterContactHoverRemove);
    loop();

    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, []);

  function scrollIntoBlock2(event) {
    document.querySelector(".Content-block2-text").scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function contentFooterContactHover(event) {
    let contentFooterContact = document.querySelector(".Content-footer-contact-logo");
    contentFooterContact.classList.add("hover");
  }

  function contentFooterContactHoverRemove(event) {
    let contentFooterContact = document.querySelector(".Content-footer-contact-logo");
    contentFooterContact.classList.remove("hover");
  }

  function scroll(callback) {
    window.requestAnimationFrame(callback) || update();
  }

  function update() {
    window.setTimeout(update, (1 / 60) * 1000);
  }

  function isElementInViewport(element) {
    let rectangle = element.getBoundingClientRect();
    return rectangle.top <= window.innerHeight;
  }

  function loop() {
    elementsToShow.current.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      }
    });

    scroll(loop);
  }

  function renderSection1() {
    const block1_text1 = "lectus magna".toUpperCase();
    const block1_text2 = "feugiat nisl".toUpperCase();
    const block1_text3 = "sed".toUpperCase();
    const block1_text4 = "mauris sit".toUpperCase();
    const block1_text5 = "id leo in vitae turpis massa sed".toUpperCase();
    const block1_text6 = "Aliquet nibh praesent tristique";

    return (
      <section className="Content-block1">
        <div>
          {block1_text1} <br />
          {block1_text2}
          <br />
          {block1_text3} <span className="Content-block1-text4">{block1_text4}</span>
        </div>

        <div className="Content-block1-text5">{block1_text5}</div>
        <div className="Content-block1-text6">{block1_text6}</div>

        <div className="Content-square-image-container">
          <img className="Content-square-image" src={squareWhite} onClick={event => scrollIntoBlock2(event)} alt="square"></img>
        </div>
      </section>
    );
  }

  function renderSection2() {
    const block2_header = "nunc id cursus".toUpperCase();
    const block2_text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Faucibus pulvinar elementum integer enim neque volutpat. Ornare suspendisse sed nisi lacus sed viverra tellus in. Velit aliquet sagittis id consectetur.";
    return (
      <section className="Content-block2 show-on-scroll">
        <div className="Content-block2-text">
          <div className="Content-block2-text-header">{block2_header}</div>
          <div className="Content-block2-text-sub">{block2_text}</div>
        </div>
        <div className="Content-block2-image show-on-scroll">
          <Diamond1 className="Content-block-img" />
        </div>
      </section>
    );
  }

  function renderSection3() {
    const block3_header = "Nec sagittis aliquam".toUpperCase();
    const block3_text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna cursus eget nunc scelerisque. Purus semper eget duis at tellus at urna. Risus viverra adipiscing at in tellus integer. Quis vel eros donec ac odio. Elit eget gravida cum sociis natoque penatibus et magnis dis.";
    return (
      <section className="Content-block3 show-on-scroll">
        <div className="Content-block3-text">
          <div className="Content-block3-text-header">
            {block3_header.substr(0, 7)} <br /> {block3_header.substr(8, block3_header.length - 8)}
          </div>
          <div className="Content-block3-text-sub">{block3_text}</div>
        </div>
        <div className="Content-block3-image">
          <Diamond2 className="Content-block-img-rot" />
        </div>
      </section>
    );
  }

  function renderSection4() {
    const block4_header = "ante metus".toUpperCase();
    const block4_text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel. Varius duis at consectetur lorem donec massa. Sagittis orci a scelerisque purus semper eget.";
    return (
      <div className="Content-block-2-extra">
        <section className="Content-block2 show-on-scroll">
          <div className="Content-block2-text">
            <div className="Content-block2-text-header">{block4_header}</div>
            <div className="Content-block2-text-sub">{block4_text}</div>
          </div>
          <div className="Content-block2-image show-on-scroll">
            <Diamond3 className="Content-block-img" />
          </div>
        </section>
      </div>
    );
  }

  function renderFooter() {
    const footer_header = "fusce id velit ut tortor".toUpperCase();
    const footer_sub = "Egestas sed sed risus pretium quam.";
    const footer_button = "portfolio".toUpperCase();

    const headquarters = ["+31 125 329 129", "1456 Street Address", "State, CA", "United States"];
    const list = [];
    headquarters.forEach((value, index) => {
      list.push(
        <li className="Content-footer-info-item1-item" key={index}>
          {value}
        </li>
      );
    });
    const ul1 = (
      <ul className="Content-footer-info-item1">
        <h1 className="Content-footer-info-item1-header">{"headquarters".toUpperCase()}</h1>
        {list}
      </ul>
    );

    const about_text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin.";
    const logo_container = (
      <div className="Content-footer-info-logo-container">
        <FacebookLogo className="Content-footer-info-logo" />
        <TwitterLogo className="Content-footer-info-logo" />
        <GithubLogo
          className="Content-footer-info-logo"
          onClick={function(event) {
            window.location.assign("https://github.com/jthissen");
          }}
        />
      </div>
    );

    const ul2 = (
      <ul className="Content-footer-info-item2">
        <h1 className="Content-footer-info-item2-header">{"about".toUpperCase()}</h1>
        <div className="Content-footer-info-item2-item">{about_text}</div>
      </ul>
    );

    function toggleContactContainer(e) {
      let container = document.querySelector(".Content-footer-contact-container");
      if (container.classList.contains("hide")) {
        container.classList.remove("hide");
      } else {
        container.classList.add("hide");
      }
    }

    return (
      <section className="Content-footer show-on-scroll">
        <div className="Content-footer-image" />
        <div style={{ position: "absolute", top: "0rem" }}>
          <div className="Content-footer-header">{footer_header}</div>
          <div className="Content-footer-sub">{footer_sub}</div>
          <button className="Content-footer-button">{footer_button}</button>
        </div>
        <button className="Content-footer-contact" onClick={e => toggleContactContainer(e)}>
          {"Contact us".toUpperCase()}
          <ArrowDownLogo className="Content-footer-contact-logo" />
        </button>

        <div className="Content-footer-contact-container hide">
          <div className="Content-footer-contact-subcontainer">
            <h1 className="Content-footer-textarea-header">{"message".toUpperCase()}</h1>
            <textarea
              placeholder="Tell us a few words about your project. We will answer as soon as possible!"
              rows="8"
              cols="50"
              className="Content-footer-textarea"
            ></textarea>
          </div>
          <div className="Content-footer-contact-subcontainer2">
            <h1 className="Content-footer-textarea-header">{"e-mail".toUpperCase()}</h1>
            <input type="text" className="Content-footer-textbox"></input>
            <button className="Content-footer-button-send">{"send".toUpperCase()}</button>
          </div>
        </div>

        <div className="Content-footer-info">
          {ul2}
          {ul1}
        </div>
        <div className="Content-footer-smLogos">{logo_container}</div>
      </section>
    );
  }

  return (
    <div className="Content">
      <div className="Content-header">
        <Logo className="Content-header-logo" />
      </div>
      <div className="Content-background"></div>
      {renderSection1()}

      {renderSection2()}
      {renderSection3()}
      {renderSection4()}
      {renderFooter()}
    </div>
  );
}

export default Content;
