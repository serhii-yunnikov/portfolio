import React from "react";
import cx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import useWideCardMediaStyles from "@mui-treasury/styles/cardMedia/wide";
import useN01TextInfoContentStyles from "@mui-treasury/styles/textInfoContent/n01";
import useBouncyShadowStyles from "@mui-treasury/styles/shadow/bouncy";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    width: 400,
    margin: "auto",
    boxShadow: "none",
    borderRadius: 30
  },
  content: {
    padding: 24
  },
  cta: {
    marginTop: 24,
    textTransform: "initial"
  }
}));

/*interface CardNews {
  hasImg?:boolean;
  srcImg: string;
  width?: number;
  hasTitle?: boolean;
  title: string;
  hasDescription?: boolean;
  description: string;
  hasStars?: boolean;
  hasLink?: boolean;
  borderRadius?: number;
}*/

/*defaultProps {
  width: 400,
  borderRadius: 30,
  hasTitle: false,
  hasStars: false,
  hasImg: false,
  hasLink: false,
}*/
export const NewsCardDemo = React.memo(function NewsCard() {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  const n = 6;

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          "https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
        }
      />
      <CardContent className={styles.content}>
        {[...Array(n)].map((e, i) => (
          <span key={i}>
            {/* <Star height="20px" /> */}
          </span>
        ))}
        {/*<Star height="20px" />
        <Star height="20px" />
        <Star height="20px" />
        <Star height="20px" />
      <Star height="20px" />*/}
        <TextInfoContent
          classes={textCardContentStyles}
          //overline={"March 20, 2019"}
          heading={"What happened in Thailand?"}
          body={
            "Kayaks crowd Three Sisters Springs, where people and manatees maintain controversial coexistence."
          }
        />
        <Button color={"primary"} fullWidth className={styles.cta}>
          Find Out More <ChevronRightRounded />
        </Button>
      </CardContent>
    </Card>
  );
});

export default NewsCardDemo;
