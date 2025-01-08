// import {videos} from '../scripts/videos.js';

let bodyHTML = `
<!-- Communication Ad Division: -->
<div class = "video-preview">
  <!-- Thumbnail Picture: -->
  <div class = "thumbnail-row">
      <img class = "thumbnail" src = "/youtube-project/Thumbnails/communication-ad.png">
    </a>
    <div class = "video-time">14:20</div>
  </div>
  <!-- Video Information: -->
  <div class = "video-info-grid">
    <!-- Channel Picture: -->
    <div class = "channel-picture">
      <div class="profile-picture-container">
          <img class="profile-picture" src="/youtube-project/ChannelPictures/ad-logo.png">
        </a>
      </div>
    </div>
    <!-- Video Info: -->
    <div class = "video-info"> 
        <p class = "video-title">Connect and Cooperate with your team, all online.</p>
      </a>
      <p class = "video-stats"><span class="sponsored">Sponsored &#183;</span> Fake Ads Inc.</p>  
    </div>
    <div class = "video-options">
      <button class = "three-dots-container">
        <img class = "three-dots-img" src = "/youtube-project/Icons/three-dots-vertical.svg">
      </button>
    </div></div></div>
`

videos.forEach((video) => {
bodyHTML += `
<div class = "video-preview">
  <div class = "thumbnail-row">
    <a href = "${video.link}" target = "_blank" class = "video-title-link">
      <img class = "thumbnail" src = "${video.thumbnail}">
    </a>
    <div class = "video-time">${video.videoTime}</div>
  </div>
  <div class = "video-info-grid">
    <div class = "channel-picture">
        <div class="profile-picture-container">
          <a href="${video.channelLink}" target="_blank">
            <img class="profile-picture" src = "${video.channelPicture}">
          </a>
            <div class="channel-tooltip">
              <img class="channel-tooltip-picture" src="${video.channelPicture}">
              <div>
                <div class="channel-tooltip-name">${video.youtuber}</div>
                <div class="channel-tooltip-stats">${video.subscribers}</div>
              </div>
            </div>
        </div>
    </div>
    <div class = "video-info"> 
      <a href = "${video.link}" target = "_blank" class = "video-title-link">
        <p class = "video-title">${video.title}</p>
      </a>
      <p class = "video-author">${video.youtuber}</p>
      <p class = "video-stats">${video.stats}</p>  
    </div>
      <div class = "video-options">
        <button class = "three-dots-container">
          <img class = "three-dots-img" src = "/youtube-project/Icons/three-dots-vertical.svg">
        </button>
      </div>
  </div>
</div>
`;
});

document.querySelector('.js-videos-body').innerHTML = bodyHTML;