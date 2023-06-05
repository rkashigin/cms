import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { file, text, timestamp } from '@keystone-6/core/fields';

export const File = list({
  access: allowAll,
  fields: {
    name: text({ label: 'Название документа' }),
    description: text({ label: 'Описание документа' }),
    file: file({
      label: 'Документ',
      storage: 's3_files',
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
    label: 'Документы',
  },
});
