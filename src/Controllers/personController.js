const personService = require("../Services/person.service.js");

module.exports = {
    get: async (req, res) => {
        try {
            const people = await personService.getAll();
            res.json(people);
        } catch (error) {
            console.log(error);
            res.status(500).json({ statusCode: 500, error: "Something went wrong" });
        }
    },
    post: async (req, res) => {
        try {
            const createdPerson = await personService.createPerson(req.body);
            res.status(201).json(createdPerson);
        } catch (error) {
            console.log(error);
            res.status(500).json({ statusCode: 500, error: "Something went wrong" });
        }
    },
    getone: async (req, res) => {
        try {
            const person = await personService.findPersonById(req.params.id);
            if (!person) {
                return res
                    .status(404)
                    .json({ statusCode: 404, error: "Person Does not exist" });
            }
            return res.json(person);
        } catch (error) {
            return res
                .statusCode(500)
                .json({ statusCode: 500, error: "Something went wrong" });
        }
    },
    put: async (req, res) => {
        try {
            const exisitingPerson = await personService.findPersonById(req.params.id);
            console.log(exisitingPerson);
            if (!exisitingPerson) {
                return res
                    .status(404)
                    .json({ statusCode: 404, error: "Person Does not exist" });
            }
            const updatedPerson = await personService.updatePerson(req.body);
            return res.json(updatedPerson);
        } catch (error) {
            return res
                .statusCode(500)
                .json({ statusCode: 500, error: "Something went wrong" });
        }
    },
    delete: async (req, res) => {
        try {
            const exisitingPerson = await personService.findPersonById(req.params.id);
            if (!exisitingPerson) {
                return res
                    .status(404)
                    .json({ statusCode: 404, error: "Person Does not exist" });
            }

            await personService.deletePerson(req.params.id);
            return res.json({
                statusCode: 200,
                message: `person with id: ${req.params.id} is deleted successfully`,
            });
        } catch (error) {
            return res
                .statusCode(500)
                .json({ statusCode: 500, error: "Something went wrong" });
        }
    }
};