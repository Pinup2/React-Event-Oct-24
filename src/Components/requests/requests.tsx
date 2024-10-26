import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from '@mui/material';
import { RequestCard } from '../RequestCard/RequestCard';

export default function Requests() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 3;
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZmYTY2NDc3LWIxNWYtNDBlZC04YjQ4LTc0NmM2NDYyYWUzOCIsImlhdCI6MTcyOTk2MDYxOCwiZXhwIjoxNzI5OTY0MjE4fQ.0AeLi-Td5Eub-pO7r4o2u-xryqN-Pyzf69WbK8FF0rg'; // Замените на ваш токен

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
    setPage(value); // Убедитесь, что передаете значение страницы
  };

  return (
    <Box sx={{
      width: 1080,
      height: 1025,
      border: '1px solid grey',
      display:'flex',
      "flex direction": 'column',
      gap:'24px',
      position:'relative',
      'justify-content':'center'
    }}>
      {paginateData(page).length > 0 ? (
        paginateData(page).map((item) => (
          <RequestCard key={item.id} title={item.title} goalDescription={item.goalDescription} requestGoalCurrentValue={item.requestGoalCurrentValue}
            requesterType={item.requesterType} requestGoal={item.requestGoal} location={item.location}  endingDate={item.endingDate} organization={item.organization}
                       helpType={item.helpType}
          />
        ))
      ) : (
        <div>No data</div>
      )}

      <Pagination
        sx={{
          color: '#1E88E5',
          position: 'absolute',
          bottom:'40px'
        }}
        count={pageCount > 0 ? pageCount : 1}
        page={page}
        onChange={handlePageChange}
      />
    </Box>
  );
}
