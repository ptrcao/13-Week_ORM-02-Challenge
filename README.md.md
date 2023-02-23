
# Object-Relational Mapping (ORM) Challenge E-commerce Back End

![license](https://img.shields.io/static/v1?label=license&message=No_license&color=blue&style=for-the-badge)

  Built with:

  ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

> Repository URL: https://github.com/ptrcao/13-Week_ORM-02-Challenge.git

> Video DEMO: https://youtu.be/OryvsfgaZrs

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Project Description
This project is a back-end API for an e-commerce website, created using Express.js and Sequelize ORM. The API supports CRUD (Create, Read, Update, Delete) operations for products, categories, and tags.

### Associations
The API uses Sequelize to define and manage the relationships between the different models.

* A product belongs to one category, and a category can have many products.
* A product can have many tags, and a tag can be associated with many products.

## Installation
1. Clone the repository from Github:
```
git clone https://github.com/ptrcao/13-Week_ORM-02-Challenge.git
```

2. Install the required dependencies:
```
npm install
```
The project uses the following dependencies:

* Express.js: a fast, minimalist web framework for Node.js
* MySQL2: a MySQL client for Node.js
* Sequelize: a promise-based ORM for Node.js
* dotenv: a zero-dependency module that loads environment variables from a .env file


3. Create a new .env file based on the example file .env.EXAMPLE.
```
DB_NAME: the name of your MySQL database
DB_USER: the username for your MySQL database
DB_PASSWORD: the password for your MySQL database
```

4. Create the database using the schema.sql file in the db folder:
```
mysql -u <username> -p <password> < schema.sql
```
5. Seed the database with test data:
```
npm run seed
```
6. Start the server:
```
npm start
```

## Usage
### API Routes
#### Products
* GET /api/products: Get all products.
* GET /api/products/:id: Get a single product by ID.
* POST /api/products: Create a new product.
* PUT /api/products/:id: Update a product by ID.
* DELETE /api/products/:id: Delete a product by ID.
#### Categories
* GET /api/categories: Get all categories.
* GET /api/categories/:id: Get a single category by ID.
* POST /api/categories: Create a new category.
* PUT /api/categories/:id: Update a category by ID.
* DELETE /api/categories/:id: Delete a category by ID.
#### Tags
* GET /api/tags: Get all tags.
* GET /api/tags/:id: Get a single tag by ID.
* POST /api/tags: Create a new tag.
* PUT /api/tags/:id: Update a tag by ID.
* DELETE /api/tags/:id: Delete a tag by ID.


## Credits
- PC

## License
No license