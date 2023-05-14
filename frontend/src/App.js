import { Footer, Header } from "./component";
import Router from "./routes";
import './global/style.css'
function App() {
  return (
    <div className="app">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
