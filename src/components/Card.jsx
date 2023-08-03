export function Card({ text, icon, className }) {
  return (
    <div
      className={`card | ${className}`}
      style={{ backgroundImage: `url(${icon})` }}
    >
      <span>{text}</span>
    </div>
  );
}
