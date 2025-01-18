const videos = [
    {
        // 1) Marques Brownlee CONTAINER:
        link: "https://www.youtube.com/watch?v=n2RNcPRtAiY",
        thumbnail: "/youtube-project/images/thumbnails/videos/thumbnail1.webp",
        videoTime: "14:20",
        channelLink: "https://youtube.com/c/mkbhd",
        channelPicture: "/youtube-project/ChannelPictures/channel-1.jpeg",
        youtuber: "Marques Brownlee",
        subscribers: "15M subscribers",
        title: "Talking Tech and AI with Google CEO Sundar Pichai!",
        stats: "3.4M views &#183; 6 months ago"
    },{
        // 2) Programming with Mosh CONTAINER:
        link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&list=PL2PREgmkP8_kjnM4RLsWIel2NJkhW-znN",
        thumbnail: "/youtube-project/images/thumbnails/videos/PythonMosh.png",
        videoTime: "6:14:07",
        channelLink: "https://www.youtube.com/@programmingwithmosh",
        channelPicture: "/youtube-project/ChannelPictures/ProgrammingwithMosh.jpg",
        youtuber: "Programming with Mosh",
        subscribers: "3.97M subscribers",
        title: "Python Tutorial - Python Full Course for Beginners",
        stats: "3.9M views &#183; 5 years ago"
    },{
        // 3) Markiplier CONTAINER:
        link: "https://www.youtube.com/watch?v=3PGx1VWM4tA&list=LL&index=26&t=1507s",
        thumbnail: "/youtube-project/images/thumbnails/videos/unoFlip.jpg",
        videoTime: "29:37",
        channelLink: "https://www.youtube.com/@markiplier",
        channelPicture: "/youtube-project/ChannelPictures/Markiplier.jpg",
        youtuber: "Markiplier",
        subscribers: "37.1M subscribers",
        title: "A COMPLETELY NEW WAY TO PLAY!! | UNO Flip!",
        stats: "7M views &#183; 4 years ago"
    },{
        // 4) SuperSimpleDev (HTML/CSS) CONTAINER:
        link: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=22051s",
        thumbnail: "/youtube-project/images/thumbnails/videos/HTMLCSS.jpg",
        videoTime: "6:31:24",
        channelLink: "https://www.youtube.com/@SuperSimpleDev",
        channelPicture: "/youtube-project/ChannelPictures/SuperDev.jpg",
        youtuber: "SuperSimpleDev",
        subscribers: "455K subscribers",
        title: "HTML & CSS Full Course - Beginner to Pro",
        stats: "10M views &#183; 2 years ago"
    },{
        // 5) Mad Hat CONTAINER:
        link: "https://www.youtube.com/watch?v=YeWYlp9JP6g&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=9",
        thumbnail: "/youtube-project/images/thumbnails/videos/MadHat.jpg",
        videoTime: "21:59",
        channelLink: "https://www.youtube.com/@madhatistaken",
        channelPicture: "/youtube-project/ChannelPictures/madHat.jpg",
        youtuber: "Mad Hat",
        subscribers: "82.8K subscribers",
        title: "Cybersecurity Certificate Tier List (2023)",
        stats: "613K views &#183; 1 year ago"
    },{
        // 6) C++ Snake Game CONTAINER:
        link: "https://www.youtube.com/watch?v=E_-lMZDi7Uw&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=4",
        thumbnail: "/youtube-project/images/thumbnails/videos/SnakeGame.jpg",
        videoTime: "11:15",
        channelLink: "https://www.youtube.com/@NVitanovic",
        channelPicture: "/youtube-project/ChannelPictures/NVitanovic.jpg",
        youtuber: "NVitanovic",
        subscribers: "48.5K subscribers",
        title: "C++ Tutorial 18 - Simple Snake Game (Part 1)",
        stats: "2.2M views &#183; 9 years ago"
    },{
        // 7) Tech Projects CONTAINER:
        link: "https://www.youtube.com/watch?v=LxkXT9WD7yk&list=LL&index=160",
        thumbnail: "/youtube-project/images/thumbnails/videos/github.jpg",
        videoTime: "4:09",
        channelLink: "https://www.youtube.com/@TechProjects",
        channelPicture: "/youtube-project/ChannelPictures/TechProjects.jpg",
        youtuber: "Tech Projects",
        subscribers: "27.5K subscribers",
        title: "How to push changes from visual studio code to GitHub | Tech Projects",
        stats: "176K views &#183; 4 years ago"
    },{
        // 8) Stefanovic CONTAINER:
        link: "https://www.youtube.com/watch?v=X7eAwyMvm2c&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=22",
        thumbnail: "/youtube-project/images/thumbnails/videos/DACourses.jpg",
        videoTime: "8:40",
        channelLink: "https://www.youtube.com/@Stefanovic92",
        channelPicture: "/youtube-project/ChannelPictures/StefaNovic.jpg",
        youtuber: "Stefanovic",
        subscribers: "309K subscribers",
        title: "I Tried 50 Data Analyst Courses. Here Are Top 5",
        stats: "147K views &#183; 1 month ago"
    },{
        // 9) SuperSimpleDev (JavaScript) CONTAINER:
        link: "https://www.youtube.com/watch?v=EerdGm-ehJQ&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=7",
        thumbnail: "/youtube-project/images/thumbnails/videos/JavaScript1.jpg",
        videoTime: "22:15:57",
        channelLink: "https://www.youtube.com/@SuperSimpleDev",
        channelPicture: "/youtube-project/ChannelPictures/SuperDev.jpg",
        youtuber: "SuperSimpleDev",
        subscribers: "455K subscribers",
        title: "JavaScript Tutorial Full Course - Beginner to Pro (2024)",
        stats: "869K views &#183; 2 months ago"
    },{
        // 10) Garrett Codes CONTAINER:
        link: "https://www.youtube.com/watch?v=wufc6w8fqvY&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=13",
        thumbnail: "/youtube-project/images/thumbnails/videos/Garrett Codes.jpg",
        videoTime: "4:41",
        channelLink: "https://www.youtube.com/@GarrettCodes",
        channelPicture: "/youtube-project/ChannelPictures/Garrett Codes.jpg",
        youtuber: "Garrett Codes",
        subscribers: "6.83K subscribers",
        title: "3 Months of Learning Leetcode",
        stats: "100K views &#183; 1 year ago"
    },{
        // 11) Tim Kim CONTAINER:
        link: "https://www.youtube.com/watch?v=WR1ydijTx5E&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=14",
        thumbnail: "/youtube-project/images/thumbnails/videos/fourMonths.jpg",
        videoTime: "4:41",
        channelLink: "https://www.youtube.com/@TimKimMe",
        channelPicture: "/youtube-project/ChannelPictures/TimKim.jpg",
        youtuber: "Tim Kim",
        subscribers: "158K subscribers",
        title: "How I Learned to Code in 4 Months & Got a Job! (No CS Degree, No Bootcamp)",
        stats: "5.2M views &#183; 1 year ago"
    },{
        // 12) How to Become a Developer CONTAINER:
        link: "https://www.youtube.com/watch?v=ldwlOzRvYOU&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=21",
        thumbnail: "/youtube-project/images/thumbnails/videos/Responsive.webp",
        videoTime: "2:12:20",
        channelLink: "https://www.youtube.com/@howtobecomeadeveloper",
        channelPicture: "/youtube-project/ChannelPictures/how-to.jpg",
        youtuber: "How to Become a Developer",
        subscribers: "17.6K subscribers",
        title: "Responsive Portfolio Website From Scratch",
        stats: "803K views &#183; 1 year ago"
    }
];