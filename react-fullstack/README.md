### init project and add dependencies

```
npm init -y
yarn add -D @types/node typescript
yarn add -D ts-node
npx tsconfig.json

yarn add -D nodemon
```

### config package.json script with

```
    "watch": "tsc -w",
    // yarn watch -> compling src/index.ts change to build/dist/index.js
    "dev": "nodemon build/dist/index.js",
    // yarn dev re-run the index.js if it changed
    "start": "node build/dist/index.js",
    "dev2": "nodemon --exec ts-node src/index.ts",
    "start2": "ts-node src/index.ts"
```

### add orm
```
yarn add @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations @mikro-orm/postgresql pg
```
