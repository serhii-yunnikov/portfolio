/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import Tooltip from '@mui/material/Tooltip';
import { Box, Container, Stack } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import { ExpertiseIconSmall } from './ExpertiseIconSmall';
import { Project } from '../../types/Project';
import { Expertise } from '../../types/Expertise';
import { useSpring, animated } from "react-spring";
import { useState } from 'react';

const ImageContainer = styled(Container)(() => ({
  width: '100%',
  height: '200px',
  '& .card-image': {
    objectFit: 'contain',
    width: '100%',
    height: '100%'
  }
}));

const Header = styled(CardHeader)(() => ({
  '& .CardHeader-action': {
    transition: 'scale 0.4s ease-out',
  },
  '.card-link:hover': {
    scale: '1.3'
  }
}));

type Props = Project;

const CardItem: React.FC<Props> = ({
  title,
  description,
  picture,
  gitHub,
  demo,
  technologies,
}) => {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "24px 28px 31px rgb(0 0 0 / 20%)"
      : "16px 16px 31px rgb(0 0 0 / 20%)"
  });

  return (
    <Box
      component={animated.div}
      key={title}
      style={props3}
      className='card'
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      sx={{ width: { xs: '250px', sm: '300px', lg: '350px' } }}
    >
      <Header
        avatar={
          <Avatar sx={{ bgcolor: 'rgba(0, 0, 0, 0.54)' }} aria-label="project">
            <AppsIcon />
          </Avatar>
        }
        action={
          <CardActions sx={{ padding: '0' }}>
            <Link
              className="card-link"
              href={gitHub}
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
              href={demo}
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
        title={title}
        subheader={description}
      />
      <ImageContainer>
        <img src={picture} alt={title} className='card-image'/>
      </ImageContainer>
      <CardContent>
        <Stack
          direction="row"
          // divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
          useFlexGap
          flexWrap="wrap"
        >
          {technologies.map((item: Expertise )=> (
            <ExpertiseIconSmall
              key={item.src}
              src={item.src}
              title={item.title}
              />
          ))}
        </Stack>
      </CardContent>
    </Box>
  );
}

export default CardItem;
