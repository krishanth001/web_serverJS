
data = {}

data.employees = require("../model/employee.json")

const getEmpData = (req, res) => {
    res.json(data.employees);
}

const createEmp = (req, res) => {
    res.json({
        "firstname": req.body.firstname,
        "lastname" : req.body.lastname
})
}

const updateEmp = (req,res) => {     //the data which needs to be inserted//
    res.json({
        "firstname" : req.body.firstname,
        "lastname" : req.body.lastname
})
}

const deleteEmp = (req, res) => {
    res.json({"id" : req.body.id})
}

const getOneEmp = (req,res) => {
    res.json({"id":req.params.id})
}

module.exports = {
    getEmpData,
    createEmp,
    updateEmp,
    deleteEmp,
    getOneEmp
}