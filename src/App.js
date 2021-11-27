import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import Employees from "./components/Employee/Employees";
import EmployeesBirthday from "./components/EmployeesBirthday/EmployeesBirthday";
import {Container, Wrapper} from "./styledComponents/WrapperStyled";
import {getFavEmployee} from "./reduxToolkit/action/action";
import {getEmployeeTest} from "./reduxToolkit/asyncThunk/asyncThunk";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployeeTest())
        dispatch(getFavEmployee())
    }, [])


    return (
        <Wrapper>
            <Container>
                <Employees/>
                <EmployeesBirthday/>
            </Container>
        </Wrapper>
    );
};

export default App;
