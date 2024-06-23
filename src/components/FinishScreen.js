function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "👌";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <div>
        <p className="result">
          <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
          {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </p>
      </div>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
