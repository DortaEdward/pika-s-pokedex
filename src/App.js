import Sidebar from "./Components/Sidebar";
import data from "./data";

function App() {
  return (
    <div className="flex w-screen h-screen bg-gray-100">
      <Sidebar />
      <div className="fixed right-0 top-0 h-screen w-8/12 flex flex-col items-center">
        <img src={data[5].img} alt="Active" className="h-72 w-72 mt-[-1rem] mb-[-1rem]" />
        <div className="w-full h-full flex flex-col items-center gap-2">
          <p className="text-2xl text-gray-400"># {data[5].id}</p>
          <p className="text-5xl">{data[5].name}</p>
          <div className="flex gap-4">
            {data[5].types.map((type,i) => {
              return (
                <img
                  key={i}
                  src={`${type.toLowerCase()}Type.png`}
                  alt="Pokemon"
                  className="h-6"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
