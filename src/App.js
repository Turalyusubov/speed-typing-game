import useWordGame from "./hooks/wordGame"

function App() {
  const {
    timeRemaining,
    isTimeRunning,
    handleChange,
    startClock,
    textBoxRef,
    wordCount,
    text
  } = useWordGame(5)

  return (
    <div className="pos-relative">
      <br />
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startClock} disabled={isTimeRunning}>
        {wordCount > 0 ? "Play again" : "Start"}
      </button>

      {wordCount > 0 && <h1>Word count: {wordCount}</h1>}
      <footer>Made by <a href="https://github.com/Turalyusubov">Tural Yusubov</a></footer>
    </div>
  )
}

export default App