# marvel-movies-api-mern-d3

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / TypeScript / Material UI / Coingecko API

https://github.com/coding-to-music/marvel-movies-api-mern-d3

https://marvel-movies-api-mern-d3.herokuapp.com

by jlesage julielesage Julie Lesage https://github.com/julielesage

https://github.com/julielesage/Marvel_backend

```java
const secret = process.env.JWT_SECRET;
mongoose_1.default.connect(`${process.env.MONGODB_URI
```

## Deploying to Render

This plugin will extract info from Heroku and put it into a Docker file.

```java
heroku plugins:install @renderinc/heroku-import
```

Output:

```java
warning ../../../package.json: No license field
warning ../../../../../../package.json: No license field
warning "eslint-config-oclif > eslint-config-xo-space@0.27.0" has incorrect peer dependency "eslint@>=7.20.0".
warning "eslint-config-oclif > eslint-plugin-mocha@9.0.0" has incorrect peer dependency "eslint@>=7.0.0".
warning "eslint-config-oclif > eslint-plugin-unicorn@36.0.0" has incorrect peer dependency "eslint@>=7.32.0".
warning "eslint-config-oclif > eslint-config-xo-space > eslint-config-xo@0.35.0" has incorrect peer dependency "eslint@>=7.20.0".
warning "eslint-config-oclif > eslint-plugin-unicorn > eslint-template-visitor@2.3.2" has incorrect peer dependency "eslint@>=7.0.0".
warning "eslint-config-oclif > eslint-plugin-unicorn > eslint-template-visitor > @babel/eslint-parser@7.16.3" has incorrect peer dependency "eslint@^7.5.0 || ^8.0.0".
Installing plugin @renderinc/heroku-import... installed v1.1.0
```

```java
heroku render:import --app marvel-movies-api-mern-d3
```

Output:

```java

=== Gathering information about Heroku app
Verifying Heroku app exists and CLI is logged in... ✔️
Verifying app is using a single, official Heroku buildpack... ✔️
Getting stack image... heroku-20
Getting and translating plan... Heroku Free $0/mo --> Render Free $0/mo
Getting instance count... 1
Getting custom domains... 0 custom domain(s)
Getting environment variables... 2 environment variable(s)
Getting add-ons... 0 add-on(s)

? Select addons to import.

Create render.yaml file and Dockerfile.render? This will overwrite any existing files with the same name. (y/n): y
Generating render.yaml file... done
Generating Dockerfile.render... done

=== Environment variables excluded from render.yaml
The following environment variables were not included in the generated
  render.yaml file because they potentially contain secrets. You may need to
  manually add them to your service in the Render Dashboard.

- JWT_SECRET:

=== Follow these steps to complete import of service(s) and database(s) to Render
1. Add, commit, and push the generated render.yaml and Dockerfile.render to GitHub or GitLab.
2. Go to https://dashboard.render.com/select-repo?type=iac
3. Search for and select this repository.
4. Verify the plan showing the resources that Render will create, and
   then click 'Create New Resources'.
5. After the resources are deployed, you may need to manually add
   the above environment variables to your Web Service in the Render Dashboard.
   They were not included in the generated render.yaml because they potentially
   contain secrets.
```

# Marvel fan website backend

react full-stack project  
<img src="https://j.gifs.com/6XNzjR.gif" width="100%" />

## Corresponding front :

github : https://github.com/julielesage/Marvel_frontend  
web : https://nervous-banach-1483d9.netlify.app/

## OVERVIEW : calling official MARVEL API REST

MARVEL

Get characters by order, by name  
Get comics by order, by title, by included character  
Get favorites from cookie by id

USERS

Sign Up  
Log In

## PACKAGES

- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Express](https://www.npmjs.com/package/express)
- [Cors](https://www.npmjs.com/package/cors)
- [Axios](https://github.com/axios/axios)
- [express-formidable](https://www.npmjs.com/package/express-formidable)  
  \_ [dotenv](https://www.npmjs.com/package/dotenv)

## Running the project

Clone this repository :

```
git clone https://github.com/julielesage/Marvel_backend.git
cd Marvel_backend
```

Install packages :

```
npm install
```

When installation is complete :

```bash
npm start
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/marvel-movies-api-mern-d3.git
git push -u origin main
```

## Heroku

```java
heroku create marvel-movies-api-mern-d3
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set JWT_SECRET="secret"

heroku config:set PUBLIC_URL="https://marvel-movies-api-mern-d3.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```
