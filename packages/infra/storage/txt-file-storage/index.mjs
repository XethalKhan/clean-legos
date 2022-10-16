import buildTxtStorageBootstrapImpl from './src/bootstrap.js';

import buildNotesStorageImpl from './src/notes.js';

export const buildStorageBootstrap = buildTxtStorageBootstrapImpl;

export const buildNotesStorage = buildNotesStorageImpl;

export default {
  buildStorageBootstrap,
  buildNotesStorage,
};
