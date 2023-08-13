import { instagram, github, linkedin } from "../assets";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center" }} className="pt-5 pb-5 bg-primary">
      <div className="flex justify-center items-center">
        <a
          href="https://www.instagram.com/jnemecio/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex"
        >
          <img src={instagram} />
        </a>
        <a
          href="https://github.com/jner0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex"
        >
          <img src={github} />
        </a>
        <a
          href="https://linkedin.com/in/jnero"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex"
        >
          <img src={linkedin} />
        </a>
      </div>
      <p>© Nemecio Rodríguez 2023</p>
    </footer>
  );
};

export default Footer;
