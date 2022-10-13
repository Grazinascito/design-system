import { useState } from "react";
import "./style/global.css";
export function App() {
  const [count, setCount] = useState(0);

  return <h1 className="text-2xl bg-cyan-500">hello batata</h1>;
}
