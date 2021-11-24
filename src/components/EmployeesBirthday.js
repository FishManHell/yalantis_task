import React from 'react';
import {MainTextEmployee} from "../styledComponents/EmployeesStyled";
import {
    MainEmployeeBlock,
    TextEmployeeBirtday,
    WrapperEmployeeBirthday
} from "../styledComponents/EmployeesBirthdayStyled";
import {useSelector} from "react-redux";

const EmployeesBirthday = () => {
    const {favEmployee} = useSelector(state => state.EmployeeReducer);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getUserTime(t = new Date()) {
        let d = days[t.getDay()];
    }


    return (
        <WrapperEmployeeBirthday>
            <MainTextEmployee>EmployeeBirthday</MainTextEmployee>
            {favEmployee.map(user => <MainEmployeeBlock
                key={user.id}><TextEmployeeBirtday>{user.firstName} {user.lastName} {user.dob}</TextEmployeeBirtday></MainEmployeeBlock>)}
        </WrapperEmployeeBirthday>
    );
};

export default EmployeesBirthday;
