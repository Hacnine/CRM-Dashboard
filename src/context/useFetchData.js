import { useEffect } from 'react';
import { useDataContext } from './DataContext';

const useFetchData = (url) => {
    const { setData, setLoading, setError } = useDataContext();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.products);
                setError(null);
            } catch (error) {
                setError(error);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, setData, setLoading, setError]);
};

export default useFetchData;
