/* jshint esversion: 8 */

// Each question object is structured with keys for: question text, array with answer choices, 
// correct choice and extra validation message for correct choice.

const questions = [
  {
    question: "Which mining algorithm does Monero use?",
    choices: ["CryptoNight", "RandomX", "SHA-256"],
    correct: "RandomX",
    validation: "Monero upgraded to RandomX, a new mining algorithm that claims to be ASIC-resistant, at the start of December 2019.",
  },
  {
    question: "Which tokens are traded on crypto exchanges?",
    choices: ["ERC-20", "ERC-721", "Nonfungible tokens"],
    correct: "ERC-20",
    validation: "These tokens, designed for use on the Etherium platform, are available on a plethora of exchanges.",
  },
  {
    question: "How is the Unspent Transaction Output, or UTXO, best described?",
    choices: ["It's like having a bank account", "It's like paying with cash", "The main model used by Ethereum"],
    correct: "It's like paying with cash",
    validation: "This special transaction resends unspent coins from every transaction - kind of like receiving change after paying with a banknote.",
  },
  {
    question: "Which is most likely to result in crypto being sent to the wrong address?",
    choices: ["Copying and pasting the address", "Always check the first and last four letters of the crypto address, as well as a few in the middle",  "Test the address with a small transaction before making a substantial deposit"],
    correct: "Copying and pasting the address",
    validation: "This can be incredibly risky, as clipboard-kidnapping software could place another wallet address in place of the correct one.",
  },
  {
    question: "Who is the proud CEO of Changelly?",
    choices: ["Elon Musk", "Eric Benz", "Gavin Belson", "Dr. Ruja Ignatova"],
    correct: "Eric Benz",
    validation: "A crypto expert and a big believer in both mass adoption and Changelly's mission to make crypto as accessible as possible.",
  },
  {
    question: "What's the biggest advantage of using a centralized exchange?",
    choices: ["Higher liquidity and a higher amount of trading pairs", "No trading limits", "Users get total ownership of their funds"],
    correct: "Higher liquidity and a higher amount of trading pairs",
    validation: "With centralized exchanges, it can be easier to swap between a greater number of fiat currencies and cryptos, and find an appropriate buyer or seller quickly.",
  },
  {
    question: "What is the main benefit of dollar-pegged coins?",
    choices: ["All of them are officially audited", "They avoid price fluctuations by using mechanisms so their value remains close to the U.S. dollar", "Major stablecoins such as Tether are easy to sell for USD"],
    correct: "They avoid price fluctuations by using mechanisms so their value remains close to the U.S. dollar",
    validation: "Dollar-pegged coins are especially useful for those who want to protect their capital from dramatic price swings in the crypto market.",
  },
  {
    question: "Which Country is strictest about initial coin offerings?",
    choices: ["United States", "Singapore", "Switzerland"],
    correct: "United States",
    validation: "Some critics argue that many ICOs count as securities, meaning they should fall under regulatory oversight. This has led many crypto startups in foreign countries to stop U.S. citizens from participating.",
  },
  {
    question: "Which of these is not a risk associated with cryptocurrency trading?",
    choices: ["Trading only takes place during U.S. business hours, so it's easy to miss out on price movements", "Funds in exchanges can be put at risk if the trading platform is shut down, hacked or bankrupted by its owners", "The industry is largely unregulated, so many of the policies offered by crypto exchanges are not enforceable"],
    correct: "Trading only takes place during U.S. business hours, so it's easy to miss out on price movements",
    validation: "This isn't actually true. A lack of centralized governance means it's possible to buy and sell cryptocurrencies 24/7",
  },
  {
    question: "How can you prevent falling victim to a fraudulent exchange?",
    choices: ["Rely on reviews of crypto exchanges from high-profile YouTubers", "Find crypto exchanges that offer free giveaways and high rates of returns", "Bookmark login pages and check the address bar before committing your password"],
    correct: "Bookmark login pages and check the address bar before committing your password",
    validation: "Although there are no guarantees that this is bulletproof, always double-checking a page thoroughly before you log in can prevent details being compromised.",
  },
  {
    question: "Finish the sentence: When buying a crypto asset, you should…",
    choices: ["Only invest as much as you can afford to lose", "Rely on data that shows price movements over the past 24 hours", "Follow what popular crypto analysts on Twitter are doing"],
    correct: "Only invest as much as you can afford to lose",
    validation: "Always remember that cryptocurrencies are extremely volatile — and there’s no predicting what will happen next. By investing conservatively, you can shield yourself against the risk of losing your hard-earned funds.",
  }
];