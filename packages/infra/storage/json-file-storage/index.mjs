import buildJSONStorageBootstrapImpl from './src/bootstrap.js';

import buildNotesStorageImpl from './src/notes.js';

export const buildStorageBootstrap = buildJSONStorageBootstrapImpl;

export const buildNotesStorage = buildNotesStorageImpl;

export default {
  buildStorageBootstrap,
  buildNotesStorage,
};
