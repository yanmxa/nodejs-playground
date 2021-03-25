## Building a NodeJS, TypeScript Rest API with MySQL

### Set up Node.js Project Environment

```
mkdir *
cd *
npm init -y
npm install express body-parser mysql2 dotenv
npm install typescript --save-dev
npm install @types/node @types/express @types/body-parser @types/mysql @types/dotenv --save-dev
```

initialize our project as a Typescript project

```
npx tsc --init
```

This will add the tsconfig.json(Optional)

```
"compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
}
```

modify the start srcipt in the package.json (Optional)

```
"scripts": {
    "start": "tsc && node dist/app.js",
},
```

### Create the .env file

```
PORT=3000
DB_HOST="localhost"
DB_USER="username"
DB_PWD="****"
DB_NAME="test"
```

### Define new types for the API

### Connect to the database

db.ts

### Define database operations

### Dev

```
npm install -g nodemon
npm install -g ts-node

nodemon -e ts,tsx --exec ts-node src/app.ts
```
