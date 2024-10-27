import TextField from '@mui/material/TextField';
import {useRequestsController} from "../../controller/useRequestsController";

export const SearchInput = () => {
  const { searchTerm, inputHandleChange, filteredItems } = useRequestsController();
  // TODO удалить отображение поиска ul и перенести логику

  return (
    <div style={{width: '60%'}}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={inputHandleChange}
        fullWidth
      />
      <div>вот тут случился ступор мозговины и я не поняла как применить фильтр на основные карточки </div>
      <ul>
        {filteredItems.slice(0, 5).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};