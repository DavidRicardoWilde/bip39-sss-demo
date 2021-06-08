import { recoverMnemonic, splitMnemonic, generateTwelveWordsMnemonic, getEntropyByMnemonic} from "bip39-sss-js-sdk"
import { pick } from 'lodash'
const Web3 = require("web3")
// import Web3 from "web3";

const example_mnemonic = 'cheese camera power depend assist old milk regular quantum require eager impulse';
console.log('example mnemonic\n', example_mnemonic);
const shares_example_mnemonic_3_2 = splitMnemonic(example_mnemonic, 3, 2);
const shares_example_mnemonic_5_3 = splitMnemonic(example_mnemonic, 5, 3);
console.log('shares_example_mnemonic_3_2 ', shares_example_mnemonic_3_2);
console.log('shares_example_mnemonic_5_3 ', shares_example_mnemonic_5_3);

const generated_mnemonic = generateTwelveWordsMnemonic();
console.log("new mnemonic\n", generated_mnemonic);
const shares_generated_mnemonic_3_2 = splitMnemonic(generated_mnemonic, 3, 2);
const shares_generated_mnemonic_5_3 = splitMnemonic(generated_mnemonic, 5, 3);
console.log('shares_generated_mnemonic_3_2 ', shares_generated_mnemonic_3_2);
console.log('shares_generated_mnemonic_5_3 ', shares_generated_mnemonic_5_3);
console.log('entropy is: ', getEntropyByMnemonic(generated_mnemonic));
// mnemonicToSeed(generated_mnemonic).then((data) => {
//     console.log('seed is: ', data)
// })
// console.log('seed sync is: ', mnemonicToSeedSync(generated_mnemonic));

const split_1_3_for_example_3_2 = pick(shares_example_mnemonic_3_2, ["1", "3"]);
const split_2_3_for_example_3_2 = pick(shares_example_mnemonic_3_2, ["2", "3"]);
const split_2_for_example_3_2 = pick(shares_example_mnemonic_3_2, ["3"]);
console.log("recoverd example mnemonic is: ", recoverMnemonic(split_1_3_for_example_3_2))
console.log("recoverd example mnemonic is: ", recoverMnemonic(split_2_3_for_example_3_2))
console.log("(error)recoverd example mnemonic is: ", recoverMnemonic(split_2_for_example_3_2))


const split_1_3_5_for_generated_5_3 = pick(shares_generated_mnemonic_5_3, ["1", "3", "5"]);
const split_2_3_4_for_generated_5_3 = pick(shares_generated_mnemonic_5_3, ["2", "3", "4"]);
const split_1_2_2_for_generated_5_3 = pick(shares_generated_mnemonic_5_3, ["1", "2", "2"]);
console.log("recoverd example mnemonic is: ", recoverMnemonic(split_1_3_5_for_generated_5_3))
console.log("recoverd example mnemonic is: ", recoverMnemonic(split_2_3_4_for_generated_5_3))
console.log("(error)recoverd example mnemonic is: ", recoverMnemonic(split_1_2_2_for_generated_5_3))

// const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed4.binance.org/"));
// console.log("account info: ", web3.eth.accounts.create(mnemonicToEntropy(generated_mnemonic)))

const web3 = new Web3(
    new Web3.providers.HttpProvider("https://rinkeby.infura.io/")
  );
// console.log(web3);
console.log("account info: ", web3.eth.accounts.create(getEntropyByMnemonic(generated_mnemonic)))