/* React Returns , re - renderimg, Key, Wrapper Components , useEffect, UseMemo, useCallback, useRef */

// import { Fragment } from "react";
// import React, { useState } from "react";

// function App() {
//   const [title, setTitle] = useState("Anuj Pawar");

//   function updateTitle() {
//     setTitle("Anuj Pawar ",  + Math.random());
//   }
//   return (
//     <Fragment>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title} />
//       <Header title="Aarya " />
//     </Fragment>
//   );

//   function Header({ title }) {
//     return (
//       <div>
//         <h1>{title}</h1>
//       </div>
//     );
//   }
// }
// export default App;

//-------------- Pushing Down The State ------------------//
import React from "react";
import { useState } from "react";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="Anuj Pawar"></Header>
      <Header title="Aarya"></Header>
    </div>
  );

  function HeaderWithButton() {
    const [title, setTitle] = useState("My name is Anuj");

    function updateTitle() {
      setTitle("My name is " + Math.random());
    }
    return (
      <div>
        <button onClick={updateTitle}>Update the title</button>
        <Header title={title}></Header>
      </div>
    );
  }
}
const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
