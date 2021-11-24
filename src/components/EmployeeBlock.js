import React from 'react';
import {BlockForEmployee, MainText, Text} from "../styledComponents/EmployeeItemStyled";
import Item from "./Item";

const EmployeeBlock = ({item}) => {
    return (
        <BlockForEmployee>
            <MainText> {item.letters}</MainText>

            {!item.arrayObj.length
                ?
                <Text>No Employees</Text>
                :
                item.arrayObj.map(value => <Item value={value} key={value.firstName}/>)
            }
        </BlockForEmployee>
    );
};

export default EmployeeBlock;
