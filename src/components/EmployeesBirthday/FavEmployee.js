import React from 'react';
import {MainEmployeeBlock, TextEmployeeBirtday} from "../../styledComponents/EmployeesBirthdayStyled";

const FavEmployee = ({user, userName, userBirthday}) => {
    return (
        <MainEmployeeBlock>
            <TextEmployeeBirtday>{userName(user)} - {userBirthday(user)}</TextEmployeeBirtday>
        </MainEmployeeBlock>
    );
};

export default FavEmployee;
