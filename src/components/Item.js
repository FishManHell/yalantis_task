import React, {useCallback, useEffect, useState} from 'react';
import {
    BlockForEmp,
    BlockRadioButton,
    RadioButton,
    Text,
    TextInformRadioButton
} from "../styledComponents/EmployeeItemStyled";
import {useDispatch, useSelector} from "react-redux";
import {actionEmployee} from "../reduxToolkit/reducer/getEmployee";

const Item = ({value}) => {
    const dispatch = useDispatch()
    const [bool, setBool] = useState(false);
    const {arrayId} = useSelector(state => state.EmployeeReducer)

    const handleBool = (boolean) => setBool(boolean);

    const addInFavArray = () => {
        handleBool(true)
        dispatch(actionEmployee(value))
    }

    const removeInFavArray = () => {
        handleBool(false)
        dispatch(actionEmployee(value.id))
    }


    const changeButton = useCallback( () => {
        const id = value.id
        const check = arrayId.includes(id)
        return check ? setBool(true) : setBool(false)
    }, [arrayId, value.id])

    useEffect(() => {
        changeButton()
    }, [changeButton, bool])

    return (
        <BlockForEmp>
            <Text>{value.firstName} <br/> {value.lastName}</Text>
            <BlockRadioButton>
                <RadioButton type={'radio'} checked={!bool} onChange={() => handleBool(false)}/>
                <TextInformRadioButton onClick={removeInFavArray}>Not active</TextInformRadioButton>
            </BlockRadioButton>

            <BlockRadioButton>
                <RadioButton type={'radio'} checked={bool} onChange={() => handleBool(true)}/>
                <TextInformRadioButton onClick={addInFavArray}>Active</TextInformRadioButton>
            </BlockRadioButton>
        </BlockForEmp>

    );
};

export default Item;
