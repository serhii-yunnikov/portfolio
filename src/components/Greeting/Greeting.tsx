import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";

const useStyles = makeStyles({
  root: {
    marginTop: '60px',
    height: '100vh',
    '& .greeting': {
      fontFamily: 'SF Pro',
      fontWeight: 'bold',
      fontSize: '100px',
      lineHeight: '110px',
      color: '#1d1d1f',
      margin: '0 0 30px 30px',
      // transition: '1s ease-in'
    },
    '& .greeting > p': {
       margin: '0'
    }
  },
});

// const textAnimation = {
//   hidden: {
//     x: 100,
//     opacity: 0
//   },
//   visible: {
//     x: 0,
//     opacity: 1
//   }
// };

export const Greeting: React.FC = motion(() => {
  const scrollRef = useRef(null);
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
    >
      <Typography
        // variant="h1"
        sx={{ typography: { sm: 'h3', md: 'h2', lg: 'h1' } }}
        className="greeting"
        component={motion.div}
        initial={{ x: '-100%' }}
        whileInView={{ x: 0 }}
        transition={{ type: 'spring', delay: 0.3, stiffness: 120 }}
        viewport={{ root: scrollRef }}
      >
        <p>Hi! My name is</p>
        <p>Serhii.</p>
      </Typography>
      <Typography
        variant="h1"
        className="greeting"
        component={motion.div}
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        variants={{
          hidden: { y: 75 },
          visible: { y: 0 }
        }}
        initial="hidden"
        animate="visible"
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.25, duration: 0.5, ease: "linear" }}
      >
        <p>I am</p>
        <p>Frontend developer.</p>
      </Typography>
    </Box>
)});
