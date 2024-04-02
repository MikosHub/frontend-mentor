import MobileHero from "../../assets/mobile/image-hero.jpg";
import LogoDark from "../../assets/logo-dark.svg";

import LinkButton from "../../components/link-button/link-button.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
  return (
    <div>
      <img src={MobileHero} alt="" />
      <img className="w-full p-4 pt-8" src={LogoDark} alt="gallery logo" />
      <p className="p-4 font-text">
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </p>
      <LinkButton toLeft={false} label="Our Location" to="/location" />
      <img src="" alt="" />
      <h2>Your day at the gallery</h2>
      <p>
        Wander through our distinct collections and find new insights about our
        artists. Dive into the details of their creative process.
      </p>
      <img src="" alt="" />
      <img src="" alt="" />
      <div>
        <h2>Come & be inspired</h2>
        <p>
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </div>
      <Footer containerClasses={`bg-black`} />
    </div>
  );
};

export default Home;
