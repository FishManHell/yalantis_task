import React from 'react';
import {BlockForEmployee, MainText, Text} from "../../styledComponents/EmployeeItemStyled";
import Item from "./Item";

const EmployeeBlock = ({item}) => {

    const showItem = () => item.arrayObj.map(value => <Item value={value} key={value.firstName}/>);
    const showNoEmployees = () => <Text color={'#fff'}>No Employees</Text>;

    return (
        <BlockForEmployee>
            <MainText> {item.letters}</MainText>
            {item.arrayObj.length ? showItem() : showNoEmployees()}
        </BlockForEmployee>
    );
};

export default EmployeeBlock;
