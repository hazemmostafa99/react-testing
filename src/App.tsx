import "./App.css";
import { Skills } from "./components/Skills/Skills";

function App() {
  const skills = ["HTML", "CSS", "JS"];

  return (
    <>
      <Skills skills={skills} />
    </>
  );
}

export default App;
