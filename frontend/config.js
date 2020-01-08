import getCOnfig from "next/config"

const { publicRuntimeConfig } =  getCOnfig()

export const API = publicRuntimeConfig.PRODUCTION ? "https://credflow.com" : "http://localhost:8000/api";

export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const DOMAIN = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.DOMAIN_PRODUCTION
    : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;

// export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;