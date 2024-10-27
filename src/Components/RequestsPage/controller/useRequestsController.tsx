import {useEffect, useMemo, useState} from "react";
import {useSelector} from "react-redux";
import {selectSetAuthUser} from "../../../slice/authSlice";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';

export const useRequestsController = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // временные стейты для поиска
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const itemsPerPage = 3;
  const token = useSelector(selectSetAuthUser);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {

      if (!token) {
        setError('Токен не найден');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("https://natticharity.eveloth.ru/api/request", {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          params:{ page:page, limit:itemsPerPage },
          timeout: 10000,
        });

        setData(response.data);
        setFilteredItems(response.data);
        setPageCount(7)
      } catch (error) {
        setError(error.message);
        setLoading(false);
        if (axios.isAxiosError(error) && error.response?.status === 500) {
          navigate('/login');
          toast.error('Ошибка! Попробуйте еще раз');
        }
      }
    };

    fetchData()
  }, [ token]);

  // функционал для SearchInput
  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredItems(filtered);
      }, 500),
    [data]
  );

  const inputHandleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

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

  return {
    error,
    loading,
    paginateData,
    handlePageChange,
    pageCount,
    page,
    onClickHelpButton,
    searchTerm,
    inputHandleChange,
    filteredItems
  }
}