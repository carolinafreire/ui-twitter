import React from "react"
import ReactDOM from "react-dom/client"
import "../global.css"
import twitterLogo from "./assets/logo-twitter.svg"
import {Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User} from "phosphor-react"
import Tweet from "./components/Tweet"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <div className="layout">
        <aside className="sidebar">
          <img className="logo" src={twitterLogo} alt="Logo Twitter" />
          <nav className="menu">
            <a className="active" href="">
              <House weight="fill"/>
              Home
              </a>
            <a href="">
              <Hash />
              Explore
              </a>
            <a href="">
              <Bell />
              Notifications
              </a>
            <a href="">
              <Envelope />
              Messages
            </a>
            <a href="">
              <BookmarkSimple />
              Bookmarks
            </a>
            <a href="">
              <FileText />
              Lists
            </a>
            <a href="">
              <User />
              Profile
            </a>
            <a href="">
              <DotsThreeCircle />
              More
            </a>
          </nav>
            <button className="newTweet" type="button">Tweet</button>
            </aside>
            <div className="content">
              <main className="timeline">
                <div className="timelineHeader">
                  Home 
                  <Sparkle/> 
                </div>
                <form className="newTweetForm">
                  <label htmlFor="" className="tweet">
                    <img src="https://github.com/carolinafreire.png" alt="Carol Freire" />
                    <textarea id="tweet" placeholder="What's happening?"></textarea>
                  </label>
                  <button type="submit">Tweet</button>
                </form>
                <div className="separator"/>
                <Tweet/>
              </main>
            </div>
      </div>
  </React.StrictMode>,
)
