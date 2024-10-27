import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';
import { RequestCard } from '../RequestCard/RequestCard';
import {useRequestsController} from "./controller/useRequestsController";
import {SearchInput} from "./components/SearchInput/SearchInput";
import {ErrorPage} from "../HelpRequestPage/components/ErrorPage";

export default function RequestsPage() {
  const {
    paginateData,
    handlePageChange,
    pageCount,
    page,
    onClickHelpButton,
    loading,
    error
  } = useRequestsController();

  // TODO унести paginateData(page) в useRequestsController — махинации с данными делаем в useRequestsController
  // на выход передаем уже готовую data

  return (
    <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'space-between', alignItems: 'center'}}>
      <SearchInput />
      {loading && <div>Идет загрузка...</div>}
      {error && <ErrorPage />}
      {!loading && !error &&
          <Box sx={{
            width: 1080,
            height: 925,
            display:'flex',
            "flex direction": 'column',
            gap:'24px',
            position:'relative',
            justifyContent:'center',
          }}>
        {paginateData(page).map((item) => (
          <RequestCard
            key={item.id}
            id={item.id}
            title={item.title}
            goalDescription={item.goalDescription}
            requestGoalCurrentValue={item.requestGoalCurrentValue}
            requesterType={item.requesterType}
            requestGoal={item.requestGoal}
            location={item.location}
            endingDate={item.endingDate}
            organization={item.organization}
            helpType={item.helpType}
            onClick={()=>onClickHelpButton(item.id)}
          />
        ))}

          </Box>}

      {!error && <Pagination
          sx={{
            color: '#1E88E5',
            marginBottom: '24px'
          }}
          count={pageCount > 0 ? pageCount : 1}
          page={page}
          onChange={handlePageChange}
      />}
    </div>
  );
}
