# Dexcom Code Challenge

## About This

This is a code challenge requested by Dexcom and submitted by [Albert Sanchez](https://www.linkedin.com/in/albertsaniza).

## Requirements

-   [NodeJs LTS](https://nodejs.org/en/) v18.16.0
-   [NPM](https://nodejs.org/en/) v9.5.1
-   [Yarn](https://classic.yarnpkg.com/lang/en/docs/install) v1.22.19

## Getting Started

```bash
# Make a copy or repo on your system
$ git clone git@github.com:AlbertSanIza/dexcom-code-challenge.git
$ cd dexcom-code-challenge

# Install dependencies
$ yarn install

# Run Dev
$ yarn dev

# Unit Testing
$ yarn test

```

Open http://localhost:3000 with your browser to see the result.

Open https://dexcom-code-challenge.vercel.app with your browser to see the online result.

You can also try each solution with your own values by performing the following curl operations:

[Problem 1](https://github.com/AlbertSanIza/dexcom-code-challenge/blob/main/solutions/problem-1.ts)

```bash
curl --location 'http://dexcom-code-challenge.vercel.app/api/problem/1' \
--header 'Content-Type: application/json' \
--data '{
    "nums": [4, 3, 2, 7, 8, 2, 3, 1]
}'
```

[Problem 2](https://github.com/AlbertSanIza/dexcom-code-challenge/blob/main/solutions/problem-2.ts)

```bash
curl --location 'http://dexcom-code-challenge.vercel.app/api/problem/2' \
--header 'Content-Type: application/json' \
--data '{
    "nums": [3, 2, 4],
    "target": 6
}'
```

## Open Source Tools

Some the open source tools I used:

-   [NextJS](https://nextjs.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [React Code Block](https://github.com/rajinwonderland/react-code-blocks)
