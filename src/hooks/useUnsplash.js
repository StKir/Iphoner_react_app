import axios from "axios";
import { useCallback, useState } from "react";

export const useUnsplash = () => {
    const [loading, setLoading] = useState(false);
    const [process, setProcess] = useState('waiting');
    const __apiKey = 'ryhIYmsQ0dsktKFIWY4eRJAi5bgHfngUi_pq2viDlxI';

    const request = useCallback(async (searchTitle, num = 8) => {
        setLoading(true);
        setProcess('loading');
        try{
            const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=${num}&query=${searchTitle}&client_id=${__apiKey}`)
            
            if(res.status === 200){
                setLoading(false);
                setProcess('success');
                return res.data.results.map(({urls}) => (urls))
            }
            
        }catch(e) {
            console.log(e);
            setLoading(false);
            setProcess('error');
        }

    }, [])

    return {request, loading, process}
}