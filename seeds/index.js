const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // YOUR USER ID
            author: '63d0c94806ea0efb0f3719d8',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Unleash your adventure spirit at our breathtaking campground, where the natural beauty of the great outdoors meets comfort and convenience. From stunning mountain views to sparkling lakes, our campground offers the ultimate outdoor getaway for nature lovers of all ages.',
            price,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dy8gljbur/image/upload/v1674543763/YelpCamp/jtbqbftfzii7zickgxgx.jpg',
                    filename: 'YelpCamp/jtbqbftfzii7zickgxgx',
                },
                {
                    url: 'https://res.cloudinary.com/dy8gljbur/image/upload/v1674543759/YelpCamp/kizwhmgmagkrqsmwt21d.jpg',
                    filename: 'YelpCamp/kizwhmgmagkrqsmwt21d',
                }
            ]
        })
        await camp.save();
    }
}

seedDB()
    .then(() => {
        db.close();
    })