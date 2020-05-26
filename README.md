# Home Pub Quiz

With Home Pub Quiz you can challenge yourself and friends over 6 category rounds of 5 questions each. 
The categories include: Food & Drink, Science & Nature, Movies, Music, Sport and General Knowledge. 
Each correct answer is worth 1 point but be careful as any INCORRECT answer will result in a DEDUCTION of 1 point.
All you have to do is answer as many questions as you can, check out your score and challenge your friends and family to beat you!

## Purpose

Home Pub Quiz is built as part of my Interactive Front End Milestone Project as part of Code Institute's Full Stack Web Developer 
course. With everyone seemingly locked down in some form or another I thought most people could use a simple escape,
enter Home Pub Quiz. A quiz with 6 question categories gives the whole famliy a chance to show their hidden knowledge and challenge
friends to beat them by sharing their score across social platforms.

## Wireframe Mockups

Before starting the project I put together a few wireframe mockups so I had an idea of what I was trying to 
create and what I should include. It also allowed me to see how the features would be scaled and incorporated 
over various device sizes. These were created using [Balsamiq](https://balsamiq.com/ "Balsamiq"):

[Wireframe Mockups](/assets/wireframes/home-pub-quiz.bmpr "Home Pub Quiz")

These wireframe mockups show how I intended the site design and layout to look on various devices, the streamline 
design does not vary too much between device sizes to bring a familiarity to revisiting users. 

## Theme

The deep navy background used throughout the page gives a clear contrast with the white and subtle yellow used 
for the quiz information, questions and answers. This contrast makes the quiz information and questions easy 
for the user to read and understand. Answers change colour to green(correct) and red(incorrect) when selected 
to indicate how well a user has done with each question. 

## UX

The [Materialize CSS](https://materializecss.com/ "Materialize") standard 12 column fluid responsive grid system 
allowed for an easily structured mobile-first design. It also made sure that Home Pub Quiz is responsive over 
varying screen sizes and devices. Images below show how the design and layout scales to suit each device size:

* Mobile Designs: [Mobile Home Page](/assets/img/HPQ-mobile-home.png "Mobile Home Page"), [Mobile Quiz Page](/assets/img/HPQ-mobile-quiz.png "Mobile Quiz Page"), [Mobile Score Page](/assets/img/HPQ-mobile-score.png "Mobile Score Page") 
* Tablet Designs: [Tablet Home Page](/assets/img/HPQ-tablet-home.png "Tablet Home Page"), [Tablet Quiz Page](/assets/img/HPQ-tablet-quiz.png "Tablet Quiz Page"), [Tablet Score Page](/assets/img/HPQ-tablet-score.png "Tablet Score Page")
* Desktop Designs: [Desktop Home Page](/assets/img/HPQ-desktop-home.png "Desktop Home Page"), [Desktop Quiz Page](/assets/img/HPQ-desktop-quiz.png "Desktop Quiz Page"), [Desktop Score Page](/assets/img/HPQ-desktop-score.png "Desktop Score Page")


## Features & Layout

### Home-Landing Page

Welcomes the user to Home Pub Quiz and sets out the rules for the quiz to follow. A large "Start Quiz" button invites the user to begin and takes them to Round 1.

### Quiz Rounds

Each of the six quiz rounds have a round specific category and are made up of five trivia questions. The categories for each round are: 

* Food & Drink
* Science & Nature
* Movies
* Music
* Sport
* General Knowledge

In each round the user may choose one of a possible three answers for each question and their score will be calculated depending on their input. A correct answer will add one point to the user's score, however an incorrect answer will result in a one point deduction, meaning it may be a better idea to leave an question unanswered if the user is not certain of the answer. 

The Home button at the bottom of each quiz round allows the user to restart the quiz by taking them back to the langing page. The next button allows the user to access the next round of the quiz. The complete button at the foot of round 6 totals the user's score and takes them to the score page.

### Score Page

The score page is where the user is taken upon completion of the quiz and aloows the user to see their total score. It also allows them to challenge their friends and family to take the quiz by sharing on social media. The social media share buttons have been added using [Share This](https://platform.sharethis.com/ "Share This Platform").

## Future Improvements

### Split Rounds Into Individual Quizzes
Add more questions to each round and make them individual quizzes that can be accessed by a category button on the landing page.
### High Scores Page
Allow users to input details and keep a leaderboard of all participants to build mor competition between users and drive up usage.
### Add More Categories 
Bring in more categories to fit in with above suggestion to create an individual quiz from each category. This could involve bringing in more specific categories and sub-categories that would make the quiz more accessible for all ages including but not limited to: Children's Trivia; Decade Specific Music and Movies; TV Shows; History; Geography; Specific Sports(e.g. Football, Rugby, Badminton etc.).

## Testing

All basic style and layout testing for each device size during development was done using Chrome's developer tools while previewing the site.

To validate my HTML I used [W3C HTML Validator](https://validator.w3.org/ "W3C HTML Validator").

To validate my CSS I used [W3C CSS Validator](https://jigsaw.w3.org/css-validator/ "W3C CSS Validator").

I passed my JS through [JSHint](https://jshint.com/ "JSHint") linter without any issues.

Used family and friends to perform small beta test before deployment. 

## Deployment

Site was deployed using [GitHub](https://github.com/ "GitHub"):

1. Open [GitHub Repository](https://github.com/aralston3592/pub-quiz "Home Pub Quiz").
2. Click on SETTINGS then scroll down to GitHub PAGES.
3. Select master branch as the SOURCE.
4. 'Your site is published at https://aralston3592.github.io/pub-quiz/' will appear on screen.
5. Site deployed, click link to access.

## Technology Used

* Wireframes: [Balsamiq](https://balsamiq.com/ "Balsamiq")
* Programming Languages: HTML, CSS, Javascript
* Fonts & Icons: [Google Fonts](https://fonts.google.com/ "Google Fonts"), [Materialize CSS](https://materializecss.com/ "Materialize"), [Share This](https://platform.sharethis.com/ "Share This Platform"). 
* Javascript: [JQuery](https://jquery.com/ "JQuery")
* Responsive Design: [Materialize CSS](https://materializecss.com/ "Materialize")
* IDE: [Gitpod](https://gitpod.io/ "GitPod")
* Version Control: [Git](https://git-scm.com/ "Git")
* Repository Host/Deployment: [GitHub](https://github.com/ "GitHub")