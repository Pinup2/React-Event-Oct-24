import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import {selectSetAuthUser} from "../../../slice/authSlice";

export const useHelpRequestPageController = () => {
  const { requestId } = useParams<{ requestId: string }>();
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const token = useSelector(selectSetAuthUser);

  useEffect(() => {
    const fetchData = async () => {

      if (!token) {
        setError('Токен не найден');
        setLoading(false);
        return;
      }

      try {
        console.log(`Fetching data for requestId: ${requestId}`);
        const response = await axios.get(`https://natticharity.eveloth.ru/api/request/${requestId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          timeout: 10000,
        });

        setData(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (requestId) {
      fetchData();
    } else {
      setError('No request ID provided');
      setLoading(false);
    }
  }, [requestId, token]);

  return {data, loading, error}
}