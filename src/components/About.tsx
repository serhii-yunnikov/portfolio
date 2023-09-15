import LottiePlayer from "./LottiePlayer";
import animation from "../assets/animations/animation_1.json";
import ReactTyped from "react-typed";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const text = "Hi, I'm Serhii, a Web Developer \
with over 1 year of hands-on experience. \
I specialize in React, React libraries, \
Typescript, JavaScript, HTML, and CSS. \
I'm well-versed in SASS, UI styling libraries, the BEM methodology. \
My educational background includes a degree from the Faculty of \
Applied Mathematics, I have an Intermediate - B1 level in English. \
My journey into Web Development began 2 years ago when a colleague \
inspired me to pursue this exciting career. \
My adaptability shines through my ability to conquer new challenges, \
balancing my studies with my passion for sports. As a coach, \
I've honed strong communication skills, regularly engaging with \
English-speaking clients from around the world, \
and organizing events and training courses."

export const About: React.FC = () => {
  return (
    <section className="section section__about" id="about">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} md={4}>
          <LottiePlayer animationData={animation} style={{width: '100%', height: '100%'}} />
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Typography variant='h5' align="justify">
            <ReactTyped strings={[text]} typeSpeed={20} />
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};
