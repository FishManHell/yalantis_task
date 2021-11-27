import React, {useCallback, useEffect, useState} from 'react';
import {
    BlockForEmp,
    BlockRadioButton,
    RadioButton,
    Text,
    TextInformRadioButton
} from "../styledComponents/EmployeeItemStyled";
import {useDispatch, useSelector} from "react-redux";
import {addEmployee, removeEmployee} from "../reduxToolkit/action/action";

const Item = ({value}) => {
    const dispatch = useDispatch()
    const [bool, setBool] = useState(false);
    const {favIdPost, favEmployee} = useSelector(state => state.FavReducer)

    const handleBool = (boolean) => setBool(boolean);

    const addInFavArray = () => {
        handleBool(true)
        dispatch(addEmployee(value))
    }

    const removeInFavArray = () => {
        handleBool(false)
        if (favEmployee.length) {
            dispatch(removeEmployee(value.id))
        }

    }

    const changeButton = useCallback( () => {
        const id = value.id
        const check = favIdPost.includes(id)
        return check ? setBool(true) : setBool(false)
    }, [favIdPost, value.id])

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
