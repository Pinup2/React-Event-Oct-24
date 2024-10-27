import { Paper} from "@mui/material"
import UserText from "./components/UserText"
import userDetails from "./userDetails"
import avatar from "../../assets/CardMedia_.png"

type DataProps = {
  data: userDetails,
}

export default function UserCard({ data } : DataProps) {
  const { name, lastName, status } = data;

  return (
    <Paper component="aside" elevation={0}
      sx={{
        width: "21.3%", 
        bgcolor: "white", 
        height: "fit-content", 
        border: "1px solid #0000001F"
      }}>
      <img className="user_avatar" src={avatar} alt="аватар пользователя"/>
      <UserText name={name} lastName={lastName} status={status}/>
    </Paper>
  )
}
