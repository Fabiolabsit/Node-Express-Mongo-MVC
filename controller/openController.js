const getInfo = async (req, res) => {
    const collection = req.db.collection('infoCollection');
    const data = await collection.find({}).toArray();
    res.json(data);
    console.log(data);
    // res.send('Server is running');
};

module.exports = { getInfo };