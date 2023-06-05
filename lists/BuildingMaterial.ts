import { list } from '@keystone-6/core';
import {
  integer,
  relationship,
  text,
  timestamp,
  select,
} from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';
export const BuildingMaterial = list({
  access: allowAll,
  fields: {
    materialName: text({
      label: 'Название материала',
      validation: { isRequired: true },
    }),
    materialType: select({
      label: 'Тип материала',
      options: [
        { label: 'Металл', value: 'metal' },
        { label: 'Дерево', value: 'wood' },
        { label: 'Камень', value: 'rock' },
        { label: 'Пластик', value: 'plastic' },
      ],
      defaultValue: 'contractor',
      validation: { isRequired: true },
    }),
    manufacturer: text({ label: 'Производитель' }),
    price: integer({ label: 'Стоимость материала' }),
    project: relationship({
      label: 'Строительный проект',
      ref: 'BuildingProject.materialsRequired',
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
    label: 'Строительные материалы',
  },
});
