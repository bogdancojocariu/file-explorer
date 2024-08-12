import "./App.scss";
import { Files } from "./Files/Files";
import { File } from "./Files/types";
import mockFiles from "./api/db.json";

function App() {
  const files = mockFiles as File[];

  return <Files files={files} />;
}

export default App;
