import { Button } from "../components";

export function Cta() {
  return (
    <section className="cta">
      <div className="cta__content">
        <h3 className="cta__heading | fs-700 text-200 ">Book a call with me</h3>
        <p className="cta__body | fs-400 text-200 fw-regular">
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
      </div>
      <Button className="cta__button" primary="true">
        Free Consultation
      </Button>
    </section>
  );
}
