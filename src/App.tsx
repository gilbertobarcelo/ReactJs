import "./styles/global.css";
import { Habit } from "./components/Habits"
function App() {
 
  return (
  <div>
 <Habit completed={1}/>
 <Habit completed={1}/>
 <Habit completed={2}/>
 <Habit completed={3}/>
 <Habit completed={4}/>
 <Habit completed={5}/>
 <Habit completed={6}/>
 <Habit completed={7}/>
 <Habit completed={7}/>
 </div>
  )
}

export default App
