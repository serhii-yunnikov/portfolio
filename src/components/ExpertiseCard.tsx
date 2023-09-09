import { CardContent, CardHeader } from "@material-ui/core";
import Card from '@mui/material/Card';
import { expertise } from "../api/api";
import { ExpertiseIcon } from "./ExpertiseIcon";

type Props = {
  title: string,
};

export const ExpertiseCard: React.FC<Props> = ({ title }) => {
  return (
    <Card sx={{ width: '700px', backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)' }}>
      <CardHeader title={title}/>
      <CardContent>
       {expertise.map(item => (
        <ExpertiseIcon key={item.title} src={item.src} title={item.title}/>
       ))}
      </CardContent>
    </Card>
  );
};

// backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)'
