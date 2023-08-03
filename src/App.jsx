import "./App.scss";
import {
  Cta,
  HeaderFooter,
  Introduction,
  Skills,
  Work,
  Description,
} from "./components";

export default function App() {
  return (
    <>
      <header>
        <HeaderFooter />
      </header>
      <main>
        <Description />
        <Skills />
        <Introduction />
        <Work />
        <Cta />
      </main>
      <footer>
        <HeaderFooter />
      </footer>
    </>
  );
}
