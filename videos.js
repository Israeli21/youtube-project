const videos = [
    {
        // 1) Marques Brownlee CONTAINER:
        link: "https://www.youtube.com/watch?v=n2RNcPRtAiY",
        thumbnail: "/youtube-project/Thumbnails/thumbnail1.webp",
        videoTime: "14:20",
        channelLink: "https://youtube.com/c/mkbhd",
        channelPicture: "/youtube-project/ChannelPictures/channel-1.jpeg",
        channelName: "Marques Brownlee",
        subscribers: "15M subscribers",
        videoName: "Talking Tech and AI with Google CEO Sundar Pichai!",
        videoStats: "3.4M views &#183; 6 months ago"
    },{
        // 2) Programming with Mosh CONTAINER:
        link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&list=PL2PREgmkP8_kjnM4RLsWIel2NJkhW-znN",
        thumbnail: "/youtube-project/Thumbnails/PythonMosh.png",
        videoTime: "6:14:07",
        channelLink: "https://www.youtube.com/@programmingwithmosh",
        channelPicture: "/youtube-project/ChannelPictures/ProgrammingwithMosh.jpg",
        channelName: "Programming with Mosh",
        subscribers: "3.97M subscribers",
        videoName: "Python Tutorial - Python Full Course for Beginners",
        videoStats: "3.9M views &#183; 5 years ago"
    },{
        // 4) Markiplier CONTAINER:
        link: "https://www.youtube.com/watch?v=3PGx1VWM4tA&list=LL&index=26&t=1507s",
        thumbnail: "/youtube-project/Thumbnails/unoFlip.jpg",
        videoTime: "29:37",
        channelLink: "https://www.youtube.com/@markiplier",
        channelPicture: "/youtube-project/ChannelPictures/Markiplier.jpg",
        channelName: "Markiplier",
        subscribers: "37.1M subscribers",
        videoName: "A COMPLETELY NEW WAY TO PLAY!! | UNO Flip!",
        videoStats: "7M views &#183; 4 years ago"
    },{
        // 5) SuperSimpleDev (HTML/CSS) CONTAINER:
        link: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=22051s",
        thumbnail: "/youtube-project/Thumbnails/HTMLCSS.jpg",
        videoTime: "6:31:24",
        channelLink: "https://www.youtube.com/@SuperSimpleDev",
        channelPicture: "/youtube-project/ChannelPictures/SuperDev.jpg",
        channelName: "SuperSimpleDev",
        subscribers: "455K subscribers",
        videoName: "HTML & CSS Full Course - Beginner to Pro",
        videoStats: "10M views &#183; 2 years ago"
    },{
        // 6) Mad Hat CONTAINER:
        link: "https://www.youtube.com/watch?v=YeWYlp9JP6g&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=9",
        thumbnail: "/youtube-project/Thumbnails/MadHat.jpg",
        videoTime: "21:59",
        channelLink: "https://www.youtube.com/@madhatistaken",
        channelPicture: "/youtube-project/ChannelPictures/madHat.jpg",
        channelName: "Mad Hat",
        subscribers: "82.8K subscribers",
        videoName: "Cybersecurity Certificate Tier List (2023)",
        videoStats: "613K views &#183; 1 year ago"
    },{
        // 7) C++ Snake Game CONTAINER:
        link: "https://www.youtube.com/watch?v=E_-lMZDi7Uw&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=4",
        thumbnail: "/youtube-project/Thumbnails/SnakeGame.jpg",
        videoTime: "11:15",
        channelLink: "https://www.youtube.com/@NVitanovic",
        channelPicture: "/youtube-project/ChannelPictures/NVitanovic.jpg",
        channelName: "NVitanovic",
        subscribers: "48.5K subscribers",
        videoName: "C++ Tutorial 18 - Simple Snake Game (Part 1)",
        videoStats: "2.2M views &#183; 9 years ago"
    },{
        // 8) Tech Projects CONTAINER:
        link: "https://www.youtube.com/watch?v=LxkXT9WD7yk&list=LL&index=160",
        thumbnail: "/youtube-project/Thumbnails/github.jpg",
        videoTime: "4:09",
        channelLink: "https://www.youtube.com/@TechProjects",
        channelPicture: "/youtube-project/ChannelPictures/TechProjects.jpg",
        channelName: "Tech Projects",
        subscribers: "27.5K subscribers",
        videoName: "How to push changes from visual studio code to GitHub | Tech Projects",
        videoStats: "176K views &#183; 4 years ago"
    },{
        // 9) Stefanovic CONTAINER:
        link: "https://www.youtube.com/watch?v=X7eAwyMvm2c&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=22",
        thumbnail: "/youtube-project/Thumbnails/DACourses.jpg",
        videoTime: "8:40",
        channelLink: "https://www.youtube.com/@Stefanovic92",
        channelPicture: "/youtube-project/ChannelPictures/StefaNovic.jpg",
        channelName: "Stefanovic",
        subscribers: "309K subscribers",
        videoName: "I Tried 50 Data Analyst Courses. Here Are Top 5",
        videoStats: "147K views &#183; 1 month ago"
    },{
        // 10) SuperSimpleDev (JavaScript) CONTAINER:
        link: "https://www.youtube.com/watch?v=EerdGm-ehJQ&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=7",
        thumbnail: "/youtube-project/Thumbnails/JavaScript1.jpg",
        videoTime: "22:15:57",
        channelLink: "https://www.youtube.com/@SuperSimpleDev",
        channelPicture: "/youtube-project/ChannelPictures/SuperDev.jpg",
        channelName: "SuperSimpleDev",
        subscribers: "455K subscribers",
        videoName: "JavaScript Tutorial Full Course - Beginner to Pro (2024)",
        videoStats: "869K views &#183; 2 months ago"
    },{
        // 11) Garrett Codes CONTAINER:
        link: "https://www.youtube.com/watch?v=wufc6w8fqvY&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=13",
        thumbnail: "/youtube-project/Thumbnails/Garrett Codes.jpg",
        videoTime: "4:41",
        channelLink: "https://www.youtube.com/@GarrettCodes",
        channelPicture: "/youtube-project/ChannelPictures/Garrett Codes.jpg",
        channelName: "Garrett Codes",
        subscribers: "6.83K subscribers",
        videoName: "3 Months of Learning Leetcode",
        videoStats: "100K views &#183; 1 year ago"
    },{
        // 12) How to Become a Developer CONTAINER:
        link: "https://www.youtube.com/watch?v=ldwlOzRvYOU&list=PL2PREgmkP8_k9YSZsOChy-dnDRbA991mf&index=21",
        thumbnail: "/youtube-project/Thumbnails/Responsive.webp",
        videoTime: "2:12:20",
        channelLink: "https://www.youtube.com/@howtobecomeadeveloper",
        channelPicture: "/youtube-project/ChannelPictures/how-to.jpg",
        channelName: "How to Become a Developer",
        subscribers: "17.6K subscribers",
        videoName: "Responsive Portfolio Website From Scratch",
        videoStats: "803K views &#183; 1 year ago"
    }
];

// Last Length: 414
// Recent Length: 123