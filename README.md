# YelpCamp - Discover and Review Campgrounds

Welcome to YelpCamp, where you can find and review various campgrounds easily. Create an account to add new campgrounds, write reviews, and rate your favourite spots. The website also includes maps to help you plan your camping trips effortlessly.

Explore a wide range of campgrounds, read honest reviews, and plan your outdoor getaways with confidence. YelpCamp is your go-to platform for discovering the best camping destinations and sharing your experiences with fellow campers. Happy camping!

## 🔗Link - [https://yelpcampz.cyclic.app](https://yelpcampz.cyclic.app)

### Demo

![YelpCamp](https://github.com/asniteshkumar/yelpcamp/assets/69412868/96219b99-5a84-4e5b-9361-c36c9ffd413c)

![YelpCamp 2](https://github.com/asniteshkumar/yelpcamp/assets/69412868/9eab19ae-e8d9-4465-9722-1c8becf6603c)


### Tech Stack

* **MongoDB** ([https://www.mongodb.com/](https://www.mongodb.com/))
* **Express** ([https://expressjs.com/](https://expressjs.com/))
* **Node.js** ([https://nodejs.org/](https://nodejs.org/))
* **EJS** ([https://ejs.co/](https://ejs.co/))
* **Bootstrap** ([https://getbootstrap.com/](https://getbootstrap.com/))
* **Mongoose** ([https://mongoosejs.com/](https://mongoosejs.com/))
* **Cloudinary** ([https://cloudinary.com/](https://cloudinary.com/))
* **Mapbox** ([https://www.mapbox.com/](https://www.mapbox.com/))
* **Passport** ([https://www.passportjs.org/](https://www.passportjs.org/))

## How to Run the Project

### Prerequisites

Before running the project, ensure you have the following installed:
* **Node.js** ([https://nodejs.org/](https://nodejs.org/))
* **MongoDB** ([https://www.mongodb.com/](https://www.mongodb.com/))


### Installation
1. Clone the repository to your local machine using the following command :
	``` bash
	git clone git@github.com:asniteshkumar/yelpcamp.git
	```
	
2. Navigate to the project directory :
	``` bash
	cd yelpcamp
	```
	
3. Install the project dependencies using npm :
	``` bash
	npm install
	```
	
### Configuration

1. In the project's root directory, create a .env file and add the following :
	```
	CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
	CLOUDINARY_KEY=your-cloudinary-key
	CLOUDINARY_SECRET=your-cloudinary-secret
	MAPBOX_TOKEN=your-mapbox-token
	DB_URL=your-mongodb-connection-url
	SECRET=your-session-secret
	```
	
	Replace the `.env` file credentials  with your Cloudinary, Mapbox and MongoDB connection strings.

### Usage
1. Start the server : 
	``` bash
	nodemon app.js
	```
	
2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the web application. 


## Credits
[@Colt Steele](https://github.com/Colt)
