import { Card } from "../components";

export function Skills() {
  const cards = [
    {
      text: "Graphic Design",
      class: "bg-purple",
      patternFileName: "pattern-graphic-design.svg",
    },
    {
      text: "UI/UX",
      class: "bg-yellow",
      patternFileName: "pattern-ui-ux.svg",
    },
    {
      text: "Apps",
      class: "bg-pink",
      patternFileName: "pattern-apps.svg",
    },
    {
      text: "Illustrations",
      class: "bg-red",
      patternFileName: "pattern-illustrations.svg",
    },
    {
      text: "Photography",
      class: "bg-cyan",
      patternFileName: "pattern-photography.svg",
    },
    {
      text: "Motion Graphics",
      class: "bg-indigo",
      patternFileName: "pattern-motion-graphics.svg",
    },
  ];
  return (
    <section className="skills">
      {cards.map((card) => (
        <Card
          key={card.text}
          icon={`/assets/images/${card.patternFileName}`}
          text={card.text}
          className={`text-100 fs-500 fw-bold bg-purple ${card.class}`}
        />
      ))}
    </section>
  );
}
