import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>MEMORiA</h1>
      <p className="mb-4">Test your memory by matching the pairs of numbers.</p>

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <div className="mx-8 my-12 flex justify-center gap-4 p-8 align-middle">
        <div className="bg-amber-300 p-8">A</div>
        <div className="bg-amber-600 p-8">B</div>
        <div className="bg-amber-900 p-8">C</div>
        <div className="bg-avocado-500 p-8">3</div>
        <div className="bg-ggg p-8">4</div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200">1</div>
        <div className="bg-gray-300">2</div>
      </div>

      <button className="btn-primary">button</button>

      <input className="gu-input" />
    </div>
  );
}

export default App;
