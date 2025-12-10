This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

This project is a demonstration of how to use axios for api integration. the project includes:

✔ A landing page

"Login" button


✔ A login page

Email + password form

Successful login → redirect to Profile


✔ A profile page

Shows user info from API


✔ Axios setup file

Base URL

Interceptors for token refresh


✔ Navigation working between all pages

Landing → Login → Profile → Landing.

## 🧠 Understanding the Flow with a Simple Picture

1. User enters email & password

⬇️

2. POST /login → Receive access & refresh tokens

⬇️

3. Save tokens

⬇️

4. Use access token → GET /profile

⬇️

5. If access token expires → POST /refresh-token

⬇️

6. Retry failed request automatically
## Deploy on Vercel

The project id deployed live on:
