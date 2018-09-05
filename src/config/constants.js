const URLS = {
  BACKEND_URL: 'http://localhost:8000',
  FRONTEND_URL: 'http://localhost:3000',
};

const env = process.env.NODE_ENV;
if ((env === 'production') || (env === 'staging')) {
  URLS.BACKEND_URL = 'https://everyday-education-backend.now.sh';
  URLS.FRONTEND_URL = 'https://everyday-education.netlify.com';
}


export { URLS };
