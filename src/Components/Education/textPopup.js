"use client";
import { useEffect, useState } from "react";

export default function TextPopup({ path }) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then(setText);
  }, [path]);

  return (
    <pre className="whitespace-pre-wrap p-4 bg-white text-black rounded-lg">
      {text}
    </pre>
  );
}
