import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import Employees from "./components/Employees";
import EmployeesBirthday from "./components/EmployeesBirthday";
import {Container, Wrapper} from "./styledComponents/WrapperStyled";
import {getEmployeeTest, getFavEmployee} from "./reduxToolkit/reducer/getEmployee";

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
