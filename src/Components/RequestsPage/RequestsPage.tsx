import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';
import { RequestCard } from '../RequestCard/RequestCard';
import {useRequestsController} from "./controller/useRequestsController";

export default function RequestsPage() {
  const { paginateData, handlePageChange, pageCount, page, onClickHelpButton } = useRequestsController();

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
          <RequestCard
            key={item.id}
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
