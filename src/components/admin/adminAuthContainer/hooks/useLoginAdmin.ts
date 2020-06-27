import {useState, useEffect} from 'react';

interface Props {
    auth : {
        username : string;
        password : string;
    },
    companyCode : string;
}

export const useLoginAdmin : Props = (props) => {
    const [status, setStatus] = useState('loading');
    const [error, setError] = useState('');
    const [response, setResponse] = useState();


    return { status, error, response };

}

export default useLoginAdmin;