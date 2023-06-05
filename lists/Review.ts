import {
  integer,
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

export const Review = list({
  access: allowAll,
  fields: {
    reviewText: text({ label: 'Отзыв', validation: { isRequired: true } }),
    rating: integer({ label: 'Рейтинг' }),
    company: relationship({ ref: 'ConstructionCompany.reviews' }),
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
    label: ' Отзывы',
  },
});
