require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hockey prison suspect venture strong rival ridge protect inner praise army genre'; 
let testAccounts = [
"0x298f427612708c223027b9b5295b97a32635ec680db17d2813f725de287e6fe4",
"0xa8147dd54b5437a15a6d278dca63e51f82a1f3712a6a4e6be9170010f17e0c01",
"0xf0c04cc576ecf2afbe427e4621d661e2517102b54f98694cfda05486f9366af0",
"0x10e93dcc2d9038c64ef0859d156e7d4da176c70bf86dc9fb2829689b12cae984",
"0xee680acdc8aa8a843e5ee04794eed2df964ed42297c18413146a0e3a7d5941ac",
"0x3dd1eb9a0f669b6e5fc09f702d694e18dfca86bdc5505c0d8bfde08f29e2b7df",
"0xc777b5519b46fb56cd1bc2cb5be1674cf77553d8f1b2801df65395c78a1d0d93",
"0x5fa726b2e314234b12b452f08a6d7a5167418fb378329c97c7d5558cf0577255",
"0xd3d834b062bdeddc6bb3e8e25c15ea597bed573974efb29a881ac541c1ac93e7",
"0xe1c126498a65e6485c08fd9013eedbbd0ce89cbc9954df60a8c78eb9b9c6018b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

