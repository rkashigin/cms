import { list } from '@keystone-6/core';
import {
  integer,
  relationship,
  text,
  timestamp,
  select,
} from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const BuildingProject = list({
  access: allowAll,
  fields: {
    projectName: text({
      label: 'Название проекта',
      validation: { isRequired: true },
    }),
    projectType: select({
      label: 'Тип проекта',
      options: [
        { label: 'Жилое', value: 'living' },
        { label: 'Нежилое', value: 'non-living' },
        { label: 'Промышленное', value: 'industrial' },
      ],
      defaultValue: 'contractor',
      validation: { isRequired: true },
    }),
    location: text({ label: 'Расположение' }),
    duration: integer({ label: 'Длительность' }),
    materialsRequired: relationship({
      label: 'Требуемые материалы',
      ref: 'BuildingMaterial.project',
      many: true,
      ui: { labelField: 'materialName', searchFields: ['materialName'] },
    }),
    servicesRequired: relationship({
      label: 'Требуемые услуги',
      ref: 'BuildingService.project',
      many: true,
      ui: { labelField: 'serviceName', searchFields: ['serviceName'] },
    }),
    tender: relationship({
      label: 'Тендер',
      ref: 'Tender',
      ui: { labelField: 'title', searchFields: ['title'] },
    }),
    createdAt: timestamp({
      label: 'Дата создания',
      defaultValue: { kind: 'now' },
    }),
    updatedAt: timestamp({ label: 'Дата последнего изменения' }),
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = new Date().toISOString();

      return resolvedData;
    },
  },
  ui: {
    label: 'Строительные проекты',
  },
});
