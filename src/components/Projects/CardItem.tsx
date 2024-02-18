/* eslint-disable @typescript-eslint/no-unused-vars */
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import Tooltip from '@mui/material/Tooltip';
import { Stack } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import { Project } from '../../types/Project';
import { Expertise } from '../../types/Expertise';
import { useSpring, animated } from "react-spring";
import { useState } from 'react';
import ExpertiseIconSmall from './ExpertiseIconSmall';
import { CardContainer, Header, ImageContainer } from './Styles';

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
    <CardContainer
      component={animated.div}
      key={title}
      style={props3}
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
          <CardActions>
            <a
              href={gitHub}
            >
              <Tooltip
                title="GitHub"
                placement="top"
                arrow
              >
                <GitHubIcon fontSize="large" />
              </Tooltip>
            </a>
            <a
              href={demo}
            >
              <Tooltip
                title="Demo"
                placement="top"
                arrow
              >
                <PlayLessonIcon fontSize="large" />
              </Tooltip>
            </a>
          </CardActions>
        }
        title={title}
        subheader={description}
      />
      <ImageContainer>
        <img src={picture} alt={title}/>
      </ImageContainer>
      <CardContent>
        <Stack
          direction="row"
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
    </CardContainer>
  );
}

export default CardItem;
