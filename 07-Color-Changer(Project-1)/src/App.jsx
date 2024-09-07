import { useState } from "react";
function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
            <button 
              onClick={()=>setcolor("red")} //onClick expect to pass a function
              className= "outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red", border: "1px solid black" }} 
            >
              Red
            </button>

            <button
            onClick={()=>setcolor("green")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green", border: "1px solid black" }}
            >
              Green
            </button>

            <button
               onClick={()=>setcolor("blue")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue", border: "1px solid black" }}
            >
              Blue
            </button>

            <button
            onClick={()=>setcolor("olive")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive", border: "1px solid black" }}
            >
              Olive
            </button>

            <button
             onClick={()=>setcolor("gray")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Gray", border: "1px solid black" }}
            >
              Gray
            </button>

            <button
              onClick={()=>setcolor("yellow")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow", border: "1px solid black" }}
            >
              Yellow
            </button>

            <button
                onClick={()=>setcolor("pink")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "pink", border: "1px solid black" }}
            >
              Pink
            </button>

            <button
              onClick={()=>setcolor("purple")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple", border: "1px solid black" }}
            >
              Purple
            </button>

            <button
              onClick={()=>setcolor("lavender")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "lavender", border: "1px solid black" }}
            >
              Lavender
            </button>

            <button
              onClick={()=>setcolor("white")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white", border: "1px solid black" }}
            >
              White
            </button>

            <button
              onClick={()=>setcolor("black")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Black", border: "1px solid black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
