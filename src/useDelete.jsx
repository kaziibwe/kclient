import { useState } from 'react';

const useDelete = (base_Url) => {

    const [dataRes, setDataRes] = useState(null);
    const [err, setErr] = useState(null);
    const [isDeletePending, setIsDeletePending] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("access_token"));

    const deleteData = async (id) => {
        setIsDeletePending(true);
        setErr(null); // Reset error state

        const deleteUrl = `${base_Url}/${id}`; // Dynamically append ID to URL

        try {
            const response = await fetch(deleteUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,

                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setDataRes(result); // Set the response data

        } catch (err) {
            setErr(err.message); // Set error message
        } finally {
            setIsDeletePending(false); // Stop loading state
        }
    };

    return { dataRes, isDeletePending, err, deleteData };
};

export default useDelete;
