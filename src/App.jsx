import "./App.scss";
import {
  Cta,
  HeaderFooter,
  Introduction,
  Skills,
  Work,
  Description,
  Attribution,
} from "./components";

export default function App() {
  return (
    <div className="app">
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
        <Attribution />
      </footer>
    </div>
  );
}
