import Tweet from "../components/Tweet"
import Header from "../components/Header"
import Separator from "../components/Separator"
import "./Timeline.css"

const tweets = [
  "Tweet 1",
  "Tweet 2",
  "Tweet 3", ]

function Timeline() {
  return (
    <main className="timeline">

    <Header title="Home"/>

    <form className="newTweetForm">
      <label htmlFor="" className="tweet">
        <img src="https://github.com/carolinafreire.png" alt="Carol Freire" />
        <textarea id="tweet" placeholder="What's happening?"></textarea>
      </label>
      <button type="submit">Tweet</button>
    </form>

    <Separator/>
    
  {tweets.map((tweet) => (
    <Tweet key={tweet} content={tweet}/>
  ))}

  </main>
)}

export default Timeline