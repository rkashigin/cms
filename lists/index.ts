import type { Lists } from '.keystone/types';
import { User } from './User';
import { File } from './File';
import { Image } from './Image';
import { BuildingMaterial } from './BuildingMaterial';
import { BuildingProject } from './BuildingProject';
import { BuildingService } from './BuildingService';
import { ConstructionCompany } from './ConstructionCompany';
import { Tender } from './Tender';
import { Review } from './Review';

export const lists: Lists = {
  User,
  File,
  Image,
  BuildingMaterial,
  BuildingProject,
  BuildingService,
  ConstructionCompany,
  Tender,
  Review,
};
