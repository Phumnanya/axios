This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

This project includes:

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

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
