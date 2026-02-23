import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then((r) => r.json())
      .then((data) => setMsg(`Backend status: ${data.status}`))
      .catch(() => setMsg("Backend status: error"));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Planora</h1>
      <p>{msg}</p>
    </div>
  );
}
