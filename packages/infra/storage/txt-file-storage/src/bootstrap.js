/* eslint-disable no-bitwise */
import * as fs from 'node:fs/promises';

export default function buildJSONStorageBootstrap(logger) {
  return async function JSONStorageBootstrap() {
    try {
      await fs.access('./storage.txt', fs.constants.R_OK | fs.constants.W_OK);
      logger.info('storage.txt file exists');
    } catch (e) {
      logger.error('storage.txt file does not exists, we will create one now');
      await fs.writeFile('./storage.txt', '');
    }
  };
}
