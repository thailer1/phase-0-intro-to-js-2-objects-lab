// Write your solution in this file!
const employee = {
    name: "Mike" ,
    streetAddress: "12 Broadway" ,
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    // let copyOfEmployee = {...employee, ...{ [key]: value }}
    let copyOfEmployee = {...employee}
    copyOfEmployee[key] = value
    return copyOfEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
 function deleteFromEmployeeByKey(employee, key, value){
     let copyOfDelete = {...employee ,...key, ...value}
     delete copyOfDelete[key]
     return copyOfDelete
 }
 
 function destructivelyDeleteFromEmployeeByKey(employee, key, value){
     delete employee[key]
     return employee
 } 