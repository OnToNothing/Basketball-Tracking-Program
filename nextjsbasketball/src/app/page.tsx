import Image from "next/image";
import { TableSet } from "@/components/table-set";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1 className="text-6xl font-bold">BasketBall Free Throw Tracker</h1>
      <p className="mt-3 text-2xl">
        {" "}
        <code className="p-2 font-mono text-lg bg-gray-100 rounded-md dark:bg-zinc-800/30">
          Practice Date :05/01/2024
        </code>
        
      </p>
      <TableSet />
    </div>
  );

  
}


