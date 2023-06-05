import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { image, integer, text, timestamp } from '@keystone-6/core/fields';

export const Image = list({
  access: allowAll,
  fields: {
    name: text({ label: 'Название изображения' }),
    description: text({ label: 'Описание изображения' }),
    image: image({
      label: 'Изображение',
      storage: 's3_images',
    }),
    updatedAt: timestamp({
      label: 'Дата последнего обновления',
    }),
    createdAt: timestamp({
      label: 'Дата создания',
    }),
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = new Date().toISOString();

      return resolvedData;
    },
  },
  ui: {
    label: 'Изображения',
  },
});
