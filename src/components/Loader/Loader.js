import React from 'react';
import {WrapperLoader} from "../../styledComponents/loaderStyled";
import {HashLoader} from "react-spinners";

const Loader = () => {
    return (
        <WrapperLoader>
            <HashLoader size={300} color={'#fff'}/>
        </WrapperLoader>
    );
};

export default Loader;
