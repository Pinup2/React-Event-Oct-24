import { ToggleButtonGroup, ToggleButton } from "@mui/material"
import GridOnIcon from '@mui/icons-material/GridOn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useState } from "react";
import { useDispatch } from "react-redux"
import { changeView } from "../../../slice/authSlice";

export default function ViewIcons() {
  const [ pressed, setPressed ] = useState<string>("grid");
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: string) => {
    dispatch(changeView(value));
    setPressed(value);
  }

  return (
    <ToggleButtonGroup onChange={handleChange} exclusive value={pressed}>
      <ToggleButton value="grid" sx={{}}>
        <GridOnIcon/>
      </ToggleButton>
      <ToggleButton value="list">
        <ListAltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
