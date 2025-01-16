const isProduction = process.env.NODE_ENV === 'production';

export const baseUrl = isProduction ? "/website/" : "/";
