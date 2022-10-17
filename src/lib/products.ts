const methods = [
  {
    symbol: 'USDT',
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644469782586-USDT.png',
    contract_address: '0x20a7d9bb6bdec7a83ff4877cb5d511cb4d018701',
    decimals: 18,
  },
  {
    symbol: 'MATIC',
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644572785333-matic.png',
    contract_address: '0x218bf144a617704d6a405689e8a5b32e6bed0668',
    decimals: 4,
  },
  {
    symbol: 'BNB',
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644562410225-bnb.png',
    contract_address: '0x9468bbb78f114abdeb4c84ee38b2c29774e40ce4',
    decimals: 8,
  },
  {
    symbol: 'SLP',
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644472039538-SLP.png',
    contract_address: '0xcf000af64b24c532c1bb580bbd66d50dfe2a4172',
    decimals: 0,
  },
  {
    symbol: 'DAI',
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644472018532-DAI.png',
    contract_address: '0x1dacb80e3f3100175a62fd0dbc56832ac4538be4',
    decimals: 2,
  },
  {
    symbol: 'USDC',
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644472000222-USDC.png',
    contract_address: '0x3d471e00c5fc6728aac0c450c89741cbf618fd5f',
    decimals: 2,
  },
];

export interface Product {
  id: number;
  fiat_price: number;
  fiat: string;
  price: number;
  symbol: string;
  decimals: number;
  icon: string;
  contract_address: string;
}

export const solanaProducts = [
  {
    id: 26588,
    fiat_price: 300,
    fiat: 'PHP',
    price: 9.1143,
    symbol: 'MATIC',
    decimals: 4,
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644572785333-matic.png',
    contract_address: '9jtWhaRL9wysgWjXPTBBzyPa7CNP9zMMiDZR87tgVNDR',
  },
  {
    id: 2658,
    fiat_price: 300,
    fiat: 'PHP',
    price: 7.53,
    symbol: 'USDT',
    decimals: 6,
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644469782586-USDT.png',
    contract_address: '9jtWhaRL9wysgWjXPTBBzyPa7CNP9zMMiDZR87tgVNDR',
  },
  {
    id: 26169,
    fiat_price: 450,
    fiat: 'PHP',
    price: 11.28,
    symbol: 'USDT',
    decimals: 6,
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644469782586-USDT.png',
    contract_address: '9jtWhaRL9wysgWjXPTBBzyPa7CNP9zMMiDZR87tgVNDR',
  },
];

export const metamaskProducts = [
  {
    id: 26588,
    fiat_price: 300,
    fiat: 'PHP',
    price: 9.1143,
    symbol: 'MATIC',
    decimals: 4,
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644572785333-matic.png',
    contract_address: '0x218bf144a617704d6a405689e8a5b32e6bed0668',
  },
  {
    id: 2658,
    fiat_price: 300,
    fiat: 'PHP',
    price: 7.53,
    symbol: 'USDT',
    decimals: 6,
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644469782586-USDT.png',
    contract_address: '0x9468bbb78f114abdeb4c84ee38b2c29774e40ce4',
  },
  {
    id: 26169,
    fiat_price: 450,
    fiat: 'PHP',
    price: 11.28,
    symbol: 'USDT',
    decimals: 6,
    icon: 'https://storage.googleapis.com/xld-token-cloud-dev.appspot.com/1644469782586-USDT.png',
    contract_address: '0x9468bbb78f114abdeb4c84ee38b2c29774e40ce4',
  },
];
