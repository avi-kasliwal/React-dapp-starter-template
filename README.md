# React dApp Starter Template

A starter template to create dApps using React & Truffle. The template includes the following tools and library:

- Truffle (W/ rinkbey and HDwalletProvider)
- React 18 (W/ Hooks and Context API)
- Bootstrap
- Web3JS
- Dotenv (to store mnemonic secretly)
- A demo Smart Contract -> Simple Storage and UI to interact with it.

## How to use the template?

1. Clone the repository
   ```
   git clone https://github.com/avi-kasliwal/React-dapp-starter-template.git
   ```
2. install the dependent packages using :
   ```
   npm install
   ```
3. create a `.secret` file in the root directory and paste ur metamask mnemonic there. (Don't worry, your passphrase won't be shared on github as `.secret` is mentioned in the `.gitignore` file).
4. Compile and Migrate the demo smart contracts using:
   ```
   truffle migrate --network rinkbey --reset
   ```
5. Run your React UI using :
   ```
   npm start
   ```
6. Interact with the demo app and if everything looks good, you can get started by removing the boiler plate code!

## End message

If you have any feedback or have any doubts you can reach to me on my twitter handle : <a href='https://twitter.com/Kasliwal_Avi' target='_blank'>Kasliwal_Avi</a>.
Please star the repo if it helped you, will add more starter templates for different frameworks (like Next, React Native).
