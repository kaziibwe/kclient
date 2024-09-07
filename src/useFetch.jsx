import { useState, useEffect } from 'react';

 export const useFetch = (url,query) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {
            signal: abortCont.signal,
            method: 'POST', // POST method to fetch data
            headers: {
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify(query),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Parse JSON response
            })
            .then((data) => {
                setData(data); // Set the fetched data
                setIsPending(false); // Loading complete
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(err.message); // Set the error message
                    setIsPending(false); // Loading complete
                }
            });

        return () => abortCont.abort(); // Cleanup function to abort fetch
    }, [url]);

    return { data, isPending, error }; // Return data, isPending, and error state
};

// export default useFetch;



export const usePost = (url, formData) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData, // Directly pass the FormData object
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Parse the JSON from the response
            })
            .then((data) => {
                setData(data); // Set the response data
                setIsPending(false);
                navigate("/category"); // Navigate to the category page on success
            })
            .catch((err) => {
                setError(err.message); // Set error message
                setIsPending(false);
            });
    };

    return { data, isPending, error, handleSubmit }; // Return all necessary states and the handler
};
