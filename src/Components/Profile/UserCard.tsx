import { Paper} from "@mui/material"
import UserText from "./UserText"
import avatar from "../../assets/CardMedia_.png"

export default function UserCard() {
  return (
    <Paper component="aside" elevation={0}
      sx={{
        width: "21.3%", 
        bgcolor: "white", 
        height: "fit-content", 
        border: "1px solid #0000001F"
      }}>
      <img className="user_avatar" src={avatar} alt="аватар пользователя"/>
      <UserText />
    </Paper>
  )
}
