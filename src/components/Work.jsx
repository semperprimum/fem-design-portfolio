import { Carousel } from "./Carousel";
import slide4 from "../assets/image-slide-1.jpg";
import slide5 from "../assets/image-slide-2.jpg";
import slide1 from "../assets/image-slide-3.jpg";
import slide2 from "../assets/image-slide-4.jpg";
import slide3 from "../assets/image-slide-5.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5];

export function Work() {
  return (
    <section className="work">
      <h3 className="work__heading | fs-600 fw-bold text-900">My work</h3>
      <Carousel slides={slides} />
    </section>
  );
}
