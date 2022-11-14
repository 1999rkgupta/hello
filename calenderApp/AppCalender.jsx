import { useState } from "react";
import Calendar from "react-calendar";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>React Calendar</h1>
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>
      <div>Selected date: {date.toDateString()}</div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import Calendar from "react-calendar";

// function App() {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className="app">
//       <h1>React Calendar with Range</h1>
//       <div>
//         <Calendar onChange={setDate} value={date} selectRange={true} />
//       </div>
//       {date.length > 0 ? (
//         <p>
//           <span>Start:</span> {date[0].toDateString()}
//           &nbsp; to &nbsp;
//           <span>End:</span> {date[1].toDateString()}
//         </p>
//       ) : (
//         <p>
//           <span>Default selected date:</span> {date.toDateString()}
//         </p>
//       )}
//     </div>
//   );
// }

// export default App;
