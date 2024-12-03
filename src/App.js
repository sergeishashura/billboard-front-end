import Router from "./navigation/Router";
import ThemeProvider from "../src/theme";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
