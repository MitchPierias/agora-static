# ![Logo](/src/images/favicon-32x32.png | height=28) Agora Static
The static content delivery website for the Agora Application.

## Usage
Install all required dependencies before continuing.
```
npm install
```

#### Development
To run the static site in development mode with Gatsby, simply execute;
```
npm start
```
Hot loading will automatically trigger a build and refresh for any changes made within the `./src` directory.

#### Deployment
Before deploying it's important to build the optimised resources. You'll need to execute a build everytime you wish to publish updated code.
```
npm run build
```
Once you have your build files in `./public`, you can deploy to the configured S3 bucket with the following command.
```
npm run deploy
```
You'll need to have AWS credentials with S3 management permission configured in your `~/.aws/credentials` file.