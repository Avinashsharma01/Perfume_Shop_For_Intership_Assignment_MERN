// Environment configuration for the React application
const config = {
    // API base URL - use the environment variable if available, otherwise default to localhost
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',

    // Flag to determine if we're in development mode
    isDevelopment: import.meta.env.DEV,

    // Application version
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
};

export default config;
