This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project develops the user interface of a cinema, which has three types of roles: director, administrator and worker. The first one manages the creation of points (multiplex), movies, administrators and statistics of the cinema in general. The second one manages the update of the points that a customer gets for the purchase of a ticket or snack and the creation of schedules for each movie. The third manages the sale of snacks, movies and the customer's rating for the services and the movie.

![ezgif com-video-to-gif](https://github.com/Johan-FF/Cinema-Interface---React-Next-js/assets/94552691/e2ac3672-1850-42eb-8b53-fe0d1ad83e36)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Website

You can also log on to the website: [Cinema-Interface---React-Next-js](https://johan-ff.github.io/Cinema-Interface---React-Next-js/). If you have problems in the operation explore the repositories of the backend used in this project: [CinePacho-microservice-Multiple](https://github.com/AndresSArias/CinePacho-microservice-Multiple.git) y [CinePacho-microservice-Users](https://github.com/AndresSArias/CinePacho-microservice-Users.git).

## Profiles

To explore the operation log in with:

- Director:
    User: 9999999999
    Password: 1234
- Administrator:
    User: 222
    Password: 1234
- Employee:
    User: 333
    Password: 1234

## Configuration

If you want to customize the backend url access src/environment/index.ts and modify:

~~~
export const API_URL_USER = '...'
export const API_URL_MULTIPLEX = '...'
...
~~~

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
