import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="read-the-docs">MEMORiA</p>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200">1</div>
        <div className="bg-gray-300">2</div>
        <div className="bg-gray-400">3</div>
      </div>
    </div>
  );
}

export default App;
