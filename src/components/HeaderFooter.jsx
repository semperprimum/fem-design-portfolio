import { ReactComponent as Logo } from "../assets/logo.svg";
import { Button } from ".";

export function HeaderFooter() {
  return (
    <section className="header-footer">
      <Logo className="logo" />
      <Button>Free Consultation</Button>
    </section>
  );
}
