![Logo](https://i.ibb.co/pjK6HSv/kantina-Logo.png)

# Kantina App

A mobile application created with the aim of making school canteens more efficient. The main idea is that the app would be delivered to each school with a unique ID. Then, students would create an account and make their purchases (breakfast, lunch) directly from the app (there would also be the possibility to make future purchases). And finally, when they arrive at their school canteen, they would show a QR code to the vendor and the vendor would deliver their products.




## API and Client startup instruction

First, install all dependencies with npm (In their respective folders)
```bash
  npm install 
```

Second, run the API with:
```bash
  npm run dev
```
For the Client use:
```bash
  npm start
```
## API Environment Variables

To run this project, you will need to add the following environment variables to your .env file in "API" folder.

#### MONGODB VARIABLES:

`DB_GETWAY`

`PORT`

#### JSONWEBTOKEN VARIABLES:

`SECRET_WORD`


#### AWS S3 VARIABLES:

`AWS_BUCKET_NAME`

`AWS_BICKET_REGION`

`AWS_ACCESS_KEY`

`AWS_SECRET_KEY`

#### STRIPE VARIABLES:

`PUBLISHABLE_KEY`

`SECRET_KEY`

## Client Environment Variables

Also you will need to add the following environment variables to your .env file in "Client" folder.


#### SERVER VARIABLES:

`BACKEND_URL`

#### STRIPE VARIABLES:

`PUBLISHABLE_KEY`
## API Reference

**NOTE:** Protected routes needs a Token. Token have to be sended by Header with the Follow form: `Bearer token`

#### AUTHENTICATION CONTROLLERS

```http
  POST /api/publicAuth/
```

| Body     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `email`  | `string` |  `false`   | **Required**.  Email of the new user. |
| `name`  | `string` |  `false`   | **Required**.  Name of the new user. |
| `password`  | `string` |  `false`   | **Required**.  Password of the new user. |
| `genre`  | `string` |  `false`   | **Required**.  Genre of the new user. It can only be one of these: 'male', 'female', 'other'. |
| `isStudent `  | `Boolean` |  `false`   | **Required**.  Indicates whether you are a student or not. |

```http
  POST /api/publicAuth/login
```

| Body     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `email`  | `string` |  `false`   | **Required**.  Email of the new user. |
| `password`  | `string` |  `false`   | **Required**.  Password of the new user. |

#### USER CONTROLLERS

```http
  GET /api/privateUser/?userId=
```

| Query     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `userId`  | `string` |  `true`   | **Required**.  Id of user to search. |

```http
  PUT /api/privateUser/update
```

| Body     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `name`  | `string` |  `true`   | New username. |
| `date`  | `Date` |  `true`   | New birthdate. |
| `genre`  | `string` |  `true`   | It can only be one of these: 'male', 'female', 'other'. |
| `imageKey`  | `string` |  `true`   | To get the 'imageKey' you need to upload a new image to the Amazon Web Service S3 POST route |

#### PRODUCT CONTROLLERS

```http
  GET /api/privateProduct/?group=
```

| Query     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `group`   | `string` |  `true`   | name of a products group. |


```http
  GET /api/privateProduct/byName/?name=
```

| Query     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `name`    | `string` |  `true`   | name of the product to search. |

```http
  GET /api/privateProduct/byId/?id=
```

| Query     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `id`    | `string` |  `true`   | id of the product to search. |

```http
  GET /api/privateProduct/groups
```

```http
  POST /api/privateProduct/
```


| Body     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `name`  | `string` |  `true`   | Product name. |
| `group`  | `string` |  `true`   | Product group. |
| `price`  | `number` |  `true`   | Product Price. |
| `image`  | `string` |  `true`   | Product image. |
| `inStock`  | `boolean` |  `true`   | determines whether or not there is stock. |

```http
  PUT /api/privateProduct/
```
| Body     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `id`  | `string` |  `true`   | Product id. |
| `productData `  | `object` |  `true`   | New product parameters. |

| productData     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `name`  | `string` |  `true`   | Product name. |
| `group`  | `string` |  `true`   | Product group. |
| `price`  | `number` |  `true`   | Product Price. |
| `image`  | `string` |  `true`   | Product image. |
| `inStock`  | `boolean` |  `true`   | determines whether or not there is stock. |

```http
  DELETE /api/privateProduct/
```

| Query     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `id`    | `string` |  `true`   | id of the product to delete. |


#### PURCHASE CONTROLLERS

```http
  POST /api/privatePurchase/
```


| Body     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `date`  | `Date` |  `true`   | Date established to consolidate the purchase. |
| `products`  | `Array` |  `true`   | Array of objects. |

| products(object)     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `product`  | `string` |  `true`   | Id of the product to buy. |
| `count`  | `number` |  `true`   | quantity of the same product. |

```http
  DELETE /api/privatePurchase/?purchaseId=
```


| Query     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `purchaseId`  | `string` |  `true`   | Id of the purchase to delete. |

#### AWS S3 CONTROLLERS


```http
  GET /api/privateAWS/:key
```

| Params     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `key`    | `string` |  `true`   | Key (id) of the image to be searched. |


#### STRIPE CONTROLLERS


```http
  POST /api/privateStripe/
```

| Body     | Type     | Protected | Description |
| :-------- | :------- | :-------- | :-------- |
| `amount`    | `integer` |  `true`   | Amount payable in the lowest value of the currency. |
| `currency`    | `integer` |  `true`   | actual currency. |


## Screenshots

![App Home](https://i.ibb.co/QcJVnxS/Whats-App-Image-2022-08-05-at-12-16-40-PM.jpg)

![App Navigation](https://i.ibb.co/p3qFNdJ/Whats-App-Image-2022-08-05-at-12-16-39-PM.jpg)

![App Profile](https://i.ibb.co/6NTBJF4/Whats-App-Image-2022-08-05-at-12-16-39-PM-1.jpg)
