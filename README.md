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

const apiKey = "ea42bb03df5c4e5f88941b56087889c2";

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=Apple&from=2022-05-13&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log("error"));
  }, []);