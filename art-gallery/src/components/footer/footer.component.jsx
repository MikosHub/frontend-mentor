import LogoLight from "../../assets/logo-light.svg";
import Facebook from "../../assets/icon-facebook.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Instagram from "../../assets/icon-instagram.svg";
import LinkIcon from "../../components/link-icon/link-icon.component";

const Footer = ({ containerClasses }) => {
  return (
    <footer className={containerClasses}>
      <img src={LogoLight} alt="gallery logo" />
      <p>
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>
      <div>
        <LinkIcon href="" icon={Facebook} />
        <LinkIcon href="" icon={Instagram} />
        <LinkIcon href="" icon={Twitter} />
      </div>
    </footer>
  );
};

export default Footer;
