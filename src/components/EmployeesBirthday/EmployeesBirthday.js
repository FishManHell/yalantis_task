import React, {useEffect, useState} from 'react';
import {MainTextEmployee} from "../../styledComponents/EmployeesStyled";
import {
    MainEmployeeBlock,
    MonthsEmployee,
    TextEmployeeBirtday,
    WrapperEmployeeBirthday
} from "../../styledComponents/EmployeesBirthdayStyled";
import {useSelector} from "react-redux";
import {months} from "../../utils/arrayUtils";

const EmployeesBirthday = () => {
    const {favEmployee} = useSelector(state => state.FavReducer);
    // const [favorites, setFavorites] = useState([]);

    // useEffect(() => {
    //     getFavEmployee()
    // }, [favEmployee])

    // const getFavEmployee = () => {
    //     const array = []
    //     months.forEach(item => array.push({month: item, arrayFavObj: []}));
    //
    //     array.map(item => {
    //         favEmployee.map(employee => {
    //             const t = new Date(employee.dob)
    //             if ((item.month).includes(months[t.getMonth()])) {
    //                 item.arrayFavObj.push(employee)
    //             }
    //         })
    //     })
    //     return setFavorites(array);
    // }


    return (
        <WrapperEmployeeBirthday>
            <MainTextEmployee>EmployeeBirthday</MainTextEmployee>
            {/*{favorites.map(item =>*/}
            {/*    <MainEmployeeBlock key={item.month}>*/}
            {/*        <MonthsEmployee>{item.month}</MonthsEmployee>*/}
            {/*        <TextEmployeeBirtday>*/}
            {/*            {}*/}
            {/*        </TextEmployeeBirtday>*/}
            {/*    </MainEmployeeBlock>)}*/}
            {favEmployee.map(user => <MainEmployeeBlock
                key={user.id}><TextEmployeeBirtday>{user.firstName} {user.lastName} {user.dob}</TextEmployeeBirtday></MainEmployeeBlock>)}
        </WrapperEmployeeBirthday>
    );
};

export default EmployeesBirthday;
