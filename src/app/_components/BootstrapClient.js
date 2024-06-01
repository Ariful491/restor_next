"use client"

import {useEffect} from "react";

const boostrapClient = () => {

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle');
    }, []);
    return null;
}


export default boostrapClient;