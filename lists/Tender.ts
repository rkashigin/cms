import { list } from '@keystone-6/core';
import {
  integer,
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const Tender = list({
  access: allowAll,
  fields: {
    title: text({
      label: 'Название тендера',
      validation: { isRequired: true },
    }),
    description: text({ label: 'Описание тендера' }),
    budget: integer({ label: 'Бюджет', validation: { min: 0 } }),
    startDate: timestamp({ label: 'Дата начала' }),
    endDate: timestamp({ label: 'Дата завершения' }),
    servicesRequired: text({ label: 'Требуемые услуги' }),
    projectType: text({ label: 'Описание типа проекта' }),
    participants: relationship({
      label: 'Участники',
      ref: 'ConstructionCompany.tendersParticipated',
      many: true,
    }),
    winner: relationship({
      label: 'Победитель тедера',
      ref: 'ConstructionCompany.tendersWon',
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
    label: 'Тендеры',
  },
});
