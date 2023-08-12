# ExpressJS

Installation

```bash
npm install

//or

yarn install
```

Run

```bash
// using npm
npm run build //build
npm run dev // run development
npm run start // run production

// using yarn
yarn build //build
yarn dev //run development
yarn start //run production

```

---

# Api Spec

## Product

- ### List

  #### Request

  - Method : GET
  - End Point: /product

  #### Response

  ```json
  {
    "statusCode": "number",
    "statusMessage": "string",
    "data": [
      {
        "id": "string",
        "product_name": "string",
        "created_at": "date",
        "udpated_at": "date",
        "deleted_at": "date"
      }
    ]
  }
  ```

- ### Single Product

  #### Request

  - Method : GET
  - End Point: /product/:id
  - Param :
    - id : string

  #### Response

  200

  ```json
  {
    "statusCode": "number",
    "statusMessage": "string",
    "data": {
      "id": "string",
      "product_name": "string",
      "created_at": "date",
      "udpated_at": "date",
      "deleted_at": "date"
    }
  }
  ```

  404

  ```json
  {
    "statusCode": "number",
    "statusMessage": "string"
  }
  ```

- ### Create

  #### Request

  - Method : POST
  - End Point : /product
  - Header:
    - Content-Type: application/json
    - Accept: application/json
  - Body

  ```json
  {
    "product_name": "string"
  }
  ```

  #### Response

  200

  ```json
  {
    "statusCode": "number",
    "statusMessage": "string",
    "message": "string",
    "data": {
      "id": "string",
      "product_name": "string",
      "created_at": "date",
      "udpated_at": "date",
      "deleted_at": "date"
    }
  }
  ```

  400

  ```json
  {
    "statusCode": "string",
    "statusMessage": "string",
    "errors": [
      {
        "name": "string",
        "message": "string"
      }
    ]
  }
  ```

- ### Update

  #### Request

  - Method : POST
  - End Point : /product/:id
  - Header:
    - Content-Type: application/json
    - Accept: application/json
  - Param :
    - id : string
  - Body

  ```json
  {
    "product_name": "string"
  }
  ```

  #### Response

  200

  ```json
  {
    "statusCode": "number",
    "statusMessage": "string",
    "message": "string",
    "data": {
      "id": "string",
      "product_name": "string",
      "created_at": "date",
      "udpated_at": "date",
      "deleted_at": "date"
    }
  }
  ```

  400

  ```json
  {
    "statusCode": "string",
    "statusMessage": "string",
    "errors": [
      {
        "name": "string",
        "message": "string"
      }
    ]
  }
  ```

  404

  ```json
  {
    "statusCode": "string",
    "statusMessage": "string"
  }
  ```

- ### Delete
  #### Request
  - Method : DELETE
  - End Point: /product/:id
  - Param :
    - id : string
  #### Response
  200 404
  ```json
  {
    "statusCode": "number",
    "statusMessage": "string"
  }
  ```
