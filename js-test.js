var sss = require('bip39-sss-js-sdk')
var bip39 = require('bip39')

const generated_mnemonic = bip39.generateMnemonic();
console.log("new mnemonic: \n", generated_mnemonic )

const example_mnemonic = 'cheese camera power depend assist old milk regular quantum require eager impulse';
console.log('mnemonic ', example_mnemonic)
 
// Generate 3 shares and require 2 to recover the mnemonic
const shares_example_mnemonic_3_2 = sss.splitMnemonic(example_mnemonic, 3, 2);
const shares_example_mnemonic_5_3 = sss.splitMnemonic(example_mnemonic, 5, 3);
console.log('shares_example_mnemonic_3_2 ', shares_example_mnemonic_3_2)
console.log('shares_example_mnemonic_5_3 ', shares_example_mnemonic_5_3)

const shares_generated_mnemonic_3_2 = sss.splitMnemonic(generated_mnemonic, 3, 2);
const shares_generated_mnemonic_5_3 = sss.splitMnemonic(generated_mnemonic, 5, 3);
console.log('shares_generated_mnemonic_3_2 ', shares_generated_mnemonic_3_2)
console.log('shares_generated_mnemonic_5_3 ', shares_generated_mnemonic_5_3)



// const splits1A = {
//   '1': 'guitar tissue guard maple best blanket method balcony upset symptom staff either',
//   '2': 'pond era cube dragon wood abandon wheat yard convince gasp grace capable'
//   // '3': 'transfer mixed window youth toss minute welcome forward husband arm void believe'
// };

// const splits2A = {
//   // '1': 'guitar tissue guard maple best blanket method balcony upset symptom staff either',
//   '2': 'pond era cube dragon wood abandon wheat yard convince gasp grace capable',
//   '3': 'transfer mixed window youth toss minute welcome forward husband arm void believe'
// }

// const splits3A = {
//   '1': 'guitar tissue guard maple best blanket method balcony upset symptom staff either',
//   // '2': 'pond era cube dragon wood abandon wheat yard convince gasp grace capable',
//   '3': 'transfer mixed window youth toss minute welcome forward husband arm void believe'
// }

// const splits1B = {
//   '1': 'logic foam lyrics blur patch father lock nut correct frame devote exclude',
//   '2': 'include digital render easy economy amazing now faith mind marine victory corn'
//   // '3': 'strategy elder olive guard twenty solar occur imitate basket glory merit artwork'
// };

// const splits2B = {
//   // '1': 'logic foam lyrics blur patch father lock nut correct frame devote exclude',
//   '2': 'include digital render easy economy amazing now faith mind marine victory corn',
//   '3': 'strategy elder olive guard twenty solar occur imitate basket glory merit artwork'
// };

// const splits3B = {
//   '1': 'logic foam lyrics blur patch father lock nut correct frame devote exclude',
//   // '2': 'include digital render easy economy amazing now faith mind marine victory corn',
//   '3': 'strategy elder olive guard twenty solar occur imitate basket glory merit artwork'
// };


// console.log("splits1A: ", splitMnemonic.recoverMnemonic(splits1A))
// console.log("splits2A: ", splitMnemonic.recoverMnemonic(splits1A))
// console.log("splits3A: ", splitMnemonic.recoverMnemonic(splits1A))

// console.log("splits1B: ", splitMnemonic.recoverMnemonic(splits1B))
// console.log("splits2B: ", splitMnemonic.recoverMnemonic(splits1B))
// console.log("splits3B: ", splitMnemonic.recoverMnemonic(splits1B))