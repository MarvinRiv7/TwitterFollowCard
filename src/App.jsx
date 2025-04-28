import { useState } from "react";
import "./App.css";
import { TwitterFollowcard } from "./TwitterFollowCard";

export function App() {
  // const formatUserName = (userName) => `@${userName}`;
 const [name, setName] = useState('Midudev')
  return (
    <section className="App">
      <TwitterFollowcard  userName={name}>
        Marvin Johalmo Rivas
      </TwitterFollowcard>
      <TwitterFollowcard  userName="pheralb">
      Pablo Hermandez
      </TwitterFollowcard>
      <button onClick={() => setName('Juan Pablo')}>Cambio de nombre</button>
    </section>
  );
}
