/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import Tooltip from '@mui/material/Tooltip';
import image from '../assets/images/Screenshot.jpeg';
import { Stack } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import { ExpertiseIconSmall } from './ExpertiseIconSmall';

const Item = styled(Card)(({ theme }) => ({
  color: 'rgba(0, 0, 0, 0.54)',
  boxShadow: '12px 12px 33px -3px rgba(0,0,0,0.56)',
  maxWidth: '345px',
  '& .MuiCardHeader-action': {
    margin: '0',
    alignSelf: 'center'
  },
  '& .MuiCardHeader-title': {
    fontWeight: 'bold',
    fontSize: '16px'
  }
}));

export default function CardItem() {

  return (
    <Item>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'rgba(0, 0, 0, 0.54)' }} aria-label="project">
            <AppsIcon />
          </Avatar>
        }
        action={
          <CardActions sx={{ padding: '0' }}>
            <Link
              className="card-link"
              href="https://github.com/serhii-yunnikov?tab=repositories"
              color="rgba(0, 0, 0, 0.54)"
            >
              <Tooltip
                title="GitHub"
                placement="top"
                arrow
              >
                <GitHubIcon fontSize="large" />
              </Tooltip>
            </Link>
            <Link
              className="card-link"
              href="https://github.com/serhii-yunnikov?tab=repositories"
              color="rgba(0, 0, 0, 0.54)"
            >
              <Tooltip
                title="Demo"
                placement="top"
                arrow
              >
                <PlayLessonIcon fontSize="large" />
              </Tooltip>
            </Link>
          </CardActions>
        }
        title="Phone catalog"
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt="Phone catalogue"
      />
      <CardContent>
        <Stack
          direction="row"
          // divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
          useFlexGap
          flexWrap="wrap"
        >
          <ExpertiseIconSmall src='react' title='React' />
          <ExpertiseIconSmall src='css' title='CSS' />
          <ExpertiseIconSmall src='sass' title='SASS' />
          <ExpertiseIconSmall src='redux' title='Redux' />
        </Stack>
      </CardContent>
    </Item>
  );
}
