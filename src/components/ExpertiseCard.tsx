import { Card, CardContent, CardHeader } from "@material-ui/core";
import { expertise } from "../api/api";
import { ExpertiseIcon } from "./ExpertiseIcon";

type Props = {
  title: string,
};

export const ExpertiseCard: React.FC<Props> = ({ title }) => {
  return (
    <Card>
      <CardHeader title={title}/>
      <CardContent>
       {expertise.map(item => (
        <ExpertiseIcon src={item.src} title={item.title}/>
       ))}
      </CardContent>
    </Card>
  );
};
