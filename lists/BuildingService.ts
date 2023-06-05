import { list } from '@keystone-6/core';
import {
  integer,
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const BuildingService = list({
  access: allowAll,
  fields: {
    serviceName: text({
      label: 'Название услуги',
      validation: { isRequired: true },
    }),
    serviceDescription: text({ label: 'Описание услуги' }),
    price: integer({ label: 'Стоимость услуги' }),
    project: relationship({
      label: 'Строительный проект',
      ref: 'BuildingProject.servicesRequired',
      ui: { labelField: 'projectName', searchFields: ['projectName'] },
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
    label: 'Строительные услуги',
  },
});
