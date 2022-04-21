## Translation with Caching


### Task
- Create a web server with a RESTful API to translate a text from one language to another.
- For the actual translation, an external service like Google Translate can be used.


### Tech stack used
-  `NodeJS` & `ExpressJS` 
-  `Google translate` as an external service for actual translation.
-  `node-cache` package for caching.
-  `Jest` to test the APIs.

## Install Dependencies

```
npm install

```
## To start
```
npm run server

```


## Usage 
```
For translation use the following url:

### URL: (http://localhost:8000/speechtranslator) 


# URL: (http://localhost:8000) 

```
## Caching 
In order to avoid repeated hits to the translation API, caching of translation is done.

If the HTTP method is `GET` then we cache the translation.
first time when a unique request is made it will take actual time to fetch the response. After that it get stored in cached for some time(here in this project I use 10 seconds but can be modified as need.). Now after each time if same request is made it will get fetched from cached translation.

For this I use `node-cache` npm package.

## Testing
Testing on our REST API is done using `jest` along with `supertest`(which provide less complex structure to handle request.)

Test cases where written to provide whether the the request return statusCode as **200**.

- To test the APIs.
  ```
  # Test during development mode
  npm run jest:watch

  # Test once on hitting this command
  npm jest
  ```
