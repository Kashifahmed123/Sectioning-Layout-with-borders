export default function Home() {
  return (
    <div className="flex flex-col border-4 border-solid border-orange-500 h-56">
      <div className="flex border-2 border-solid align-middle my-2 border-y-green-400 h-24">
        <div className="flex border border-solid border-black my-2 h-20 w-1/3"></div>
        <div className="flex border border-solid border-black my-2 h-20 w-1/3"></div>
        <div className="flex border border-solid border-black my-2 h-20 w-1/3"></div>
      </div>
      <div className="flex border-2 border-solid border-y-fuchsia-800 h-24">
        <div className="flex flex-row border border-solid border-black my-2 h-20 w-1/2"></div>
        <div className="flex flex-row border border-solid border-black my-2 h-20 w-1/2"></div>
      </div>
    </div>
  );
}
