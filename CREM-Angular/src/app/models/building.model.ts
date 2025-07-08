import { Project } from "./project.model";

export class Building {
    id!: string;
    name!: string;
    type!: string;
    project!: Project;
    companyId!: number;
    floorCount!: number;
    unitCount!: number;
}