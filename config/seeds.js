const db = require ('./connection.js');
const { User, Product, } = require('../models');

db.once('open', async () => {
    await Product.deletmany();

    const products = await Product.insertMant([
        {
            name: 'Love',
            description: 'made with love in the heart',
            image: './src/assests/paintings/reds/love.jpg',
            price: '$800',
            quantity: '1'
        },
        {
            name: 'Set',
            description: 'made with love in the heart',
            image: './src/assests/paintings/reds/set.jpg',
            price: '$800',
            quantity: '1'
        },
        {
            name: 'Burst',
            description: 'made with love in the heart',
            image: './src/assests/paintings/reds/burst.jpg',
            price: '$800',
            quantity: '1'
        },
        {
            name: 'Sisters',
            description: 'I am so lucky to have four older sisters. They have taught me how to be a woman, we have entwinded feminity because of this',
            image: './src/assests/paintings/reds/sisters.jpg',
            price: '$800',
            quantity: '1'
        },
        {
            name: 'Taking up Space',
            description: 'Being a loud and proud Indigenous woman, I have always recived some form of being "too much". I voice my opinions strongly, laugh loudly, and I will continue to take up as much space as I deem fit. I refuse to let the colony control how I shine.',
            image: './src/assests/paintings/reds/taking.jpg',
            price: '$800',
            quantity: '1'
        },
        {
            name: 'Winthali',
            description: 'made with love in the heart',
            image: './src/assests/paintings/reds/Winthali.PNG',
            price: '$800',
            quantity: '1'
        },
    ])
})