# **My Crypto**

- [**My Crypto**](#my-crypto)
- [**User Experience**](#user-experience)
- [**Strategy**](#strategy)
  * [**Project Goals**](#project-goals)
  * [**User Goals**](#user-goals)
  * [**User Stories**](#user-stories)
  * [**Design**](#design)
    + [**Colour Palette**](#colour-palette)
    + [**Font Scheme**](#font-scheme)
- [**Scope**](#scope)
  * [Feature requirements:](#feature-requirements-)
- [**Structure**](#structure)
  * [**Wireframes**](#wireframes)
  * [**Features**](#features)
    + [**Landing Page**](#landing-page)
    + [**Quiz**](#quiz)
    + [**Portfolio**](#portfolio)
    + [**Navbar**](#navbar)
    + [**Email Modal**](#email-modal)
    + [**Footer**](#footer)
    + [**404 Page**](#404-page)
  * [**Technologies Used**](#technologies-used)
  * [**Testing**](#testing)


## **You can find the deployed website** [**HERE**](https://cristianbuca.github.io/MS2_MyCrypto/)

# **User Experience**

The webapp is designed as an interactive project that gives the user the ability to build a crypto-currency portfolio that is stored on their own computer without having to share their data with 3rd parties.

# **Strategy**

##  **Project Goals**
* Use crypto-currency APIs to display relevant data to the user.
* Offer the user the ability to build their portfolio on our platform.
* Offer the user an interactive way of learning more about blockchain and testing their knowledge.
* Offer a way for the user to communicate with the owner.

## **User Goals**
* Find price and performance related information for the main crypto-currencies by market valuation.
* Ability to customize a list of currencies and store the data on my device.
* Ability to view the current valuation of assets and portfolio.
* Learn blockchain related information and test my knowledge.

## **User Stories**

**New Users:** 

1. As a new user, I want to see recent data on major crypto-currencies by market capitalization.
2. As a new user, I want to add personal crypto-currency assets.
3. As a new user, I want to see the asset valuation.
4. As a new user, I want to see the total portfolio valuation.
5. As a new user, I want to learn new information relating to the blockchain.
6. As a new user, I want to learn more about the knowledge quiz.

**Regular Users:**

7. As a regular user, I want to store my portfolio data.
8. As a regular user, I want the option to change the current webapp color theme.
9. As a regular user, I want the ability to edit previous portfolio entries.
10. As a regular user, I want to test the previously acquired knowledge.


**Site Owner:**

11. As a site owner, I want the knowledge quiz to be versatile and easy to update.
12. As a site owner, I want to provide the user a way to get in contact.
13. As a site owner, I want to showcase my social media.

## **Design**

I have opted for minimalist design focused on user interactivity. The user has the ability to switch between Light and Dark modes with the help of the suggestive switch that is always accessible on the Navbar.
The webapp was designed with a mobile-first approach using BootStrap grid for elements to re-arrange based on screen size. 
The Navbar was also built using BootStrap and collapses on small devices remaining fixed on top of the screen for easy access to the color theme switcher and links.

### **Colour Palette**

![Nineties Grunge color combination](/docs/misc/color_palette.png)

Midnight Blue | Red Orange | Ebony | Misty Blue
--- | --- | --- | ---
#00478F | #FF5D00 | #2A231F | #D8E1E7

### **Font Scheme**

Font Scheme is comprised of the fonts from the Ubuntu Family for titles, Oxygen Family for information of focus and Fira Sans for general text. These fonts were chosen using Google Fonts as they compliment each other.

# **Scope**

## Feature requirements:

* Responsive webapp for all devices.
* Navigation bar that adapts to device size.
* Landing Page displaying current information on major crypto-currencies using calls to an external API (CoinGeko API).
* Interactive display of secondary information on major crypto-currencies.
* Personalized Portfolio Page displaying user assets data by calling external API(CoinGeko API).
* Portfolio interactivity (ability to add and remove assets by user).
* Portfolio persistance by storing data on the user's machine.
* Interactive quiz with information from the crypto-space.
* Modal with extra information on the quiz design and interaction.
* Modal with built in e-mail function using external API (EmailJS).
* Interactive color theme switch.
* Customized 404 Error Page.
* Favicon icons.

# **Structure**

## **Wireframes**

[Landing Page](https://github.com/CristianBuca/MS2_MyCrypto/blob/main/docs/wireframes/landing_page.png)

[Quiz](https://github.com/CristianBuca/MS2_MyCrypto/blob/main/docs/wireframes/crypto_quiz.png)

[Portfolio](https://github.com/CristianBuca/MS2_MyCrypto/blob/main/docs/wireframes/portfolio_page.png)

[Email Modal](https://github.com/CristianBuca/MS2_MyCrypto/blob/main/docs/wireframes/email_modal.png)

# **Features**

### **Landing Page**

The Landing Page features a grid displaying major crypto-currencies and their current prices. Currencies are organized by market capitalization in descending order. Each currency is displayed in it's own badge that the user can interact with by mouse hover (or tap on touch devices), to access 24-hour high and low prices.
All the data displayed is generated dynamically through JavaScript and the [CoinGeko API](https://www.coingecko.com/en/api).

All coin badges are dynamically generated with JavaScript and the moment them being displayed are instant confirmation that the information they are viewing is up to date and the API is up and running.

*User stories solved by this feature:*

* 1 - As a new user, I want to see recent data on major crypto-currencies by market capitalization.

<details>
  <summary> (Expand) Landing Page on different device widths.</summary>

![Landing Page on mobile](/docs/features/landing_mob.png)

![Landing Page on tablet](/docs/features/landing_tablet.png)

![Landing Page on 1080p](/docs/features/landing_1080p.png)

![Landing Page on 1440p](/docs/features/landing_1440p.png)
</details>

### **Quiz**

The Quiz Page displays a quiz with crypto-currency related questions. Each question is accompanied by a different picture and the pictures featured are hidden on small devices to maintain focus on the quiz.

The info icon at the top of the quiz triggers the Info Modal when clicked, displaying more information on interacting with the game.

At the bottom of the quiz area, a stopwatch is displayed which is triggered when the user clicks the Start Button and stops when End Screen is displayed. 
On the opposite side, score is kept based on the correct or wrong answers the user selected.

The user is able to choose multiple answers before going to the next question. Feedback to the user is provided in the form of the buttons changing colors and and extra message being displayed when selecting the correct answer which provides additional information related to the question. 

The choices in the design were made for first time users to maintain engagement with the information in the quiz. The implementation of a stopwatch instead of a countdown timer and by giving the user the ability to keep trying until they select the right answer before moving to the next question, provides the first time user with the chance to learn something new on initial interactions with the game.

For the returning user the stopwatch and the score keeping provides the ability to test previously acquired knowledge and a challenge to beat previous score and completion time. 
Score is kept not only by rewarding points for right answer selections but by deducting points for wrong answers. Coupled with the stopwatch feature it adds a variable layer of difficulty and replay value to the game.

The quiz is built to be versatile and easy to update. By loading the questions from a separate file in JSON format the site owner is able to easily change or update game. The quiz is able to adapt to variable number of questions as the HTML is dynamically generated through JavaScript.

*User stories solved by this feature:*

* 5 - As a new user, I want to learn new information relating to the blockchain.
* 6 - As a new user, I want to learn more about the knowledge quiz.
* 10 - As a regular user, I want to test the previously acquired knowledge.
* 11 - As a site owner, I want the knowledge quiz to be versatile and easy to update.

<details>
  <summary> (Expand) Quiz Features.</summary>

![Quiz on mobile](/docs/features/quiz_mob.png)

![Quiz on tablet](/docs/features/quiz_tablet.png)

![Quiz on 1080p](/docs/features/quiz_1080p.png)

![Quiz on 1440p](/docs/features/quiz_1440p.png)
</details>

### **Portfolio**

The Portfolio Page displays all the user's assets in the form of a table. The user is able to add different currencies by inputting either the name, symbol or by selecting it from a searchable drop-down list; along with the quantity for each asset. Before the asset is added to the portfolio, user input is checked against the list of all coins received from the API. Once it is validated the asset is displayed with the current market price and with a calculation of how much the user's holdings are valued at. Valuations are made both individually per asset and as a total. Users are able to remove assets from their portfolio by interacting with the rubbish bin adjacent to it.

This page makes heavy use of the [CoinGeko API](https://www.coingecko.com/en/api). When the user inputs a cryptocurrency name, symbol or just manually selects it from the searchable dropdown list, a check is made against the list fetched from the API and if a match is found then the asset ID is stored in LocalStorage as a key and the asset amount input is stored as the value. This allows the user to keep their portfolio data on their own computer.
Due to the large number of cryptocurrencies (over 9000!!!) different endpoints need to be called for the input list and the market list which displays much more detailed information on each cryptocurrency.
The keys and values from LocalStorage are converted to JSON format and based on the IDs a custom link is generated when calling the API market list endpoint and only the coins selected by the user are being fetched.
Information is then dynamically displayed in the form of a table and asset value is calculated on each API call based on the key value provided by the user and stored in LocalStorage.

To update de asset list the user only has to input the same coin with different value.
To remove an asset completely the user can click the rubbish bin at the end of the asset's row.


*User stories solved by this feature:*

* 2 - As a new user, I want to add personal crypto-currency assets.
* 3 - As a new user, I want to see the asset valuation.
* 4 - As a new user, I want to see the total portfolio valuation.
* 7 - As a regular user, I want to store my portfolio data.
* 9 - As a regular user, I want the ability to edit previous portfolio entries.

<details>
  <summary> (Expand) Portfolio showcase.</summary>

![Portfolio on mobile](/docs/features/portfolio_mob.png)

![Portfolio on tablet](/docs/features/portfolio_tablet.png)

![Portfolio on 1080p](/docs/features/portfolio_1080p.png)

![Portfolio on 1440p](/docs/features/portfolio_1440p.png)
</details>

### **Navbar**

<details>
  <summary> (Expand) Navbar </summary>

![Responsive Navar]()
![Color Theme Switch]()
</details>

The Navbar is responsive to the size of the user's device and houses the Light/Dark Theme Switch. By using the browsers Session Storage the selected theme is kept between pages for the duration of the browsing session. The theme toggler provides an extra layer of user interaction with instant feedback in the form of the background, font and shadow color change.

*User stories solved by this feature:*

* 8 - As a regular user, I want the option to change the current webapp color theme.

### **Email Modal**

<details>
  <summary> (Expand) Email Modal </summary>

![Email Modal]()
</details>

The Email Modal makes use of the EmailJS API to give the user the ability to send emails to the site owner directly from the webapp.
Validation of the input fields is done on the front-end side with javascript and will prevent the form to be submitted with empty fields or an invalid email address syntax. Once the fields have been validated and form submitted the user receives confirmation in the form of an alert.

*User stories solved by this feature:*

* 12 - As a site owner, I want to provide the user a way to get in contact.

### **Footer**

<details>
  <summary> (Expand) Footer </summary>

![Footer]()
</details>

In the footer, the user can find links the owner social medial.

*User stories solved by this feature:*

* 13 - As a site owner, I want to showcase my social media.

### **404 Page**

<details>
  <summary> (expand) 404 Error</summary>

![404 Page]()
</details>

The 404 Error Page is displayed in case of broken or absent links. It provides the user with the ability to go back to one of the webapp pages and maintains user engagement.

## **Technologies Used**

* **[HTML5](https://html.spec.whatwg.org)**
* **[CSS3](https://www.w3.org/Style/CSS/Overview.en.html)**
* **[JavaScript](https://www.javascript.com)**
* **[Bootstrap v3.4.1](https://getbootstrap.com)** Components for the navbar, email modal and grid system were taken from the Bootstrap library.
* **[JQuery 3.6.0](https://jquery.com)** Was used for dom manipulation.
* **[Github](https://github.com)** For storing my repository.
* **[Github Desktop](https://desktop.github.com)** For managing synchronizations between local and cloud-stored repositories.
* **[Git](https://git-scm.com)** For version control.
* **[VSCode](https://code.visualstudio.com)** IDE for writing code.
* **[Font Awesome](https://fontawesome.com)** Provided the icons for social media links.
* **[Google Fonts](https://fonts.google.com)** Ubuntu, Oxygen and Fira Sans font families were used as default fonts for the web application.
* **[Optimizilla](https://imagecompressor.com)** To optimize images for web applications.
* **[Favicon.io](https://favicon.io)** For creating the favicon.
* **[Canva.com](https://www.canva.com)** Color scheme generator.
* **[Namecheap.com](https://www.namecheap.com/logo-maker/app/new)** For creating the logo.
* **[EmailJs API](https://www.emailjs.com)** Is used to enable email exchange from the webapp.
* **[CoinGeko API](https://www.coingecko.com/en/api)** Is used to fetch cryptocurrency information.

## **Testing**

### HTML validation was carried out with [W3 Validator](https://validator.w3.org).

<details>
  <summary> (expand) Home Page HTML Validation found 0 errors:</summary>

![Home Page HTML Validation](/docs/test_img/html_validator/html_valid_index.png)
</details>

<details>
  <summary> (expand) Quiz Page HTML Validation found 0 errors, 2 warnings:</summary>

![Quiz Page HTML Validation](/docs/test_img/html_validator/html_valid_quiz.png)
</details>

<details>
  <summary> (expand) Portfolio Page HTML Validation found 0 errors, 2 warnings:</summary>

![Portfolio Page HTML Validation](/docs/test_img/html_validator/html_valid_portfolio.png)
</details>

<details>
  <summary> (expand) 404 Page HTML Validation found 0 errors:</summary>

![404 Page HTML Validation](/docs/test_img/html_validator/html_valid_404.png)
</details>

### CSS validation was carried out with [W3 Jigsaw](https://jigsaw.w3.org/css-validator/).

<details>
  <summary> (expand) css.style Jigsaw Validation found 0 errors:</summary>

![CSS Validation](/docs/test_img/css_validator/css_valid.png)
</details>

### Accessibility Evaluation was carried out with [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org).

<details>
  <summary> (expand) Home Page WAVE Validation found 0 errors, 2 alerts:</summary>

![Home Page HTML Validation](/docs/test_img/wave_validator/wave_index.png)
</details>

<details>
  <summary> (expand) Quiz Page WAVE Validation found 0 errors, 3 alerts:</summary>

![Quiz Page HTML Validation](/docs/test_img/wave_validator/wave_quiz.png)
</details>

<details>
  <summary> (expand) Portfolio Page WAVE Validation found 0 errors, 3 alerts:</summary>

![Portfolio Page HTML Validation](/docs/test_img/wave_validator/wave_portfolio.png)
</details>

<details>
  <summary> (expand) 404 Page WAVE Validation found 0 errors, 2 alerts:</summary>

![404 Page HTML Validation](/docs/test_img/wave_validator/wave_404.png)
</details>

### Performance Tests were carried out using Chrome Lighthouse DevTools.

<details>
  <summary> (expand) Home Page Lighthouse Test:</summary>

![Home Page Lighthouse Test](/docs/test_img/lighthouse/lighthouse_index.PNG)
</details>

<details>
  <summary> (expand) Quiz Page Lighthouse Test:</summary>

![Quiz Page Lighthouse Test](/docs/test_img/lighthouse/lighthouse_quiz.PNG)
</details>

<details>
  <summary> (expand) Portfolio Page Lighthouse Test:</summary>

![Portfolio Page Lighthouse Test](/docs/test_img/lighthouse/lighthouse_portfolio.PNG)
</details>

<details>
  <summary> (expand) 404 Page Lighthouse Test:</summary>

![404 Page Lighthouse Test](/docs/test_img/lighthouse/lighthouse_404.PNG)
</details>

### JavaScript Code Tests were carried out with [JShint](https://jshint.com).

<details>
  <summary> (expand) email.js JSHint found 0 errors:</summary>

![EmailJS script](/docs/test_img/jshint_validator/jshint_valid_email.png)
</details>

<details>
  <summary> (expand) home.js JSHint found 0 errors 1 warning:</summary>

![EmailJS script](/docs/test_img/jshint_validator/jshint_valid_home.png)
</details>

<details>
  <summary> (expand) quiz.js JSHint found 0 errors 1 warning:</summary>

![EmailJS script](/docs/test_img/jshint_validator/jshint_valid_quiz.png)
</details>

<details>
  <summary> (expand) quiz_data.js JSHint found 0 errors:</summary>

![EmailJS script](/docs/test_img/jshint_validator/jshint_valid_quiz_data.png)
</details>

<details>
  <summary> (expand) portfolio.js JSHint found 0 errors, 3 warnings:</summary>

![EmailJS script](/docs/test_img/jshint_validator/jshint_valid_portfolio.png)
</details>


### Devices used for physical testing: 

* Samsung Galaxy S8,
* Samsung Tab A 9.7-inch tablet,
* 17-inch 1080p Laptop (Google Chrome, Mozilla Firefox, Opera, Microsoft Edge browsers),
* 24-inch 1080p Display (Google Chrome, Mozilla Firefox, Opera, Microsoft Edge browsers),
* 32-inch 2040p Display (Google Chrome, Mozilla Firefox, Opera, Microsoft Edge browsers).

Application performs as intended on all devices.

## **Testing of User Stories**

## **Bugs**

* Bug: Event listener does not trigger on the dynamically generated answer buttons.
* Fix: Apply the event listener to the button container and add selector for the clicks only on the buttons in the container.
Credit to [StackOverflow](https://stackoverflow.com/questions/1359018/how-do-i-attach-events-to-dynamic-html-elements-with-jquery)

* Bug: Multiple clicks on the same answer result function checkAnswer() being triggered multiple times resulting in erroneous score count and multiple displays of validation message for correct answers.

<details>
  <summary> (expand) Multiple clicks being registered on the same answer:</summary>

  ![Quiz-answer Bug]()
</details>

* Fix: Each answer button is added an extra class when being generated and event listener for clicks on answers is targeting the class instead of the button element. When checkAnswer() function is triggered for the first time for each answer removes the class from the button preventing the event listener from registering extra clicks.

* Bug: Unable to add assets to the portfolio that contain a space in their name.
* Fix: Store assets in localStorage by ID instead of NAME and call API based on IDs instead of their names.

## **Deployment**

The website is hosted and deployed from Github. The steps taken for deployment were:

1. Logged into my [Github](https://github.com) account,
2. Selected the [Repository](https://github.com/CristianBuca/The-Aunans),
3. Go to [Settings](https://github.com/CristianBuca/The-Aunans/settings),tab on the horizontal menu,
4. Go to [Pages](https://github.com/CristianBuca/The-Aunans/settings/pages) tab on the vertical sub-menu,
5. Selected the **Main Branch** from the drop-down menu under **Source**,
6. Selected the **/(root)** folder where my **index.html** was located,
7. Clicked **Save**,
8. Once the page was refreshed I was presented with the link to the live website as seen in the image below:

![Published site]()

**Steps to follow for cloning this repository:**

1. Log into your [Github](https://github.com) account,
2. Select the [Repository](https://github.com/CristianBuca/The-Aunans),
3. Click on the drop-down menu title **Code** on the top right of the repository file tree,
4. Copy the HTTPS address,
5. In your Git Bash Terminal type *"git clone"* then paste the address.

*Alternatively you can download the repository as ZIP or use [Github Desktop](https://desktop.github.com) to ge the repository on you local machine*

**Using the EmailJS API:**

1. Create an account/login on [EmailJS Website](https://www.emailjs.com).
2. Go to Email Services and add an e-mail service of your choice.
3. Got to Email Templates and create one.
4. On the integration tab find User ID and Access Token.
5. Update script with ID and token.
6. Extra documentation on the API can be found [Here](https://www.emailjs.com/docs/).

**Using the CoinGeko API:**

1. CoinGeko offers a free plan for the API that does not require signing up for it.
2. Going on the [documentation page](https://www.coingecko.com/en/api/documentation) provides information for each endpoint.
3. Expand endpoint of interest and click "Try it out", fill in parameters that match your query and click "Execute".
4. Use the generated URL to make the call to the API.
5. Along with the URL a response body preview and headers are also available to view in the description.

<details>
  <summary> (Expand) CoinGeko API Test </summary>

![Endpoint Test](/docs/misc/coingeko_api_test.png)
</details>

<details>
  <summary> (Expand) CoinGeko API response </summary>

![Endpoint Response](/docs/misc/coingeko_api_response.png)
</details>

## **Credits**

_I have followed dozens of projects and video tutorials trying to find the solutions that would fit this project.
Some influenced my approach on how to build this site and others were specific to a particular issue I encountered.
Any code that was borrowed has been modified and adapted to fit my particular needs._

**JavaScript/Jquery code:**

* Expression to validate if the input is in the form of an e-mail address from [StackOverflow](https://stackoverflow.com/a/9204568).
* To be able to find a building approach for the quiz I watched videos from [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY&list=PL2jRjGd6MDrTTDyM7MJNX50Pyf9AYeEma&index=7&t=2726s), [Florin Pop](https://www.youtube.com/watch?v=dtKciwk_si4&list=PL2jRjGd6MDrTTDyM7MJNX50Pyf9AYeEma&index=16&t=1870s), [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&list=PL2jRjGd6MDrTTDyM7MJNX50Pyf9AYeEma&index=8&t=1442s). The latter has been the most influential as it was the closest to what I was aiming for.
* The stopwatch feature in the quiz was built based on [Crypters Infotech](https://www.youtube.com/watch?v=EGD_A118efI&list=PL2jRjGd6MDrRDnC2R302N2rE0sRUinGyl&index=14&t=227s) 6-part tutorial.
* For using localStorage/sessionStorage which I used for the portfolio and the theme switch I followed [dcode](https://www.youtube.com/watch?v=k8yJCeuP6I8), [LogRocket](https://blog.logrocket.com/localstorage-javascript-complete-guide/#getitem).
* Approach in iterating localStorage from [StackOverFlow](https://stackoverflow.com/a/37507935).
* The approach in building the cryptocurrency portfolio from [Creepto](https://www.publish0x.com/creepto-on-crypto/diy-code-a-crypto-portfolio-manager-xpjjwll) and there are definite traces of his code in repo.
* Closest() method to target the entire row for removal in the portfolio I found on [Codepedia](https://codepedia.info/jquery-get-table-cell-td-value-div/).
* Syntax for generating dynamic elements with custom CSS from [StackOverFlow](https://stackoverflow.com/a/48754590).

**HTML/CSS**

* Using CSS Variables [Fireship](https://www.youtube.com/watch?v=NtRmIp4eMjs).
* CSS style for the Theme Switch checkbox was taken from [Online Tutorials](https://www.youtube.com/watch?v=z3TgmTi42ic).
* For the Quiz Info Modal I watched [Florin Pop](https://www.youtube.com/watch?v=XH5OW46yO8I).
* CSS for the custom buttons was inspired from [CSS Scan](https://getcssscan.com/css-buttons-examples).
* The pop-up in the e-mail form for invalid entries was taken from [W3 Schools](https://www.w3schools.com/howto/howto_js_popup.asp) in combination with [PreTagTeam](https://pretagteam.com/question/jquery-position-popup-in-relative-to-buttons) for positioning it on each input.

**Media**

* Quiz questions/ answers and layout from [CoinTelegraph](https://cointelegraph.com/quiz/think-you-know-the-crypto-basics-take-our-quiz-to-find-out).
* Quiz images from [Pexels](https://www.pexels.com/search/cryptocurrency/).
* 404 Page background image from [Stockvault](https://www.stockvault.net).

### **Code Institute colleagues who's work I followed for guidance:**

[Paul Meeneghan](https://github.com/pmeeny/CI-MS2-BicepMusicFanSite).

[Tara Rhoseyn](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame).

## **Acknowledgements**

* Special thanks to my mentor Mo Shami for his suggestions and guidance.
* My family for their encouragement and support.
* Special thanks to Neil from Student Care for helping me through a tough time and everyone else in the Student Care Team that touched bases making sure I am on track.
* The Code Institute team for all the effort and energy they put into creating and curating the content for this programme.

## Disclaimer

_This project is for educational use only and was created as a Milestone Project for the Code Institute Module of Interactive Frontend Development_

Developed by Cristian Buca