const express = require('express')
const router = express.Router()
const empController = require('../../controller/employee_controller')


// API construction is nothing but defining the following operations get, put, post and delete in response to the request recieved. 
router.route('/')
    .get(empController.getEmpData)
    .post(empController.createEmp)
    .put(empController.updateEmp)
    .delete(empController.deleteEmp)
router.route('/:id')
    .get(empController.getOneEmp)

module.exports = router



