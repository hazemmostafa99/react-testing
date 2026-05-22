import "./App.css";
import { AppProviders } from "./providers/AppProviders";
import { MuiMode } from "./components/MUI/MuiMode";

function App() {
  return (
    <AppProviders>
      <MuiMode />
    </AppProviders>
  );
}

export default App;
