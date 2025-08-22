import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header>
        <h1>StockViewer</h1>
      </header>

      <div>
        <h2>Nyckeltal</h2>
        <div className="flex">
          <div className="flex-auto ">P/E</div>
          <div className="flex-auto ">P/S</div>
          <div className="flex-auto ">Rule of 40</div>
          <div className="flex-auto ">Rule of 40</div>

      </div>
      </div>
      
    </div>
  );
}
