export const BASE_URL = 'https://api.coincap.io/';
export const COINCAP_ASSETS = `${BASE_URL}v2/assets`;

export const HISTORY_ASSET_API = (_, currency) => (`https://api.coincap.io/v2/assets/${currency}/history?interval=h1&end=${Date.now()}&start=${Date.now() - 43200000}`);
