import React, {useEffect, useState} from 'react';
import {MainTextEmployee, WrapperEmployee} from "../styledComponents/EmployeesStyled";
import {useSelector} from "react-redux";
import EmployeeBlock from "./EmployeeBlock";
import {alphabet} from "../utils/arrayUtils";

const Employees = () => {
    const {employeesArray} = useSelector(state => state.EmployeeReducer);
    const [emp, setEmp] = useState([]);

    useEffect(() => {
        treatmentEmployee()
    }, [employeesArray])

    const treatmentEmployee = () => {
        let array = []
        alphabet.forEach(item => array.push({letters: item, arrayObj: []}))

        array.map(item => {
            employeesArray.map(employee => {
                if ((item.letters).includes(employee.firstName[0])) {
                    item.arrayObj.push(employee)
                }
            })
        })
        return setEmp(array)
    }


    return (
        <WrapperEmployee>
            <MainTextEmployee>Employee</MainTextEmployee>
            {emp.map(item => <EmployeeBlock item={item} key={item.letters}/>)}
        </WrapperEmployee>
    );
};

export default Employees;
