const employeeService =  require('../services/EmployeeService')
const projectsService = require('../services/ProjectsService')
const GenericResponse = require('../dto/GenericResponse')
const DashboardOverview = require('../dto/DashboardOverview')



module.exports = {

    overview: async (req,res) => {

        const employees = await employeeService.getAllEmployess()
        const projects = await projectsService.getAllProjects()

        const numberOfEmployees =  employees.length
        const numberOfprojects = projects.length

        res.send(new GenericResponse("Success", new DashboardOverview(numberOfEmployees,numberOfprojects)))


    }

}