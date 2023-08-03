import { Card } from "../components";

export function Skills() {
  return (
    <section className="skills">
      <Card
        icon="/assets/images/pattern-graphic-design.svg"
        text="Graphic Design"
        className="text-100 fs-500 fw-bold bg-purple"
      />
      <Card
        icon="/assets/images/pattern-ui-ux.svg"
        text="UI/UX"
        className="text-100 fs-500 fw-bold bg-yellow"
      />
      <Card
        icon="/assets/images/pattern-apps.svg"
        text="Apps"
        className="text-100 fs-500 fw-bold bg-pink"
      />
      <Card
        icon="/assets/images/pattern-illustrations.svg"
        text="Illustrations"
        className="text-100 fs-500 fw-bold bg-red"
      />
      <Card
        icon="/assets/images/pattern-photography.svg"
        text="Photography"
        className="text-100 fs-500 fw-bold bg-cyan"
      />
      <Card
        icon="/assets/images/pattern-motion-graphics.svg"
        text="Motion Graphics"
        className="text-100 fs-500 fw-bold bg-indigo"
      />
    </section>
  );
}
