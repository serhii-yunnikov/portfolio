import LottiePlayer from "./LottiePlayer";
import animation from "../assets/animations/animation_1.json";
import ReactTyped from "react-typed";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";

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

// export const About: React.FC = () => {
//   return (
//     <section className="section section__about" id="about">
//       <Grid container spacing={1}>
//         <Grid item xs={12} sm={12} md={12}>
//           <Typography variant="h1">
//             About.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={4} md={4}>
//           <LottiePlayer animationData={animation} style={{ width: '100%', height: '100%' }} />
//         </Grid>
//         <Grid item xs={12} sm={8} md={8}>
//           <Typography variant='h6' align="justify">
//             <ReactTyped strings={[text]} typeSpeed={20} style={{ color: 'rgb(134, 134, 139)' }} />
//           </Typography>
//         </Grid>
//       </Grid>
//     </section>
//   );
// };

export const About: React.FC = () => {
  return (
    <section className="section section__about" id="about">
      <Box>
          <Typography variant="h1">
            About.
          </Typography>
        <Box sx={{ float: "right",  width: '200px'}}>
          <LottiePlayer animationData={animation} style={{ width: '100%', height: '100%' }} />
        </Box>
          <Typography variant='h4' align="justify">
            <ReactTyped strings={[text]} typeSpeed={20} style={{ color: 'rgb(134, 134, 139)' }} />
          </Typography>
      </Box>
    </section>
  );
};
