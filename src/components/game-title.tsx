import { BrainIcon } from 'lucide-react';

export function GameTitle() {
  return (
    <>
      <h1 className="mt-4 flex items-center justify-center gap-0.5 text-6xl font-extrabold text-gray-900 text-shadow-lg text-shadow-violet-400">
        MEM
        <BrainIcon
          size={'4rem'}
          strokeWidth={1}
          className="rounded-full border-3 border-gray-900 bg-gray-900 fill-pink-400 stroke-violet-800 p-0.5 shadow-md shadow-violet-400"
        />
        RiA
      </h1>

      <p className="mt-1 text-center font-bold">number matching memory game</p>
    </>
  );
}
