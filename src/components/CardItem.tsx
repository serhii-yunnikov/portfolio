/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import Tooltip from '@mui/material/Tooltip';
import image from '../assets/images/Screenshot.jpeg';
import { Stack } from '@mui/material';
import Paper from '@material-ui/core/Paper/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// const useStyles = makeStyles((theme: Theme) => createStyles({
//   root:
//     {
//       maxWidth: '345px',
//     },
//   action:
//     {
//       alignItems: 'center',
//     }
// }));

export default function CardItem() {
  // const classes = useStyles();

  return (
    <Card sx={{ maxWidth: '345px'}}>
      <CardHeader
        sx={{
          '& .MuiCardHeader-action': {
            margin: '0',
            alignSelf: 'center'
          }
        }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <CardActions sx={{ padding: '0' }}>
            <Link
              href="https://github.com/serhii-yunnikov?tab=repositories"
              color="rgba(0, 0, 0, 0.54)"
            >
              <Tooltip
                title="GitHub"
                placement="top"
                arrow
              >
                <GitHubIcon />
              </Tooltip>
            </Link>
            <Link
              href="https://github.com/serhii-yunnikov?tab=repositories"
              color="rgba(0, 0, 0, 0.54)"
            >
              <Tooltip
                title="Demo"
                placement="top"
                arrow
              >
                <PlayLessonIcon/>
              </Tooltip>
            </Link>
          </CardActions>
        }
        title="Project name"
        subheader="September 14, 2016"
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
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
        </Stack>
      </CardContent>
    </Card>
  );
}
