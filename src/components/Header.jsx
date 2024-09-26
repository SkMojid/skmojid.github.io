import { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../images/Logo.png";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  //navbar state
  const [isActive, setActive] = useState(false);
  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActive(true) : setActive(false);
    });
  });

  return (
    <header>
      <div
        className={`${
          isActive ? "shadow-md" : ""
        } fixed px-4 w-full h-[70px] justify-between bg-white flex md:px-10 items-center z-10 `}
      >
        {/*logo header*/}
        <a href="#">
          <img className="h-10 sm:max-h-10" src={Logo} alt="Logo image" />
        </a>
        {/*nav-links*/}
        <ul className="hidden gap-10 md:flex">
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skill">
            <li>Skill</li>
          </a>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
        </ul>

        {/*side-menu icon*/}
        <div
          className="z-20 text-black cursor-pointer md:hidden"
          onClick={handleClick}
        >
          <Hamburger
            toggle={setOpen}
            toggled={isOpen}
            direction="left"
            size={25}
            color={`${isOpen ? "white" : "black"}`}
            duration={0.3}
            rounded
          />
        </div>
        {/*blurred bg*/}
        <div
          className={
            !isOpen
              ? "hidden"
              : "fixed top-0 right-0 h-screen w-full bg-white/10 backdrop-blur-sm"
          }
        />
        {/*side-menu*/}
        <div
          className={`absolute top-0 right-0 h-screen bg-v flex flex-col gap-10 p-4  ${
            !isOpen ? "translate-x-full" : "translate-x-0"
          } ease-in-out duration-200`}
        >
          <ul className="flex flex-col text-3xl font-semibold text-white gap-7 pt-[60px]">
            <hr className="border-2 rounded-lg border-slate-200" />
            <a href="#about" onClick={() => setOpen(false)}>
              <li>About</li>
            </a>
            <a href="#skill" onClick={() => setOpen(false)}>
              <li>Skill</li>
            </a>
            <a href="#portfolio" onClick={() => setOpen(false)}>
              <li>Portfolio</li>
            </a>
          </ul>
          <div className="flex gap-5 text-slate-200">
            <a href="https://github.com/skmojid">
              <FaGithub size={25} />
            </a>
            <a href="https://www.linkedin.com/in/skmojid/">
              <FaLinkedin size={25} />
            </a>
            <a href="https://www.instagram.com/its_mojid_sk/">
              <FaInstagram size={25} />
            </a>
            <a href="https://www.twitter.com/SkMojid66927/">
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
