const app = require('./app');
const port = process.env.PORT || 5000;
const { connectToDatabase, getdatabaseName } = require('./utils/dbConnect');


const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            connectToDatabase().then(() => {
                app.use(async (req, res, next) => {
                    try {
                        const database = getdatabaseName() // Access the database instance directly from the request object
                        req.db = database;
                        next();
                    } catch (error) {
                        console.error('Error connecting to the database:', error);
                        res.status(500).send({ status: 'error', message: 'Server Error' });
                    }
                })
                
            });
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();
