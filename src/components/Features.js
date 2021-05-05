import React, { useState } from "react";

import { RiImageEditFill } from "react-icons/ri";
import { FaMagic, FaCloudDownloadAlt } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { BsChatDotsFill } from "react-icons/bs";
import { AiFillVideoCamera, AiFillStar } from "react-icons/ai";
import { MdMovieFilter } from "react-icons/md";

export default function Features() {
  const [activeTab, setActiveTab] = useState(1);

  const onTabChange = (tabId) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
    }
  };

  return (
    <section className="feature__wrapper">
      <div className="section__heading">
        <h1>Best Features</h1>
        <p>Express yourself in new ways with the latest Locolaco features.</p>
        <p>
          Our features help you express yourself and connect with the people you
          love.
        </p>
      </div>

      <div className="tabs">
        <div className="tabs__nav">
          <div
            className={activeTab === 1 ? "tab one" : "tab"}
            onClick={() => onTabChange(1)}
          >
            <RiImageEditFill />
          </div>
          <div
            className={activeTab === 2 ? "tab two" : "tab"}
            onClick={() => onTabChange(2)}
          >
            <MdMovieFilter />
          </div>
          <div
            className={activeTab === 3 ? "tab three" : "tab"}
            onClick={() => onTabChange(3)}
          >
            <BsPlusCircleFill />
          </div>
          <div
            className={activeTab === 4 ? "tab four" : "tab"}
            onClick={() => onTabChange(4)}
          >
            <BsChatDotsFill />
          </div>
          <div
            className={activeTab === 5 ? "tab five" : "tab"}
            onClick={() => onTabChange(5)}
          >
            <AiFillVideoCamera />
          </div>
          <div
            className={activeTab === 6 ? "tab six" : "tab"}
            onClick={() => onTabChange(6)}
          >
            <FaCloudDownloadAlt />
          </div>
          <div
            className={activeTab === 7 ? "tab seven" : "tab"}
            onClick={() => onTabChange(7)}
          >
            <FaMagic />
          </div>
          <div
            className={activeTab === 8 ? "tab eight" : "tab"}
            onClick={() => onTabChange(8)}
          >
            <AiFillStar />
          </div>
        </div>
        <div className="tabs__pane">
          {activeTab === 1 ? (
            <div className="pane">
              <div className="pane__img">
                <img src={require("../assets/img/1.png")} alt="" />
                <div className="pane__img__bg one"></div>
              </div>
              <div className="pane__text">
                <h1>Edit &amp; Share Photos</h1>
                <p>
                  Share your quality photos to get more interect with fans,
                  locolaco allow it's users edit &amp; share photos with
                  advanced editing tools. A simple fun creative way to Create
                  discover photos from friends you already love, or new accounts
                  you might like also you can added captions each of your
                  photos.
                </p>
              </div>
            </div>
          ) : activeTab === 2 ? (
            <div className="pane">
              <div className="pane__img">
                <img src={require("../assets/img/2.png")} alt="" />
                <div className="pane__img__bg two"></div>
              </div>
              <div className="pane__text">
                <h1>Short Videos</h1>
                <p>
                  Discover and create own attractive, fun, entertaining &amp;
                  knowledgeable original content with locolaco advance editing
                  tools from a smart phone,So get inspired, unlock creativity
                  and become a star platform that will help you nurture your
                  talent in creating videos.
                </p>
              </div>
            </div>
          ) : activeTab === 3 ? (
            <div className="pane">
              <div className="pane__img">
                <img src={require("../assets/img/3.jpeg")} alt="" />
                <div className="pane__img__bg three"></div>
              </div>
              <div className="pane__text">
                <h1>Share Stories</h1>
                <p>
                  Post moments from your everyday life in your Stories. These
                  are fun, casual, and only last 24 hours.
                </p>
              </div>
            </div>
          ) : activeTab === 4 ? (
            <div className="pane">
              <div className="pane__img">
                <img src={require("../assets/img/4.png")} alt="" />
                <div className="pane__img__bg four"></div>
              </div>
              <div className="pane__text">
                <h1>Chat</h1>
                <p>
                  Start a Conversation with Messenger, Send photos, videos, and
                  messages privately to friends.
                </p>
              </div>
            </div>
          ) : activeTab === 5 ? (
            <div className="pane">
              <div className="pane__img">
                <img src={require("../assets/img/5.png")} alt="" />
                <div className="pane__img__bg five"></div>
              </div>
              <div className="pane__text">
                <h1>Video Call</h1>
                <p>
                  Locolaco allow it's user to connect and communicate with
                  friends through locolaco video calling feature to call your
                  friends family &amp; others &amp; chat in real time.
                </p>
              </div>
            </div>
          ) : activeTab === 6 ? (
            <div className="pane">
              <div className="pane__img">
                <img src={require("../assets/img/6.png")} alt="" />
                <div className="pane__img__bg six"></div>
              </div>
              <div className="pane__text">
                <h1>Share and Download Videos</h1>
                <p>
                  Share videos from locolaco app directly onto social media or
                  download them in your phone.
                </p>
              </div>
            </div>
          ) : activeTab === 7 ? (
            <div className="pane">
              <div className="pane__img">
                <img src={require("../assets/img/7.png")} alt="" />
                <div className="pane__img__bg seven"></div>
              </div>
              <div className="pane__text">
                <h1>Amazing Effects and Filters</h1>
                <p>
                  Record your own video and apply unique effects &amp; filters.
                  Add music that you'll love and add more spark to your awesome
                  videos. Get started
                </p>
              </div>
            </div>
          ) : activeTab === 8 ? (
            <div className="pane">
              <div className="pane__img">
                <img src={require("../assets/img/8.png")} alt="" />
                <div className="pane__img__bg eight"></div>
              </div>
              <div className="pane__text">
                <h1>Discover More</h1>
                <p>
                  Find content, Trending Videos photos, accounts you might like,
                  from accounts you don't yet follow. Use the trending hashtags,
                  take part in various hashtag contests and get a chance to
                  collab with the biggest digital creators with the support of
                  Locolaco. Check out the app’s discovery tab to stay updated!
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
