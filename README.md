# Next.js 15 API Route Error Handling Bug

This repository demonstrates a common error in Next.js 15 applications involving API route error handling.  The client component doesn't gracefully handle potential errors from the API, resulting in inconsistent user experience.  The solution improves error handling for a more robust application.

## Bug

The `pages/api/data.js` route simulates an API call that may fail randomly. The `pages/index.js` component fetches data from this route.  If the API call fails, the component may not display an appropriate error message or loading indicator. 

## Solution

The solution includes improved error handling on the client-side to provide the user with feedback when the API request fails. It displays an error message to the user and handles potential issues during data fetching.