const withCSS = require("@zeit/next-css")

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: "Credflow",
        API_DEVELOPMENT: "http://localhost:8000/api",
        PRODUCTION: false,
        DOMAIN_DEVELOPMENT: "http://localhost:3000",
        FB_APP_ID: "620128408735150",
        // DISQUS_SHORTNAME = 'innovarious-net'
    }
});
