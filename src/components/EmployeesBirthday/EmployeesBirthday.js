import React from 'react';
import {MainTextEmployee} from "../../styledComponents/EmployeesStyled";
import {WrapperEmployeeBirthday} from "../../styledComponents/EmployeesBirthdayStyled";
import {useSelector} from "react-redux";
import {Text} from "../../styledComponents/EmployeeItemStyled";
import FavEmployee from "./FavEmployee";
import {returnUserBirthday, returnUserName} from "../../utils/functionData";

const EmployeesBirthday = () => {
    const {favEmployee} = useSelector(state => state.FavReducer);

    const showFavEmployees = () => {
        return favEmployee.map(user =>
            <FavEmployee
                key={user.id}
                user={user}
                userName={returnUserName}
                userBirthday={returnUserBirthday}/>)
    }

    const showNoFavEmployees = () => <Text color={'#fff'}>Employees List is empty</Text>;

    return (
        <WrapperEmployeeBirthday>
            <MainTextEmployee>EmployeeBirthday</MainTextEmployee>
            {favEmployee.length ? showFavEmployees() : showNoFavEmployees()}
        </WrapperEmployeeBirthday>
    );
};

export default EmployeesBirthday;
