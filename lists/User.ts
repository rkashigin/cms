import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  image,
  password,
  text,
  timestamp,
  integer,
} from '@keystone-6/core/fields';

export const User = list({
  access: allowAll,
  fields: {
    name: text({ label: 'Имя', validation: { isRequired: true } }),
    avatar: image({ label: 'Аватар', storage: 's3_images' }),
    email: text({
      label: 'Email',
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    password: password({ label: 'Пароль', validation: { isRequired: true } }),
    createdAt: timestamp({
      label: 'Дата создания',
      defaultValue: { kind: 'now' },
    }),
    updatedAt: timestamp({
      label: 'Дата последнего изменения',
      defaultValue: { kind: 'now' },
    }),
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = new Date().toISOString();

      return resolvedData;
    },
  },
  ui: {
    label: 'Пользователи',
  },
});
