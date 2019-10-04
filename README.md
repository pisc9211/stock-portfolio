# Stock-Portfolio
Stock-Portfolio is a web-based stock portoflio app created for the second assessment of the [TTP](https://www.techtalentpipeline.nyc/) interview process.

**Because of the api limit, app will often show NaN for portfolio prices. To fix, please wait a but and refresh.

## Technologies
* React
* Node
* Express
* MongoDB + Mongoose
* Firebase
* Bootstrap
* Moment
* API: [Alpha Vantage](https://www.alphavantage.co/)

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Features/Requirements

1. Create a new account with my name, email, and password.
  - - [x] Default the user’s cash account balance to $5000.00 USD.
  - - [x] A user can only register once with any given email.
  
![Register Demo](http://g.recordit.co/EqyOE2fZ1t.gif)


2. I want to authenticate via email and password so that I can access my account.

![Authenticate Demo](http://g.recordit.co/R33QdY8d53.gif)


3. I want to buy shares of stock at its current price by specifying its ticker symbol and the number of shares so that I can invest.
  - - [x] A user can only buy whole number quantities of shares.
  - - [x] A user can only buy shares if they have enough cash in their account for a given purchase.
  - - [x] A user can only buy shares if the ticker symbol is valid.
  
  ![Buying Stock Demo](http://g.recordit.co/vWGw5BYhcg.gif)
  
4. I want to view a list of all transactions I’ve made to date (trades) so that I can perform an audit.

5. I want to view my portfolio (a list of all the stocks I own along with their current values) so that I can review performance.
- - [x] Current values should be based on the latest price and quantity owned for a given stock.
- - [x] Each stock owned should only appear once.

6. I’d like to see the font color of stock symbols and current prices inmy portfolio change dynamically to indicate performance.
- - [x] Display red when the current price is less than the day’s open price.
- - [x] Display grey when the current price is equal to the day’s open price.
- - [x] Display green when the current price is greater than the day’s open price.
  

![Transaction + Ticker Color Demo](http://g.recordit.co/JGtFBtzYzM.gif)


## TODO
- [ ] Fix register button on deployed app color
- [ ] General Styling
- [ ] Make transaction's list more clear (price is for single stock, not total price)
- [ ] Fix the date of purchase. Deployed app seems to save the date as the date of deployment
- [ ] Smarter api queries to reduce query number to api
