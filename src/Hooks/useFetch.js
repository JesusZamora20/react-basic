import React, { useState, useEffect } from 'react';

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url)=>{
            try {
                let res = await fetch(url);
                if(!res.ok){
                    throw{
                        err:true,
                        status: res.status,
                        statusText: !res.statusText ? "An error happened": res.statusText,
                    };
                }
                let data = await res.json();

                setIsPending(false);
                setData(data);
                setError({err:false});
            } catch (err){
                setIsPending(true);
                setError({err:true});
            }
        };
        getData(url);
    },[url]);

    return {data, isPending, error};
}

export {useFetch};