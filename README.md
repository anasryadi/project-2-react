# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Project Overview


Project Links
https://github.com/anasryadi/project-2-react

Project Description
For this project, I plan to make a multiple-choice trivia game. I will use React's Link and Source to provide access to instructions, the game itself, and a leaderboard. The questions and possible answers will be populated using an API call. The leaderboard will be stored on a Google Sheet and also viewed through an API call.

# API
https://newsapi.org/v2/everything?q=Apple&from=2022-05-13&apiKey=ea42bb03df5c4e5f88941b56087889c2

{
"status": "ok",
"totalResults": 2014,
"articles": [
{
"source": {
"id": "wired",
"name": "Wired"
},
"author": "Caitlin Harrington",
"title": "Apple Together Brings Corporate Workers Into the Union Effort",
"description": "The solidarity movement has helped give tools and support as the company's retail employees organize.",
"url": "https://www.wired.com/story/apple-together-solidarity-union-organizing/",
"urlToImage": "https://media.wired.com/photos/627d73aef78bac197c7c5c1d/191:100/w_1280,c_limit/Corporate-Apple-Unions-Support-Retail-Unions-Big-Supporting-Small-Business-1251764259.jpg",
"publishedAt": "2022-05-13T11:00:00Z",
"content": "Earlier this year, former Apple software engineer Cher Scarlett received a distraught DM from an Apple retail employee at New Yorks Grand Central Station. The employee had been working with a union t… [+4216 chars]"
},
{
"source": {
"id": "engadget",
"name": "Engadget"
},
"author": "Valentina Palladino",
"title": "The Apple TV 4K drops to $150, plus the rest of the week's best tech deals",
"description": "This week brought a slew of deals online on some of our favorite gadgets. Apple's latest 4K set-top box is down to a record low, while the Mac Mini returned to the cheapest price we've ever seen it. Samsung's Galaxy S22 smartphones all dropped to new lows, wh…",
"url": "https://www.engadget.com/apple-tv-4k-drops-to-150-best-tech-deals-this-week-154503439.html",
"urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/e5549830-bfbe-11eb-bd29-331b18490ec1",
"publishedAt": "2022-05-13T15:45:03Z",
"content": "This week brought a slew of deals online on some of our favorite gadgets. Apple's latest 4K set-top box is down to a record low, while the Mac Mini returned to the cheapest price we've ever seen it. … [+4778 chars]"
},
{
"source": {
"id": "wired",
"name": "Wired"
},
"author": "Steven Levy",
"title": "A World Without iPods",
"description": "Plus: An interview with Steve Jobs, keeping up with early MIT hackers, and a relatable collapse.",
"url": "https://www.wired.com/story/plaintext-world-without-ipods/",
"urlToImage": "https://media.wired.com/photos/627d85f8ee686432b7db85e8/191:100/w_1280,c_limit/Apple-iPod-Touch-Discontinued-Business.jpg",
"publishedAt": "2022-05-13T13:00:00Z",
"content": "Wow, my 401(k) is really taking a beating. Glad I put all that money into Bitcoin! Uhhhhh \r\nWeeks after introducing the iPhone in January 2007, Steve Jobs visited New York City to show his creation t… [+2509 chars]"
},
{
"source": {
"id": "the-verge",
"name": "The Verge"
},
"author": "Jon Porter",
"title": "With its Pixel Watch and tablet, Google is getting serious about its own ecosystem",
"description": "Google has long operated a software ecosystem around its Android phones. But, with its Pixel Watch and tablet, it’s expanding this to cover hardware as well to try and build a real ecosystem of its own.",
"url": "https://www.theverge.com/2022/5/13/23070484/google-ecosystem-pixel-watch-tablet-hardware-software",
"urlToImage": "https://cdn.vox-cdn.com/thumbor/vztwGP7fw5SuqtFUfNC3WpXOS4U=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23449170/Google_Pixel_Watch_1.png",
"publishedAt": "2022-05-13T15:00:00Z",
"content": "The Pixel Watch, Google’s first smartwatch. | Image: Google\r\n\n \n\n This year’s Google I/O keynote was filled with hardware announcements, which is unusual considering it’s typically a software and ser… [+6639 chars]"
},
{
"source": {
"id": null,
"name": "MacRumors"
},
"author": "Juli Clover",
"title": "Apple Notifying Developers Who Get to Attend WWDC Viewing Event at Apple Park",
"description": "Apple has started sending out emails letting developers know if they've been chosen to attend the special WWDC viewing event that is set to take place at Apple Park on Monday, June 6.\n\n\n\n\n\nApple began taking applications for the viewing event on Monday, and s…",
"url": "https://www.macrumors.com/2022/05/12/apple-park-viewing-event-wwdc-attendees/",
"urlToImage": "https://images.macrumors.com/t/MziEm1KEeGDdCQz1ebdzJBg5F4Y=/1600x/article-new/2022/05/wwdc-2022-apple-park-event.jpg",
"publishedAt": "2022-05-13T00:12:50Z",
"content": "Apple has started sending out emails letting developers know if they've been chosen to attend the special WWDC viewing event that is set to take place at Apple Park on Monday, June 6.\r\nApple began ta… [+1335 chars]"
},
{
"source": {
"id": null,
"name": "MacRumors"
},
"author": "Joe Rossignol",
"title": "Kuo: New Apple TV to Launch in Second Half of 2022, Lower Price Possible",
"description": "Apple plans to launch a new version of the Apple TV in the second half of 2022, according to well-known Apple analyst Ming-Chi Kuo.\n\n\n\n\n\nIn a tweet, Kuo said the new Apple TV will have an improved cost structure, suggesting that the device could have a lower …",
"url": "https://www.macrumors.com/2022/05/13/kuo-new-apple-tv-to-launch-second-half-2022/",
"urlToImage": "https://images.macrumors.com/t/ONxKr59L-ja1VZa5v71M5Fj3imU=/2500x/article-new/2021/04/apple-tv-4k-design-clue.jpg",
"publishedAt": "2022-05-13T14:58:47Z",
"content": "Apple plans to launch a new version of the Apple TV in the second half of 2022, according to well-known Apple analyst Ming-Chi Kuo.\r\nIn a tweet, Kuo said the new Apple TV will have an improved cost s… [+524 chars]"
},
{
"source": {
"id": "ars-technica",
"name": "Ars Technica"
},
"author": "Samuel Axon",
"title": "Report: Apple is testing USB-C iPhone models for 2023",
"description": "European Union regulation could force Apple to make the switch.",
"url": "https://arstechnica.com/gadgets/2022/05/report-apple-is-testing-usb-c-iphone-models-for-2023/",
"urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/05/iPhone-13-Lightning-760x380.jpeg",
"publishedAt": "2022-05-13T18:24:04Z",
"content": "Enlarge/ 2021's iPhone 13 still uses Apple's proprietary Lightning port.\r\n21 with 15 posters participating\r\nApple is testing iPhones that use the industry-standard USB-C port, according to a report i… [+2062 chars]"
},
{
"source": {
"id": "business-insider",
"name": "Business Insider"
},
"author": "insider@insider.com (Matthew Hartman)",
"title": "'The Essex Serpent' is a new period drama starring Tom Hiddleston and Claire Danes — here's how to watch on Apple TV Plus",
"description": "The new Apple TV Plus original series is based on the novel of the same name. Apple TV Plus plans cost $5 a month.",
"url": "https://www.businessinsider.com/guides/streaming/how-to-watch-the-essex-serpent",
"urlToImage": "https://i.insider.com/627ebdc7e7446d0018cc7757?width=1200&format=jpeg",
"publishedAt": "2022-05-13T21:33:09Z",
"content": "When you buy through our links, Insider may earn an affiliate commission. Learn more.\r\n\"The Essex Serpent\" is a new Apple TV Plus period drama based on the novel of the same name by author Sarah Perr… [+2521 chars]"
},
{
"source": {
"id": "engadget",
"name": "Engadget"
},
"author": "Devindra Hardawar",
"title": "Engadget Podcast: Google I/O and hands-on with Microsoft’s Adaptive Mouse",
"description": "This week, Engadget Deputy Editor Nathan Ingraham joins Cherlynn and Devindra to dive into everything announced at Google I/O. There were plenty of new devices, of course, but Google also showed off how its improved AI tech is making maps, translation and mor…",
"url": "https://www.engadget.com/engadget-podcast-google-io-2022-adaptive-mouse-123043693.html",
"urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8e851c0-2b3d-11eb-baea-6c6fe29971fb",
"publishedAt": "2022-05-13T12:30:43Z",
"content": "This week, Engadget Deputy Editor Nathan Ingraham joins Cherlynn and Devindra to dive into everything announced at Google I/O. There were plenty of new devices, of course, but Google also showed off … [+1240 chars]"
},
{
"source": {
"id": null,
"name": "MacRumors"
},
"author": "Mitchel Broussard",
"title": "Best Apple Deals of the Week: Save on Apple TV 4K, iPod Touch Closeouts, and iMac",
"description": "This week we saw a rare all-time low price on the Apple TV 4K, and in this article we're recapping this markdown and more, all of which are still available to purchase today.\n\n\n\nApple TV 4K (2021)\n\nNote: MacRumors is an affiliate partner with some of these ve…",
"url": "https://www.macrumors.com/2022/05/13/best-apple-deals-of-the-week-may-13-2022/",
"urlToImage": "https://images.macrumors.com/t/NTGISrKYMaO280AuMvdMVEuwk3w=/2500x/article-new/2021/04/apple-tv-4k-design-blue.jpg",
"publishedAt": "2022-05-13T13:57:45Z",
"content": "This week we saw a rare all-time low price on the Apple TV 4K, and in this article we're recapping this markdown and more, all of which are still available to purchase today.\r\nApple TV 4K (2021)\r\nNot… [+2676 chars]"
},
{
"source": {
"id": null,
"name": "MacRumors"
},
"author": "Juli Clover",
"title": "Bloomberg Confirms Apple is Testing iPhones With USB-C Ports",
"description": "Apple is indeed testing iPhones that are equipped with USB-C ports instead of Lightning ports, according to Bloomberg's Mark Gurman. Apple does not plan to make the switch from Lightning to USB-C until 2023 at the earliest, with this year's iPhones continuing…",
"url": "https://www.macrumors.com/2022/05/13/usb-c-iphone-2023/",
"urlToImage": "https://images.macrumors.com/t/wNktlkyquC4rmTyGGJoqu4WXrcE=/2621x/article-new/2022/05/iPhone-15-to-Switch-From-Lightning-to-USB-C-in-2023-feature.jpg",
"publishedAt": "2022-05-13T16:12:12Z",
"content": "Apple is indeed testing iPhones that are equipped with USB-C ports instead of Lightning ports, according to Bloomberg's Mark Gurman. Apple does not plan to make the switch from Lightning to USB-C unt… [+1330 chars]"
},
{
"source": {
"id": "wired",
"name": "Wired"
},
"author": "Morgan Meaker",
"title": "2 Visions Clash Over How to Fight Online Child Abuse in Europe",
"description": "A new EU proposal would allow forced searches of users’ messages. Critics say the plan goes too far.",
"url": "https://www.wired.com/story/eu-child-abuse-law/",
"urlToImage": "https://media.wired.com/photos/627d96d653dba723bc9d79c0/191:100/w_1280,c_limit/Two-Visions-Clash-Solving-Child-Abuse-EU-Business-1084548910.jpg",
"publishedAt": "2022-05-13T11:00:00Z",
"content": "Encrypted messenger services have been quick to condemn the Commissions proposal. Julia Weiss, a spokesperson for the Swiss messenger app Threema, says the company was not willing to undermine its us… [+3528 chars]"
},
{
"source": {
"id": "reuters",
"name": "Reuters"
},
"author": null,
"title": "Breakingviews - Global brands set too much store in China recovery - Reuters",
"description": "China’s Covid-19 “new normal” will challenge Western multinationals’ hopes for a quick rebound in the world’s second largest economy. Big groups from <a href=\"https://www.apple.com/newsroom/2022/04/apple-reports-second-quarter-results\" target=\"_blank\">Apple</…",
"url": "https://www.reuters.com/breakingviews/global-brands-set-too-much-store-china-recovery-2022-05-13/",
"urlToImage": "https://www.reuters.com/resizer/vbdegc2TPmnjJUWxlKw206jqz0o=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WNGSI3LYK5NABNCYI6MNFWUVHY.jpg",
"publishedAt": "2022-05-13T10:08:00Z",
"content": "LONDON, May 13 (Reuters Breakingviews) - Chinas Covid-19 new normal will challenge Western multinationals hopes for a quick rebound in the worlds second largest economy. Big groups from Apple(AAPL.O)… [+4056 chars]"
},
{
"source": {
"id": null,
"name": "Inferse.com"
},
"author": "https://www.facebook.com/profile.php?id=100005391009970",
"title": "Abu Dhabi leads Gulf bourses lower; Aramco surpasses Apple – Reuters.com - Inferse",
"description": "Bahraini traders are seen at Bahrain Bourse in Manama, Bahrain, November 4, 2020. REUTERS/Hamad I MohammedMay 12 (Reuters) – Abu Dhabi led Middle East stock markets lower on Thursday as fears grew that fast-rising inflation will drive a sharp rise in interest…",
"url": "https://www.inferse.com/79802/abu-dhabi-leads-gulf-bourses-lower-aramco-surpasses-apple-reuters-com/",
"urlToImage": "https://www.inferse.com/wp-content/uploads/2022/03/pexels-pixabay-259132.jpg",
"publishedAt": "2022-05-13T08:33:03Z",
"content": "Bahraini traders are seen at Bahrain Bourse in Manama, Bahrain, November 4, 2020. REUTERS/Hamad I MohammedMay 12 (Reuters) – Abu Dhabi led Middle East stock markets lower on Thursday as fears grew th… [+3455 chars]"
},
{
"source": {
"id": null,
"name": "MacRumors"
},
"author": "Joe Rossignol",
"title": "Watch Now: Apple CEO Tim Cook Delivering Commencement Address at Gallaudet University",
"description": "Apple CEO Tim Cook today is delivering the commencement address at Gallaudet University's 152nd undergraduate commencement ceremony.\n\n\n\nA livestream is available on YouTube:\n\n\n\n\r\n\n\nLocated in Washington, D.C., Gallaudet is the only university in the world whe…",
"url": "https://www.macrumors.com/2022/05/13/tim-cook-gallaudet-university-commencement/",
"urlToImage": "https://images.macrumors.com/t/vQAouNVEvUR6QcQU3tQOVC_MFPM=/1600x/article-new/2022/04/tim-cook-commencement.jpeg",
"publishedAt": "2022-05-13T19:16:17Z",
"content": "Apple CEO Tim Cook today is delivering the commencement address at Gallaudet University's 152nd undergraduate commencement ceremony.\r\nA livestream is available on YouTube:\r\nLocated in Washington, D.C… [+476 chars]"
},
{
"source": {
"id": null,
"name": "CNET"
},
"author": "David Lumb",
"title": "One-third of Apple and Google apps are so outdated they could get removed - CNET",
"description": "A new report says 1.5 million apps on Google and Apple's app stores haven't been updated in two years, and could face repercussions.",
"url": "https://www.cnet.com/tech/mobile/one-third-of-apple-and-google-apps-are-so-outdated-they-could-get-removed/",
"urlToImage": "https://www.cnet.com/a/img/resize/4d54b8c85ce496431ed9aa03f5378bb063847f9c/2020/02/11/6796988a-9879-4734-bca6-448b788f8de7/apple-app-store-icon.jpg?auto=webp&fit=crop&height=630&width=1200",
"publishedAt": "2022-05-13T01:20:46Z",
"content": "A new report claims that 1.5 million apps on both Apple's App Store and Google's Play Store haven't been updated in two years or longer and get hidden or removed entirely, according to recent policy … [+723 chars]"
},
{
"source": {
"id": null,
"name": "Slashdot.org"
},
"author": "msmash",
"title": "Apple Testing iPhones That Ditch Lightning Ports in Favor of USB-C",
"description": "Apple is testing future iPhone models that replace the current Lightning charging port with the more prevalent USB-C connector, Bloomberg reported Friday, citing people with knowledge of the situation, a move that could help the company conform with looming E…",
"url": "https://apple.slashdot.org/story/22/05/13/1732242/apple-testing-iphones-that-ditch-lightning-ports-in-favor-of-usb-c",
"urlToImage": "https://a.fsdn.com/sd/topics/iphone_64.png",
"publishedAt": "2022-05-13T17:32:00Z",
"content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
},
{
"source": {
"id": null,
"name": "9to5Mac"
},
"author": "Benjamin Mayo",
"title": "Apple TV+ Guide: Every Apple TV show and movie available now",
"description": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $4.99 per month. Here’s every Apple original television show and movie avai…",
"url": "https://9to5mac.com/2022/05/13/apple-tv-plus-tv-shows-movies-guide/",
"urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/12/apple-tv-plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
"publishedAt": "2022-05-13T09:17:23Z",
"content": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $4.99 per month… [+44359 chars]"
},
{
"source": {
"id": null,
"name": "9to5Mac"
},
"author": "Chance Miller",
"title": "Kuo: Cheaper Apple TV coming later this year to ‘close the gap with competitors’",
"description": "Reliable Apple analyst Ming-Chi Kuo has a bold prediction for the future of the Apple TV. In a new report today, Kuo says that Apple will launch a cheaper Apple TV model in the second half of this year. The focus of this new model will be on improving the “co…",
"url": "https://9to5mac.com/2022/05/13/cheaper-apple-tv-coming-later-this-year/",
"urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/05/cheaper-apple-tv.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
"publishedAt": "2022-05-13T15:01:41Z",
"content": "Reliable Apple analyst Ming-Chi Kuo has a bold prediction for the future of the Apple TV. In a new report today, Kuo says that Apple will launch a cheaper Apple TV model in the second half of this ye… [+2274 chars]"
},
{
"source": {
"id": null,
"name": "heise online"
},
"author": "Ben Schwan",
"title": "Netzteil macht Apple TV \"kabellos\"",
"description": "Das Mission USB Cable bezieht Strom für die Multimediabox direkt aus dem Fernseher, was eine Steckdose spart.",
"url": "https://www.heise.de/news/Netzteil-macht-Apple-TV-kabellos-7089148.html",
"urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/4/1/4/1/7/Screen_Shot_2022-05-12_at_12.11.35-dd7513336fcda167.png",
"publishedAt": "2022-05-13T08:43:00Z",
"content": "Wer ein Apple-TV-Gerät an seinem Fernseher betreibt, wird derzeit von Kabelsalat genervt: Neben der HDMI-Strippe zum Bildschirm muss stets auch noch die Stromversorgung eingesteckt sein und gegebenen… [+2497 chars]"
}
]
}

# Wireframes

https://media.git.generalassemb.ly/user/43005/files/82202780-d52e-11ec-84cb-00c3cf05e42d

wireframes
react architecture
MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

# MVP

Component	Priority	Time
React App / JS	H	6 hrs
Web Pages	H	2 hrs
API	H	2 hrs
Pictures	L	1 hr
Responsive	H	3 hrs
Nav	M	2 hrs
CSS	L	2 hrs


# Components

Components	Deliverable
Create React app and files for all components	Components, react routers	
Basic Navbar & Footer		
Set up basic React routing		
API Calls	https://newsapi.org/v2/everything?q=Apple&from=2022-05-13&sortBy=popularity&apiKey=ea42bb03df5c4e5f88941b56087889c2	
Display news data	Arrays/Objects to display data from API	
Make it responsive		
Styling		

Unless otherwise noted, time is listed in hours:

Day	Deliverable
Day 1	Wireframes / Starter code	
Day 2	Api and first component	
Day 3	Remaining component + CSS	
Day 4	Make the project presentable	
Day 5	Presentation	


# Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of and a brief description. Code snippet should not be greater than 10 lines of code.

The below code is how the leaderboard is populated. The shorter the name, the more dots are added between the name and score. The font size is set progressively smaller for each entry.

let fontSize = props.gameView ? 24 : 42

scoreList = props.highScores.map((highScore, i) => {
	let dots = ' . . . '   
	for (let j = highScore.name.length; j < 12; j += 2) {
		dots += '. '
	}
	if (i > 0) {
		let mult = (i < 3 ? 2 : 1)
		props.gameView ? fontSize -= 1 * mult : fontSize -= 3 * mult
	}
...

	return (
		<li style={{fontSize: `${fontSize}px`, color: color}} key={i}>
			<span className="bold">{`${i + 1}) `}</span>
			{highScore.name} {dots} {highScore.score}
		</li>
	) 
})