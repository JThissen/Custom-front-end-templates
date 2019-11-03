import React, { useEffect, useState, useRef, Fragment } from "react";
import "../CSS/Content.css";
import "../CSS/Globals.css";
import { ReactComponent as BackgroundTop } from "../Images/background-top.svg";
import { ReactComponent as Logo } from "../Images/logo.svg";
import { ReactComponent as FacebookLogo } from "../Images/facebook-f-brands.svg";
import { ReactComponent as TwitterLogo } from "../Images/twitter-brands.svg";
import { ReactComponent as InstagramLogo } from "../Images/instagram-brands.svg";
import { ReactComponent as GithubLogo } from "../Images/github-brands.svg";
import { ReactComponent as MenuIcon } from "../Images/bars-solid.svg";

import { ReactComponent as CubesIcon } from "../Images/cubes-solid.svg";
import { ReactComponent as MobileIcon } from "../Images/mobile-alt-solid.svg";
import { ReactComponent as ClockIcon } from "../Images/clock-regular.svg";
import { ReactComponent as ScaleIcon } from "../Images/balance-scale-solid.svg";

import { ReactComponent as ArrowLeft } from "../Images/chevron-left-solid.svg";
import { ReactComponent as ArrowRight } from "../Images/chevron-right-solid.svg";

import { ReactComponent as Slack } from "../Images/slack-brands.svg";
import { ReactComponent as Reddit } from "../Images/reddit-brands.svg";
import { ReactComponent as Google } from "../Images/google-brands.svg";
import { ReactComponent as Digg } from "../Images/digg-brands.svg";
import { ReactComponent as PiedPiper } from "../Images/pied-piper-brands.svg";
import { ReactComponent as Yahoo } from "../Images/yahoo-brands.svg";

import Calendar from "../Images/app-calendar-min.jpg";
import Home from "../Images/app-home-min.jpg";
import Login from "../Images/app-login-min.jpg";
import Overview from "../Images/app-overview-min.jpg";
import Profile from "../Images/app-profile-min.jpg";
import Shop from "../Images/app-shop-min.jpg";
import Signup from "../Images/app-signup-min.jpg";

function Content(props) {
  var [smallHeaderMode, setSmallHeaderMode] = useState(false);
  var [size, setSize] = useState(false);
  var elementsToShow = useRef(false);
  var tabletWidth = 979;
  var sliderItems = 8;
  var sliderItemWidth = 200;
  var sliderMarginX = 12;
  var sliderScrollPos = (sliderItems * (sliderItemWidth + sliderMarginX)) / 2;
  var current = 1;

  useEffect(() => {
    callback();
    window.addEventListener("resize", callback);
    let renderMenu = document.querySelector(".Content-renderMenu");
    let ul = document.querySelector(".Content-header-unorderedList");
    ul.addEventListener("click", e => {
      if (e.target.parentElement.className === "Content-header-unorderedList" && !renderMenu.classList.contains("renderMenuOpened")) {
        openRenderMenu(e);
      }
    });

    window.addEventListener("click", e => {
      if (
        e.target.parentElement.className !== "Content-header-unorderedList" &&
        renderMenu.classList.contains("renderMenuOpened") &&
        e.target.className !== "Content-header-mobileMenu"
      ) {
        openRenderMenu(e);
      }

      if (e.target.className != "Content-block3-slider-item-image") {
        let element = document.querySelector(".Content-block3-slider-fullscreen");
        if (element.classList.contains("visible")) {
          element.classList.remove("visible");
          return;
        }
      }
    });

    renderBlock3EventListeners();
    logoAutoScroll();
    elementsToShow.current = document.querySelectorAll(".show-on-scroll");
    loop();
  }, []);

  function loop() {
    elementsToShow.current.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      }
    });

    scroll(loop);
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

  function callback(event) {
    setSize(window.innerWidth);
    if (window.innerWidth <= tabletWidth) {
      setSmallHeaderMode(true);
      document.querySelector(".Content-header-unorderedList").style.display = "none";
    } else if (window.innerWidth > tabletWidth) {
      setSmallHeaderMode(false);
      document.querySelector(".Content-header-unorderedList").style.display = "flex";
    }
  }

  function renderBackground() {
    return <div className="Content-background"></div>;
  }

  function renderHeader() {
    return (
      <section className="Content-header">
        <div className="Content-header-container">
          <Logo className="Content-header-logo" />
          {createHeaderList()}
          {createHeaderLogoList()}
        </div>
      </section>
    );
  }

  function createHeaderList() {
    let headerItems = ["HOME", "PAGES", "FEATURES", "WORKS", "BLOG", "SHOP", "EXTRA"];
    let headerItemList = [];

    headerItems.forEach(function(value, index) {
      headerItemList.push(
        <li id={value} className="Content-header-listItem" key={index}>
          {value}
        </li>
      );
    });

    return <ul className="Content-header-unorderedList">{headerItemList}</ul>;
  }

  function openMobileMenu(event) {
    let mobileMenu = document.querySelector(".Content-header-mobileMenu");
    let header = document.querySelector(".Content-header");
    if (mobileMenu.classList.contains("menuOpened")) {
      mobileMenu.classList.remove("menuOpened");
      header.classList.remove("menuOpened");
      setTimeout(() => {
        header.style.position = "absolute";
      }, 750);
    } else {
      mobileMenu.classList.add("menuOpened");
      header.classList.add("menuOpened");
      header.style.position = "fixed";
    }
  }

  function createHeaderLogoList() {
    if (smallHeaderMode) {
      return (
        <MenuIcon
          className="Content-header-menuIcon"
          onClick={event => {
            openMobileMenu(event);
          }}
        />
      );
    }

    let headerLogoItems = [
      <FacebookLogo className="Content-header-smLogo" />,
      <TwitterLogo className="Content-header-smLogo" />,
      <GithubLogo
        className="Content-header-smLogo"
        onClick={function(event) {
          window.location.assign("https://github.com/jthissen");
        }}
      />
    ];
    let headerLogoList = [];

    headerLogoItems.forEach(function(value, index) {
      headerLogoList.push(
        <li className="Content-header-logoListItem" key={index}>
          {value}
        </li>
      );
    });

    return <ul className="Content-header-unorderedLogoList">{headerLogoList}</ul>;
  }

  function renderMobileMenu() {
    return <section className="Content-header-mobileMenu">{createMobileMenuItems()}</section>;
  }

  function createMobileMenuItems() {
    let headerItems = ["Home", "Pages", "Features", "Works", "Blog", "Shop", "Extra"];
    let headerItemList = [];

    headerItems.forEach(function(value, index) {
      headerItemList.push(
        <li className="Content-mobileMenu-listItem" key={value}>
          {value}
        </li>
      );
    });

    let smIcons = [
      <FacebookLogo className="Content-mobileMenu-smLogo" key={"fb"} />,
      <TwitterLogo className="Content-mobileMenu-smLogo" key={"tw"} />,
      <GithubLogo
        className="Content-mobileMenu-smLogo"
        key={"gh"}
        onClick={function(event) {
          window.location.assign("https://github.com/jthissen");
        }}
      />
    ];

    headerItemList.push(
      <li className="Content-mobileMenu-smIcons" key={"logos"}>
        {smIcons}
      </li>
    );

    return <ul className="Content-mobileMenu-unorderedList">{headerItemList}</ul>;
  }

  function renderMenu() {
    let menuHeaders = ["CLASSIC", "CREATIVE", "PORTFOLIO", "BLOG", "SHOP"];
    let menuItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];
    let menuList = [];
    let menuUnorderedLists = [];

    for (let i = 0; i < menuItems.length; i++) {
      menuList.push(
        <li className="Content-renderMenu-listItem" key={i}>
          {menuItems[i]}
        </li>
      );
    }

    for (let i = 0; i < menuHeaders.length; i++) {
      menuUnorderedLists.push(
        <ul className="Content-renderMenu-unorderedList">
          <li className="Content-renderMenu-headerListItem" key={menuItems[i]}>
            {menuHeaders[i]}
          </li>
          {menuList}
        </ul>
      );

      if (i != menuHeaders.length - 1) menuUnorderedLists.push(<ul className="Content-renderMenu-unorderedListEmpty"></ul>);
    }

    return (
      <div className="Content-renderMenu">
        <div className="Content-renderMenu-container">{menuUnorderedLists}</div>
      </div>
    );
  }

  function openRenderMenu(event) {
    let renderMenu = document.querySelector(".Content-renderMenu");
    let renderMenuUnorderedList = document.querySelectorAll(".Content-renderMenu-unorderedList");
    if (renderMenu.classList.contains("renderMenuOpened")) {
      renderMenu.classList.remove("renderMenuOpened");
      renderMenuUnorderedList.forEach(value => {
        value.classList.remove("renderMenuOpened");
      });
    } else {
      renderMenu.classList.add("renderMenuOpened");
      renderMenuUnorderedList.forEach(value => {
        value.classList.add("renderMenuOpened");
      });
    }
  }

  function renderBlock1() {
    const title = "Diam in arcu cursus euismod quis";
    const subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const button1 = "Porta non";
    const button2 = "Ac tortor";

    return (
      <section className="Content-block1 show-on-scroll">
        <div className="Content-block1-title">{title}</div>
        <div className="Content-block1-subtitle">{subtitle}</div>
        <div className="Content-block1-button-container">
          <button className="Content-block1-button1">{button1}</button>
          <button className="Content-block1-button2">{button2}</button>
        </div>
      </section>
    );
  }

  function renderBlock2() {
    const titles = ["Rutrum Tellus", "Cursus turpis", "Mi Ipsum", "Nibh Praesent"];
    const p1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const p2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const p3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const p4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const paragraphs = [p1, p2, p3, p4];

    let block2Content;

    if (window.matchMedia("(min-width: 1200px)").matches) {
      block2Content = (
        <div className="Content-block2-row">
          <div className="Content-block2-box">
            <CubesIcon className="Content-block2-box-icon" />
            <div className="Content-block2-box-title">{titles[0]}</div>
            <div className="Content-block2-box-paragraph">{paragraphs[0]}</div>
          </div>
          <div className="Content-block2-boxMiddleLarge"></div>
          <div className="Content-block2-box">
            <MobileIcon className="Content-block2-box-icon" />
            <div className="Content-block2-box-title">{titles[1]}</div>
            <div className="Content-block2-box-paragraph">{paragraphs[1]}</div>
          </div>
          <div className="Content-block2-boxMiddleLarge"></div>
          <div className="Content-block2-box">
            <ClockIcon className="Content-block2-box-icon" />
            <div className="Content-block2-box-title">{titles[2]}</div>
            <div className="Content-block2-box-paragraph">{paragraphs[2]}</div>
          </div>
          <div className="Content-block2-boxMiddleLarge"></div>
          <div className="Content-block2-box">
            <ScaleIcon className="Content-block2-box-icon" />
            <div className="Content-block2-box-title">{titles[3]}</div>
            <div className="Content-block2-box-paragraph">{paragraphs[3]}</div>
          </div>
        </div>
      );
    } else {
      block2Content = (
        <Fragment>
          <div className="Content-block2-row">
            <div className="Content-block2-box">
              <CubesIcon className="Content-block2-box-icon" />
              <div className="Content-block2-box-title">{titles[0]}</div>
              <div className="Content-block2-box-paragraph">{paragraphs[0]}</div>
            </div>
            <div className="Content-block2-boxMiddle"></div>
            <div className="Content-block2-box">
              <MobileIcon className="Content-block2-box-icon" />
              <div className="Content-block2-box-title">{titles[1]}</div>
              <div className="Content-block2-box-paragraph">{paragraphs[1]}</div>
            </div>
          </div>

          <div className="Content-block2-row">
            <div className="Content-block2-box">
              <ClockIcon className="Content-block2-box-icon" />
              <div className="Content-block2-box-title">{titles[2]}</div>
              <div className="Content-block2-box-paragraph">{paragraphs[2]}</div>
            </div>
            <div className="Content-block2-boxMiddle"></div>
            <div className="Content-block2-box">
              <ScaleIcon className="Content-block2-box-icon" />
              <div className="Content-block2-box-title">{titles[3]}</div>
              <div className="Content-block2-box-paragraph">{paragraphs[3]}</div>
            </div>
          </div>
        </Fragment>
      );
    }

    return <section className="Content-block2 show-on-scroll">{block2Content}</section>;
  }

  function renderBlock3() {
    let items = [];
    let images = [Calendar, Home, Login, Overview, Profile, Shop, Signup];

    for (let i = 0; i < images.length; i++) {
      items.push(
        <div className="Content-block3-slider-item">
          <img className="Content-block3-slider-item-image" src={images[i]}></img>
        </div>
      );
    }

    return (
      <section className="Content-block3 show-on-scroll">
        <div className="Content-block3-slider">{items}</div>
        {showImageFullScreen()}
      </section>
    );
  }

  function renderBlock3EventListeners() {
    let slider = document.querySelector(".Content-block3-slider");
    let startPosX;
    let mousePressed = false;
    let scrollPos;

    slider.addEventListener("mousedown", e => {
      slider.classList.add("active");
      startPosX = e.pageX;
      mousePressed = true;
      scrollPos = slider.scrollLeft;
    });

    slider.addEventListener("mouseup", e => {
      slider.classList.remove("active");
      mousePressed = false;
    });

    slider.addEventListener("mouseleave", e => {
      slider.classList.remove("active");
      mousePressed = false;
    });

    slider.addEventListener("mousemove", e => {
      if (!mousePressed) return;
      let speed = 2.0;
      e.preventDefault();
      let calc = e.pageX - startPosX;
      let distance = Math.abs(calc) * 2.0;
      let direction = -Math.sign(calc);
      slider.scrollLeft = scrollPos + direction * distance;
    });

    let sliderElements = document.querySelectorAll(".Content-block3-slider-item");

    sliderElements.forEach((value, key) => {
      value.addEventListener("click", e => {
        let element = document.querySelector(".Content-block3-slider-fullscreen");
        element.childNodes[0].src = e.target.src;
        element.classList.add("visible");
      });
    });
  }

  function showImageFullScreen() {
    let images = [Calendar, Home, Login, Overview, Profile, Shop, Signup];

    return (
      <div className="Content-block3-slider-fullscreen">
        <img className="Content-block3-slider-fullscreen-image" src={images[0]}></img>
      </div>
    );
  }

  function renderBlock4() {
    let title = "Et malesuada fames";
    let paragraph =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat.";

    return (
      <section className="Content-block4 show-on-scroll">
        <div className="Content-block4-title">{title}</div>
        <div className="Content-block4-paragraph">{paragraph}</div>
      </section>
    );
  }

  function renderBlock5() {
    let smallHeader = "risus ultricies tristique".toUpperCase();
    let title = "Turpis egestas sed tempus urna et pharetra pharetra massa ultricies!";
    let button = "purus non enim".toUpperCase();

    return (
      <section className="Content-block5 show-on-scroll">
        <div className="Content-block5-container">
          <div className="Content-block5-smallHeader">{smallHeader}</div>
          <div className="Content-block5-title">{title}</div>
          <div className="Content-block5-requestContainer">
            <div className="Content-block5-textboxContainer">
              <input type="text" placeholder="Full Name" className="Content-block5-textbox"></input>
              <div style={{ margin: "0px 8px" }}></div>
              <input type="text" placeholder="Email" className="Content-block5-textbox two"></input>
            </div>
            <button className="Content-block5-button">{button}</button>
          </div>
        </div>
      </section>
    );
  }

  function renderBlock6() {
    let dates = ["November 1, 2019", "November 2, 2019", "November 3, 2019"];
    let titles = [
      "Dui vivamus arcu felis bibendum ut tristique",
      "Quis imperdiet massa tincidunt nunc pulvinar",
      "Massa id neque aliquam vestibulum morbi blandit"
    ];
    let paragraphs = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ];

    let amount = dates.length;
    let listItems = [];
    listItems.push(
      <li className="Content-block6-listItem">
        <div className="Content-block6-listItem-container">
          <div className="Content-block6-listItem-date">{dates[amount - 1]}</div>
          <div className="Content-block6-listItem-title">{titles[amount - 1]}</div>
          <div className="Content-block6-listItem-paragraph">{paragraphs[amount - 1]}</div>
        </div>
      </li>
    );

    for (let i = 0; i < amount; i++) {
      listItems.push(
        <li className="Content-block6-listItem">
          <div className="Content-block6-listItem-container">
            <div className="Content-block6-listItem-date">{dates[i]}</div>
            <div className="Content-block6-listItem-title">{titles[i]}</div>
            <div className="Content-block6-listItem-paragraph">{paragraphs[i]}</div>
          </div>
        </li>
      );
    }
    listItems.push(
      <li className="Content-block6-listItem">
        <div className="Content-block6-listItem-container">
          <div className="Content-block6-listItem-date">{dates[0]}</div>
          <div className="Content-block6-listItem-title">{titles[0]}</div>
          <div className="Content-block6-listItem-paragraph">{paragraphs[0]}</div>
        </div>
      </li>
    );
    let ul = <ul className="Content-block6-unorderedList">{listItems}</ul>;

    let width = document.documentElement.clientWidth - 24 * 2 + 8 * 2;

    if (window.matchMedia("(min-width: 1200px)").matches) {
      width = (document.documentElement.clientWidth - 128 * 2) / 3;
    } else if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
      width = (document.documentElement.clientWidth - 64 * 2) / 2;
    } else if (window.matchMedia("(min-width: 481px) and (max-width: 767px)").matches) {
      width = (document.documentElement.clientWidth - 24 * 2) / 2;
    }

    return (
      <section className="Content-block6 show-on-scroll">
        {ul}
        <div className="Content-block6-button-container">
          <button className="Content-block6-button" onClick={e => buttonCallback("left", width, ".Content-block6-unorderedList")}>
            <ArrowLeft className="Content-block6-button-icon" />
          </button>
          <button className="Content-block6-button" onClick={e => buttonCallback("right", width, ".Content-block6-unorderedList")}>
            <ArrowRight className="Content-block6-button-icon" />
          </button>
        </div>
      </section>
    );
  }

  function buttonCallback(dir, scrollDistance, className) {
    let unorderedList = document.querySelector(className);
    let children = unorderedList.childNodes;

    if (dir === "left") {
      current--;
      unorderedList.insertBefore(children[children.length - 1], children[0]);
      unorderedList.scrollLeft += scrollDistance;
      horizontalScroll(unorderedList.scrollLeft - scrollDistance, 300, "easeInOutQuad", className);
    } else if (dir === "right") {
      current++;
      unorderedList.appendChild(children[0].cloneNode(true));
      unorderedList.removeChild(children[0]);
      unorderedList.scrollLeft -= scrollDistance;
      horizontalScroll(unorderedList.scrollLeft + scrollDistance, 300, "easeInOutQuad", className);
    }
  }

  function horizontalScroll(destination, duration, easing = "linear", className) {
    let slider = document.querySelector(className);
    let start = slider.scrollLeft;
    let startTime = performance.now();
    scroll();

    function scroll() {
      let now = performance.now();
      let time = Math.min(1, (now - startTime) / duration);
      let timeFunction;

      switch (easing) {
        case "linear":
          timeFunction = linear(time);
          break;

        case "easeInOutQuad":
          timeFunction = easeInOutQuad(time);
          break;

        case "easeInOutCubic":
          timeFunction = easeInOutCubic(time);
          break;
      }
      slider.scrollLeft = (destination - start) * timeFunction + start;

      if (slider.scrollLeft === destination) {
        return;
      }

      requestAnimationFrame(scroll);
    }
  }

  function linear(t) {
    return t;
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  function renderBlock7() {
    let logos = [
      <Slack className="Content-block7-listItem-icon" />,
      <Reddit className="Content-block7-listItem-icon" />,
      <Google className="Content-block7-listItem-icon" />,
      <Digg className="Content-block7-listItem-icon" />,
      <PiedPiper className="Content-block7-listItem-icon" />,
      <Yahoo className="Content-block7-listItem-icon" />
    ];
    let amount = logos.length;
    let listItems = [];
    listItems.push(<li className="Content-block7-listItem">{logos[logos.length - 1]}</li>);

    for (let i = 0; i < amount; i++) {
      listItems.push(<li className="Content-block7-listItem">{logos[i]}</li>);
    }
    listItems.push(<li className="Content-block7-listItem">{logos[0]}</li>);
    let ul = <ul className="Content-block7-unorderedList">{listItems}</ul>;

    return (
      <section className="Content-block7 show-on-scroll">
        <div className="Content-block7-container">{ul}</div>
      </section>
    );
  }

  function logoAutoScroll() {
    setTimeout(() => {
      let width = (document.documentElement.clientWidth - 24 * 2) / 3;
      if (window.matchMedia("(min-width: 1200px)").matches) {
        width = (document.documentElement.clientWidth - 128 * 2) / 5;
      }
      buttonCallback("right", width, ".Content-block7-unorderedList");
      logoAutoScroll();
    }, 3000);
  }

  function renderBlock8() {
    let headerLogoItems = [
      <FacebookLogo className="Content-block8-smLogo" />,
      <TwitterLogo className="Content-block8-smLogo" />,
      <GithubLogo
        className="Content-block8-smLogo"
        onClick={function(event) {
          window.location.assign("https://github.com/jthissen");
        }}
      />
    ];
    let headerLogoList = [];

    headerLogoItems.forEach(function(value, index) {
      headerLogoList.push(
        <li className="Content-block8-listItem" key={index}>
          {value}
        </li>
      );
    });

    return (
      <section className="Content-block8 show-on-scroll">
        <ul className="Content-block8-ul">{headerLogoList}</ul>
      </section>
    );
  }

  return (
    <div className="Content show-on-scroll">
      {renderBackground()}
      {renderHeader()}
      {renderMobileMenu()}
      {renderMenu()}
      {renderBlock1()}
      {renderBlock2()}
      {renderBlock3()}
      {renderBlock4()}
      {renderBlock5()}
      {renderBlock6()}
      {renderBlock7()}
      {renderBlock8()}
    </div>
  );
}

export default Content;
