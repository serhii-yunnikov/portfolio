import { Technologies } from "./Technologies";

export interface Project {
  title: string,
  subtitle: string,
  description: string,
  picture: string,
  gitHub: string,
  demo: string,
  technologies: Technologies[],
}
