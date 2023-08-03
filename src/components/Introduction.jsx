import imageAmy from "../assets/image-amy.webp";
import { Button } from "./Button.styled";

export function Introduction() {
  return (
    <section className="introduction">
      <img className="introduction__image" src={imageAmy} alt="Amy" />
      <div className="introduction__content">
        <h2 className="introduction__heading | fs-700 text-900 fw-bold">
          I'm Amy, and I'd love to work on your next project
        </h2>
        <p className="introduction__body | fs-400 text-400 fw-regular">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button className="introduction__button" primary="true">
          Free Consultation
        </Button>
      </div>
    </section>
  );
}
