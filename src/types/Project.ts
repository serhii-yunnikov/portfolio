import { Expertise } from "./Expertise";

export interface Project {
  title: string,
  description: string,
  picture: string,
  gitHub: string,
  demo: string,
  technologies: Expertise[],
}
