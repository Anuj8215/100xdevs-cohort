import React, { useState } from "react";

function Paragraph() {
  const [wordLength, setWordLength] = useState(50);
  const [paragraph, setParagraph] = useState("");

  // A pool of words to randomly pick from
  const words = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "enim",
    "minim",
    "veniam",
    "quis",
    "nostrud",
    "exercitation",
    "ullamco",
    "laboris",
    "nisi",
    "ut",
    "aliquip",
    "ex",
    "ea",
    "commodo",
    "consequat",
    "duis",
    "aute",
    "irure",
    "in",
    "reprehenderit",
    "voluptate",
    "velit",
    "esse",
    "cillum",
    "dolore",
    "eu",
    "fugiat",
    "nulla",
    "pariatur",
  ];

  const handleGenerate = (e) => {
    e.preventDefault();
    let generated = [];
    for (let i = 0; i < wordLength; i++) {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      generated.push(randomWord);
    }
    // Capitalize first word and add period at end
    let result = generated.join(" ");
    result = result.charAt(0).toUpperCase() + result.slice(1) + ".";
    setParagraph(result);
  };

  return (
    <div>
      <form onSubmit={handleGenerate}>
        <label>
          Length of paragraph (number of words):
          <input
            type="number"
            min="5"
            max="500"
            value={wordLength}
            onChange={(e) => setWordLength(Number(e.target.value))}
          />
        </label>
        <button type="submit">Generate</button>
      </form>
      <div style={{ marginTop: "1em" }}>{paragraph && <p>{paragraph}</p>}</div>
    </div>
  );
}

export default Paragraph;
