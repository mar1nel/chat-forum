import React from "react";
import "./panel.scss";

const Panel = () => {
    return (
        <div className="card">
            <div className="likeCounter">
                <span><a className="plus" href="#">+</a></span>
                <span className="likes">20</span>
                <span><a className="minus" href="#">-</a></span>
            </div>
            <div className="postInfo">
                <div className="postingDetails">
                    <div className="author">
                        <img className="authorPic" src="https://resizing.flixster.com/yLX51ssr5B7frEgwZCeV7N68gJw=/300x300/v2/https://flxt.tmsimg.com/assets/p3099992_e_h9_ab.jpg" alt=""/>
                            <span><a className="nickname" href="#">disperpidarska</a></span>
                    </div>
                    <span className="postedTime">12 min ago</span>
                    <a className="reply" href="#"> <svg className="iconReply" width="16px" height="16px" fill="#696699" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"/></svg>Reply</a>
                </div>
                <div className="postContent">
                    How to reply there? Nvm the JS logic isn't coded yet :') Also all my homies use React, we hate Angular.. the color is vintage, the fit is flawless - perfection!
                </div>
            </div>
        </div>
    );
}

export default Panel;
