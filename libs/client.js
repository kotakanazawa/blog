import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'gatsby-microcms-sample',
  apiKey: process.env.API_KEY,
});
