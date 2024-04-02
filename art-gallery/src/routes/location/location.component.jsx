import MobileMap from "../../assets/mobile/image-map.png";
import LinkButton from "../../components/link-button/link-button.component";
import Footer from "../../components/footer/footer.component";

const Location = () => {
  return (
    <div>
      <LinkButton toLeft={true} label="Back to Home" to="/" />
      <img src={MobileMap} alt="" />
      <div>
        <h2>Our location</h2>
        <h3>99 King Street</h3>
        <address>
          <span>Newport</span>
          <span>RI 02840</span>
          <span>United States of America</span>
        </address>
        <p>
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </div>
      <Footer containerClasses={`bg-green-500`} />
    </div>
  );
};

export default Location;
