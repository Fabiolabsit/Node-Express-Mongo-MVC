const app = require('./app');
const port = process.env.PORT || 5000;
const { connectToDatabase } = require('./utils/dbConnect');

const startServer = async () => {
    try {
        await connectToDatabase();

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
