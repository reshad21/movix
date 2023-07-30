import React from "react";

import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer"></div>
            <div className="videoPlayer">
                {/* <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span> */}
                {/* <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                    // playing={true}
                /> */}
                <div className="">
                    <iframe
                        src="https://d2jonispl0uhtm.cloudfront.net/public/i_fr?it=4085706&key=21988"
                        width="100%"
                        height="550"
                        id=""
                        className=""
                        display="block"
                        marginwidth="0"
                        marginheight="0"
                        align="middle"
                    />

                </div>
            </div>
        </div>
    );
};

export default VideoPopup;
