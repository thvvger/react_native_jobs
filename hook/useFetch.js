import { useState, useEffect } from "react";
import { Axios } from "axios";

const useFetch = () => {
    const [date, setData] =  useState([])
    const [isLoading, setIsLoading] =  useState(false)
    const [error, setError] =  useState(null)
}