import "./App.scss";
import { Button } from "./DesignSystem/Button/Button";

function App() {
  return (
    <div>
      Hello\
      <Button onClick={() => console.log("clicked")}>Hellzo</Button>
    </div>
  );
}

export default App;
