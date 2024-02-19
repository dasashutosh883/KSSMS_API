exports.get = (req, res, next) => {
    let name = req.params.name;
    res.status(200).send({
        "message": `hello ${name}`
    });
};