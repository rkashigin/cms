import { list } from '@keystone-6/core';
import {
  integer,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const ConstructionCompany = list({
  access: allowAll,
  fields: {
    name: text({ label: 'Название', validation: { isRequired: true } }),
    address: text({ label: 'Адрес' }),
    type: select({
      label: 'Тип компании',
      options: [
        { label: 'Подрядчик', value: 'contractor' },
        { label: 'Заказчик', value: 'client' },
        { label: 'Оба', value: 'both' },
      ],
      defaultValue: 'contractor',
      validation: { isRequired: true },
    }),
    specialization: text({ label: 'Специализация компании' }),
    experience: integer({ label: 'Опыт', validation: { min: 0 } }),
    rating: integer({ label: 'Рейтинг', validation: { min: 0 } }),
    certifications: text({ label: 'Сертификации' }),
    reviews: relationship({
      label: 'Отзывы',
      ref: 'Review.company',
      many: true,
    }),
    tendersWon: relationship({
      label: 'Выигранные тендеры',
      ref: 'Tender.winner',
      many: true,
    }),
    tendersParticipated: relationship({
      label: 'Тендеры, в которых было принято участие',
      ref: 'Tender.participants',
      many: true,
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
    label: 'Строительные компании',
  },
});
