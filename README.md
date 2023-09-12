This is a [Next.js](https://nextjs.org/) project resolving [`SpaceX-cargo-planner`](https://github.com/Fourmeta/spacex-cargo-planner).

To see the result visit [https://spacex-cargo-planner-anddan.vercel.app](https://spacex-cargo-planner-anddan.vercel.app)

## In case you want to run app locally on your device

Install and run [json-server](https://github.com/typicode/json-server#getting-started) to load data from local json file:

```bash
npm install -g json-server

json-server --watch --port 4000 ./public/data/shipments.json
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
