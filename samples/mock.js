require('dotenv').load();

module.exports = {
    configure: {
        mode: process.env.APP_MODE,
        url: process.env.APP_URL,
        shopId: process.env.APP_SHOP_ID,
        token: process.env.APP_TOKEN
    }
};
