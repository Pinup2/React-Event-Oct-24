import { Stack, Pagination } from "@mui/material"
import { useState, useEffect } from "react";
import FavCard from "./FavCard"

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
        {currentCards.map((card) => <FavCard/>)}
      </Stack>
      <Pagination
        onChange={turnPage} 
        count={Math.ceil(cards.length / cardsPerPage)}
        size="large"
        page={page}
        sx={{marginTop: "30px", justifyContent: "center"}}
      />
    </Stack>
  )
}
