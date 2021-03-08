# Start a REST API with nodejs and typescript

### Init the project

```
mkdir nodejs-typescript-api
cd nodejs-typescript-api
npm init --yes
```

### Install the typescript and tsc --init

```
sudo npm i -g typescript -D
or npm i typescript -D

tsc --init
```

### Compile the app.ts file to app.js file and run app.js

```
tsc
node app.js
```

### Install the @types/node

[This package contains type definitions for Node.js](http://nodejs.org)

```
npm install -D @types/node
npm i @types/node -D
```

After install the @types/node pacakge you can use modules such as http

### Run the watch to convert app.ts to app.js immediately

```
command + shift + p  ->  Tasks: run build Task
tsc: build - tsconfig.json
```

### run app.js

```
node app.js
```

### Install pm2 and rerun app.js

```
npm -install pm2 -D
npm install pm2@latest -g


pm2-dev app.js
```
