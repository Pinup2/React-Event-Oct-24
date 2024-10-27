import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import HelpRequestDetails from "./components/HelpRequestDetails";
import {ContributionSidebar} from "./components/ContributionSidebar";
import {useHelpRequestPageController} from "./controller/useHelpRequestPageController";
import {ErrorPage} from "./components/ErrorPage";

export const HelpRequestPage = () => {
  const { requestId } = useParams<{ requestId: string }>();
  const { data, loading, error} = useHelpRequestPageController();

  return requestId ? (
    <Box
      fullWidth
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 2,
        padding: 2,
      }}
    >
      {loading && <div>Идет загрузка...</div>}
      {error && <ErrorPage />}
      {!loading && !error && <HelpRequestDetails data={data}/>}
      {!loading && !error && <ContributionSidebar data={data} />}
    </Box>
  ) : (
    <p>Request ID not found</p>
  );
}