# Invg Test. Api Invgate extension

Provide a solution according the follow [spec](https://github.com/pablogottifredi/invg-coding-test/blob/master/spec-coding-test-full-stack.md)


## Requirements

Install this pre-requisites and follow the steps

* Docker CE
[Install Docker Community Edition version 18.09.04 or up](https://docs.docker.com/install/linux/docker-ce/ubuntu/) according this instructions
Need more help? Follow this instruction for [beginners users](https://github.com/pablogottifredi/invg-coding-test/blob/master/docker-beginner-install.md)

* Docker Compose cli
[Install Docker Compose cli](https://docs.docker.com/compose/install/)

  

## Getting started

### 1. Get from repo

Clone using your own credentials from repo [https://github.com/pablogottifredi/invg-coding-test.git](https://github.com/pablogottifredi/invg-coding-test.git)

  
```
$ git clone https://github.com/pablogottifredi/invg-coding-test.git
```

  

### 2. Access to subfolder

```
$ cd invg-coding-test
~:invg-coding-test$ cd coding-test-full-stack
```

  

### 3. Config your .env file

Copy .env.example and edit with the credentials provided

```
$ cp .env.example .env
$ vi .env
```

  

Keys to config

```

API_USERNAME=apiuser
API_PASSWORD=<a key>
API_AUTH_METHOD=basic

```

  

### 4. Run using docker-compose

All the environment is ready to use without aditional install

  

> Use ***docker-compose up -d*** into coding-test-full-stack folder

  

```
:~invg-coding-test/coding-test-full-stack$ docker-compose up -d
```

 
Ready!

  

## Environment info
Docker compose create a enviroment with

* An ***API Restfull*** in NodeJS v12 with endpoin required
* An ***Swagger-UI doc*** interface to open api spec and test
* An ***API Gateway*** in nginx to define the specific routing for nano/microservice

  

### Problem with ports?

When you launch **docker-compose up -d**, the project use the config in [docker-compose.yml](./api/docker-compose.yml) and [docker-compose.override.yml](./api/docker-compose.override.yml)

  

For develop pruposes are mapped directly the internal ports to external container. Specifically in [docker-compose.override.yml](./api/docker-compose.override.yml) file

  
See the config:
```
version: "3.5"
services:

api-invgate-facade:
...
ports:
- "5000:3000"

api-invgate-doc:
...
ports:
- "5001:8080"
...

api-invgate-gateway:
...
ports:
- "5003:80"

```

  
This project **only needs the api gateway port opened***. If you have ports listen in ***5000,5001*** you can delete this config or change

  
> ***Warning!***
>
> If you change the ***api-invgate-gateway port***, you must change the routes in the [api documentation](./api/doc/invgate.api.v2.openapi.json) if you want still use Swagger-UI enviroment to test

  

### Name of containers and networks

We use ***stronger names*** to containers, you could have problems if you have duplicated names

* API Restfull NodeJS v12 use ***api-invgate-facade***
* API Doc use ***api-invgate-doc***
* API Gateway use ***api-invgate-gateway***

  
#### Do you need see logs?
Open a terminal with each log

 
For API Node
```
$ docker container logs api-invgate-facade -f
```

For API Gateway
```
$ docker container logs api-invgate-gateway -f
```

  

### How to test?

You can test the api using [CURL](https://curl.haxx.se/docs/manpage.html)

  

For API Node

```
$ curl -X GET "http://localhost:5003/api/v2/incidents.by.helpdesk/search/?helpdesk_id=12" -H "accept: application/json"
```

 Or be a human being and test accross the documentation interface


> Open in a terminal **http://localhost:5003/api/doc/**