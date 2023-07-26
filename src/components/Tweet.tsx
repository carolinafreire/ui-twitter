import { Link } from "react-router-dom"
import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import "./Tweet.css"

interface TweetProps {
  content: string
}

function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
    <img src="https://github.com/carolinafreire.png" alt="Carol Freire" />
    <div className="tweetContent">
      <div className="tweetContentHeader">
        <strong>Carol Freire</strong>
        <span>@carolinafreire</span>
      </div>
      <p>
        {props.content}
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
    </Link>
  )
}

export default Tweet