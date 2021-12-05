require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender trip want reward stick come include argue metal gentle'; 
let testAccounts = [
"0x62b3d62aa890c4ed5cc12f72a8ffd274ab207c20421c937f0e8254da30496ceb",
"0x24cbcc1ad10ce56cf4baf7063854dfd5d955bf0f5d5246b4e9abdc86e2a1b346",
"0xc59fdbb73a2a1dd393e008bc696bda4ed046cb0c75e024645dac7bbe55a9ab4f",
"0x2c886ba238008560c6ceeacb186472186d95f8d3e982ffc24532fdfbfb717052",
"0x426aee5bbd7a05c1b161d301533936bf89ddd4df796572ded1dbc4cb34e2c3eb",
"0xf370c1bd09495f28af3d41fafd6e5eb31b50df3977f67da052f11395f0fd2f38",
"0xa1ae498019be29e0c9646de68a95252df5ef70460da9d6039c7b33e9d181ebf9",
"0x2d2cc9f0969dbb4456a58c3f054b25b57d61b84a73d3a0dacc5adf8245609291",
"0x2ae192843a35eaddf34d44236be7472a2e216b3d2dcb010d600c299c7a39cbd7",
"0xbd4df05e80fcdaa861c243863a332b2c6a9bf0e556036b41411ff3d9dcda837c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


