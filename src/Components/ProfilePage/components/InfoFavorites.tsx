import { Stack, Pagination } from "@mui/material"
import { useState, useEffect } from "react";
import FavCard from "./FavCard"
import { RequestCard } from "../../RequestCard/RequestCard";

export default function InfoFavorites() {
  const cards = Array.from(Array(10).keys());
  const [ page, setPage ] = useState<number>(1);
  const [ currentCards, setCurrentCards ] = useState<number[]>([]);
  const [ cardsPerPage, setCardsPerPage ] = useState(3);

  const lastCardsIndex = page * cardsPerPage;
  const firsCardIndex = lastCardsIndex - cardsPerPage; 

  useEffect(() => {
    const currentCards = cards.slice(firsCardIndex, lastCardsIndex);
    setCurrentCards(currentCards);
  }, [page])

  const turnPage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  return (
    <Stack direction="column" alignItems="center">
      <Stack direction="row" spacing="24px" sx={{width: "100%"}}>
        {currentCards.map((card) => <RequestCard
          key={card} 
          title={"title"} 
          organization={{title: "org", isVerified: true}}
          location={{latitude: 3, longitude: 3, district: "district", city: "city"}}
          goalDescription="goalDescription"
          requesterType="person"
          helpType="finance"
          endingDate="date"
          requestGoal={10}
          requestGoalCurrentValue={5}
          />)}
      </Stack>
      <Pagination
        onChange={turnPage} 
        count={Math.ceil(cards.length / cardsPerPage)}
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
      />
    </Stack>
  )
}
