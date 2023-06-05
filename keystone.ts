import { config } from '@keystone-6/core';
import * as dotenv from 'dotenv';

import { lists } from './lists';

import { withAuth, session } from './auth';

const databaseUrls = {
  local: 'postgres://postgres:postgres@localhost:5432/cms',
  remote:
    'postgres://rkashigin:B6RaPkAE5cpY@ep-wandering-water-697632.eu-central-1.aws.neon.tech/cms',
};

dotenv.config();

console.log('MY ENV', process.env.PORT, process.env.DATABASE_URL);

export default withAuth(
  config({
    server: {
      port: Number(process.env.PORT) || 5555,
    },
    db: {
      provider: 'postgresql',
      idField: {
        kind: 'autoincrement',
      },
      onConnect: async () => {
        console.log('CONNECTED SUCCESSFULY');
      },
      url: process.env.DATABASE_URL || databaseUrls.local,
    },
    storage: {
      s3_files: {
        kind: 's3',
        type: 'file',
        bucketName: 'rmn-bucket',
        endpoint: 'https://s3.tebi.io',
        region: 'eu',
        accessKeyId: 'h9sunAXMvGzlxyNX',
        secretAccessKey: '6qFxYtNqfDHYw0aBOg1pPVmaXD2EapVIgOY259D3',
        signed: { expiry: 3600 },
      },
      s3_images: {
        kind: 's3',
        type: 'image',
        bucketName: 'rmn-bucket',
        endpoint: 'https://s3.tebi.io',
        region: 'eu',
        accessKeyId: 'h9sunAXMvGzlxyNX',
        secretAccessKey: '6qFxYtNqfDHYw0aBOg1pPVmaXD2EapVIgOY259D3',
        signed: { expiry: 3600 },
      },
    },
    lists,
    session,
  })
);
