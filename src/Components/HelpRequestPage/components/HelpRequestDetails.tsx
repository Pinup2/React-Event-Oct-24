import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteButton from "./FavoriteButton";
import {formatDateString} from "../../RequestCard/helpers";
import {HelpRequestI} from "../types";

interface HelpRequestData {
  data: HelpRequestI
}

const HelpRequestDetails: React.FC = ({data}: HelpRequestData) => {
  return (
      <Box p={2} boxShadow={1} borderRadius={2} bgcolor="white" style={{width: '100%'}}>
        <div style={{padding: '24px', maxWidth: '550px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
            <Typography variant="h5">{data.title}</Typography>
            <FavoriteButton isFavourite={false} />
          </div>

          <Typography variant="h6" fontWeight="fontWeightSemiBold" style={{marginBottom: '8px'}}>Организация</Typography>
          <Typography variant="body2">{data.organization.title}</Typography>
          {data.organization.isVerified && (
            <Box display="flex" alignItems="center" style={{ gap: '4px'}}>
              <VerifiedIcon color="primary" sx={{ height: '20px' }} />
              <Typography variant='caption'>Организация проверена</Typography>
            </Box>
          )}
          <br/>

          <Typography variant="h6">Кому мы помогаем</Typography>
          <Typography variant="body2">{data.description}</Typography>
          <br/>

          <Typography variant="h6" style={{marginBottom: '8px'}}>Цель</Typography>
          <Typography variant="body2">{data.goalDescription}</Typography>
          <br/>

          <Typography variant="h6" style={{marginBottom: '8px'}}>План действий</Typography>
          <ul>
            {data.actionsSchedule.map((action: {isDone: boolean | undefined, stepLabel: string}, index: number) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                {action.isDone ? (
                  <CheckCircleIcon color="success" />
                ) : (
                  <RadioButtonUncheckedIcon color="disabled" />
                )}
                <Typography variant="body2">{action.stepLabel}</Typography>
              </li>
            ))}
          </ul>
          <br/>

          <Typography variant="h6" style={{marginBottom: '8px'}}>Завершение</Typography>
          <Typography variant="body2">{formatDateString(data.endingDate)}</Typography>
          <br/>
          <br/>

          <Typography variant="h6" style={{marginBottom: '8px'}}>
            Локация
          </Typography>
          <Typography variant="body2">
            Область: {data.location.district}
          </Typography>
          <Typography variant="body2">
            Город: {data.location.city}
          </Typography>
          <br/>
          <br/>

          <Typography variant="h6" style={{marginBottom: '8px'}}>
            Контакты
          </Typography>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Typography variant="body2">
                Телефон
              </Typography>
              <Typography variant="body2">
                {data.contacts.phone}
              </Typography>
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Typography variant="body2">
                E-mail
              </Typography>
              <Typography variant="body2">
                {data.contacts.email}
              </Typography>
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Typography variant="body2">
                Сайт
              </Typography>
              <Typography variant="body2">
                {data.contacts.website}
              </Typography>
            </div>
          </div>


        </div>
      </Box>
  );
};

export default HelpRequestDetails;