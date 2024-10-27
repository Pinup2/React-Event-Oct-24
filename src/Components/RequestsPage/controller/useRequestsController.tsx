import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectSetAuthUser} from "../../../slice/authSlice";
import axios from "axios";

export const useRequestsController = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 3;
  const token = useSelector(selectSetAuthUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://natticharity.eveloth.ru/api/request", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params:{
            page:page,
            limit:itemsPerPage
          }
        }); // Запрос к серверу
        setData(response.data);
        setPageCount(7)
      } catch (error) {
        console.error("Ошибка при загрузке данных с сервера:", error);
      }
    };

    fetchData();
  }, [token]);

  // Пагинация
  const paginateData = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const onClickHelpButton = (id: string) => {
    // TODO написать запрос POST /api/request/{id}/contribution
    console.log(id);
  }
  return {paginateData, handlePageChange, pageCount, page, onClickHelpButton}
}