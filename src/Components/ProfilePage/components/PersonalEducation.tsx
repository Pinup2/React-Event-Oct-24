import { Box, Stack } from "@mui/material";
import EduOrganisation from "./EduOrganisation";
import Header from "./Header";

type eduProps = {
  educations: {
    organizationName: string,
    level: string,
    specialization?: string,
    graduationYear: number
  }[]
}

export default function PersonalProfile({ educations } : eduProps) {
  return (
    <Box>
      <Header name="Образование"/>
      <Stack gap="16px">
        {educations && educations.map((edu) => 
        <EduOrganisation 
          key={educations.indexOf(edu)}
          name={edu.organizationName} 
          level={edu.level}
          specialization={edu.specialization}
          year={edu.graduationYear}
        />)}
      </Stack>
    </Box>
  )
}