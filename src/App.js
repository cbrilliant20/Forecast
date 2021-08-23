import logo from "./logo.svg"
import "./App.css"
import Overview from "./Components/Overview"
import Forecast from "./Components/Forecast"
import Highlights from "./Components/Highlights"

function App() {
  return (
    <div
      className="App"
      class="bg-lightGray text-darkGray p-16 h-screen w-screen relative font-poppins "
    >
      <div class=" bg-white h-full grid grid-rows-4 grid-cols-3 rounded-3xl ">
        <Overview class="row-span-3" />
        <Forecast class="col-span-3 ..." />
        <Highlights class="row-span-2 col-span-2 ..." />
      </div>
    </div>
  )
}

export default App
