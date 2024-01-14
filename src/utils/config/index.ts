const DOMAIN = {
  development: 'http://127.0.0.1:3000',
  test: '',
  production: '',
};

let BASE_URL = '';

// #ifdef H5
if (process.env.NODE_ENV === 'development') {
  BASE_URL = DOMAIN.development;
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = DOMAIN.production;
}
// #endif

// #ifdef MP-WEIXIN
const envVersion = uni.getAccountInfoSync()?.miniProgram?.envVersion;
if (envVersion === 'develop') {
  BASE_URL = DOMAIN.development;
} else if (envVersion === 'trial') {
  BASE_URL = DOMAIN.production;
} else if (envVersion === 'release') {
  BASE_URL = DOMAIN.production;
}
// #endif

export { BASE_URL };
