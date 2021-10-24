# **My Crypto**

## **You can find the deployed website**

# **User Experience**

The webapp is designed as an interactive project that gives the user the ability to build a crypto-currency portfolio that is stored on their own computer without having to share their data with 3rd parties.

# **Strategy**

##  **Project Goals**
* Use crypto-currency APIs to display relevant data to the user.
* Offer the user the ability to build their portfolio on our platform.
* Offer the user a interactive way of learning more about blockchain and testing their knowledge.
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

### **Colour Scheme**


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

[Home Page]

[Portfolio]

[Quiz]

[Email Modal]

## **Features**

### **Landing Page**

<details>
  <summary> (Expand) Currency badges displaying up-to-date information.</summary>

![Currency Badge]()
![Currency Badge on interaction]()
</details>

The Landing Page features a grid displaying major crypto-currencies and their current prices. Currencies are organized by market capitalization in descending order. Each currency is displayed in it's own badge that the user can interact with by mouse hover (or tap on touch devices), to access 24-hour high and low prices.

*User stories solved by this feature:*

1 - As a new user, I want to see recent data on major crypto-currencies by market capitalization.




