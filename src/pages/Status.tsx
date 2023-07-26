import Header from "../components/Header"
import Separator from "../components/Separator"
import Tweet from "../components/Tweet"
import "./Status.css"

const answers = [
  "Answer 1",
  "Answer 2",
  "Answer 3",
]

function Status() {
  return (
    <main className="status">

    <Header title="Tweet"/>

    <Tweet content="Tweet 1"/>

    <Separator/>

    <form className="answerTweetForm">
      <label htmlFor="" className="tweet">
        <img src="https://github.com/carolinafreire.png" alt="Carol Freire" />
        <textarea id="tweet" placeholder="Tweet your answer"></textarea>
      </label>
      <button type="submit">Answer</button>
    </form>


    
  {answers.map((answer) => (
    <Tweet key={answer} content={answer}/>
  ))}

  </main>
  )
}

export default Status
