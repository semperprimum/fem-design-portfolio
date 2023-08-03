import { ReactComponent as Logo } from "../assets/logo.svg";
import { Button } from "../components";

export function Header() {
  return (
    <>
      <header className="header">
        <Logo className="logo" />
        <Button>Free Consultation</Button>
      </header>
      <div className="header__content">
        <h1 className="header__heading | fs-800 text-900 fw-bold">
          Design solutions made easy
        </h1>
        <p className="header__body | fs-400 text-400 fw-regular">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
    </>
  );
}
