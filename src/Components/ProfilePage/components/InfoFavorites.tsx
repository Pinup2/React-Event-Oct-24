import { Stack, Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { RootState } from "../../../store/createStore";
import { RequestCard } from "../../RequestCard/RequestCard";
import { RequestCardVariant } from "../../RequestCard/RequestCardVariant";

type favProps = {
  favouriteRequests: [],
}

export default function InfoFavorites({ favouriteRequests } : favProps) {
  const favArr = Array.from(Array(5).keys());
  const token = useSelector((state:RootState) => state.auth.token);
  const view = useSelector((state:RootState) => state.auth.view);
  const [ page, setPage ] = useState<number>(1);
  const [ currentCards, setCurrentCards ] = useState<number[]>([]);
  const cardsPerPage = 3;

  const lastCardsIndex = page * cardsPerPage;
  const firsCardIndex = lastCardsIndex - cardsPerPage; 

  useEffect(() => {
    const currentCards = favArr.slice(firsCardIndex, lastCardsIndex);
    setCurrentCards(currentCards);
  }, [page])

  const turnPage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://natticharity.eveloth.ru/api/user/favourites", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data);
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error("Ошибка при загрузке данных с сервера:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <Stack direction="column" alignItems="center">
      {view === "grid" ? 
      <Stack direction="row" spacing="24px" sx={{width: "100%"}}>
        {currentCards.map((card) => <RequestCard
          id="1"
          title="Заголовок" 
          organization={{title: "Имя организации", isVerified: true}}
          location={{latitude: 3, longitude: 3, district: "Имя области", city: "Имя города"}}
          goalDescription="Цель сбора средств"
          requesterType="person"
          helpType="finance"
          endingDate="2011-10-10T14:48:00.000+09:00"
          requestGoal={10}
          requestGoalCurrentValue={5}
          onClick={() => console.log('click')}
          />)}
      </Stack> : 
      <Stack direction="column" sx={{width: "100%"}}>
        {currentCards.map((card) => <RequestCardVariant
          id="1"
          title="Заголовок" 
          organization={{title: "Имя организации", isVerified: true}}
          location={{latitude: 3, longitude: 3, district: "Имя области", city: "Имя города"}}
          goalDescription="Цель сбора средств"
          requesterType="person"
          helpType="finance"
          endingDate="2011-10-10T14:48:00.000+09:00"
          requestGoal={10}
          requestGoalCurrentValue={5}
          onClick={() => console.log('click')}
        />)}
      </Stack>}
      
      {favArr.length > 0 && <Pagination
        onChange={turnPage} 
        count={Math.ceil(favArr.length / cardsPerPage)}
        size="large"
        page={page}
        sx={{
          marginTop: "30px", 
          justifyContent: "center",
          "& .MuiPaginationItem-root": {
            "&.Mui-selected": {
              bgcolor: "#1E88E5",
              color: "white"
          }},
        }}
      />}
    </Stack>
  )
}
