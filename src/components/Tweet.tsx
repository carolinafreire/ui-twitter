import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import "./Tweet.css"

function Tweet() {
  return (
    <a href="#" className="tweet">
    <img src="https://github.com/carolinafreire.png" alt="Carol Freire" />
    <div className="tweetContent">
      <div className="tweetContentHeader">
        <strong>Carol Freire</strong>
        <span>@carolinafreire</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="tweetContentFooter">
          <button type="button">
            <ChatCircle/>
            20
          </button>
          <button type="button">
            <ArrowsClockwise/>
            20
          </button>
          <button type="button">
            <Heart/>
            20
          </button>
        </div>
    </div>
    </a>
  )
}

export default Tweet