import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswer }) {

    const skippedAnswer = userAnswer.filter(answer => answer === null)
    const correctAnswer = userAnswer.filter((answer, index) => answer === QUESTIONS[index].answers[0])

    const skippedAnswerShare = Math.round((skippedAnswer.length / userAnswer.length) * 100)
    const correctAnswerShare = Math.round((correctAnswer.length / userAnswer.length) * 100)
    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">answer correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">answer wrongly</span>
        </p>
      </div>
      {userAnswer.map((answer, index) => {
        let cssClass = "user-answer";

        if (answer === null) {
          cssClass += " skipped";
        } else if (answer === QUESTIONS[index].answers[0]) {
          cssClass += " correct";
        } else {
          cssClass += " wrong";
        }

        return (
          <ol key={index}>
            <li>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          </ol>
        );
      })}
    </div>
  );
}
