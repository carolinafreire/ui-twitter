import React from "react"
import ReactDOM from "react-dom/client"
import "../global.css"
import Tweet from "./components/Tweet"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Separator from "./components/Separator"

const tweets = [
  "Tweet 1",
  "Tweet 2",
  "Tweet 3", ]

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <div className="layout">

        <Sidebar/>

            <div className="content">
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
            </div>
      </div>
  </React.StrictMode>,
)
