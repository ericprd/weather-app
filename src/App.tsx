import { TextInput } from "./components/organism/input/input"
import { WeatherBox } from "./components/organism/weather-box"
import { MiniBox } from "./components/organism/weather-box/mini-box"

function App() {

  return (
    <main className="bg-black relative p-2 min-h-screen" style={{ backgroundImage: 'url("https://picsum.photos/2160")', backgroundSize: 'cover' }}>
      <div className="justify-between mb-5 hidden sm:flex md:scale-100">
        <div></div>
        <TextInput placeholder="Search city" containerClassName="lg:max-w-lg" />
      </div>
      
      <div className="space-y-5">
        <WeatherBox />
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 overflow-y-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <MiniBox  key={i} className="col-span-1 w-full"/>
          ))}
        </div>
      </div>

      <div className="p-2 fixed bottom-0 left-0 sm:hidden w-full">
        <TextInput placeholder="Search city" />
      </div>
    </main>
  )
}

export default App
