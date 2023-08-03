import "./App.scss";
import { Header, Introduction, Skills, Work } from "./components";

export default function App() {
  return (
    <main className="app">
      <Header />
      <Skills />
      <Introduction />
      <Work />
    </main>
  );
}
