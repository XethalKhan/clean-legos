import * as fs from 'node:fs/promises';

import { Note } from '@clean-legos/domain-notes';

export default function buildNotesStorage(logger) {
  return {
    async save(entity) {
      try {
        const content = await fs.readFile('./storage.txt', { encoding: 'utf8' });

        const lines = content.split(/\r?\n/);
        let maxID = 0;

        lines.forEach((line) => {
          const data = line.split('\t');
          const id = Number.parseInt(data[0], 10);
          if (id > maxID) {
            maxID = id;
          }
        });

        const newNote = new Note(maxID + 1, entity.text);

        await fs.appendFile('./storage.txt', `${newNote.id}\t${newNote.text}\n`);

        return newNote;
      } catch (e) {
        logger.error(`error saving note: ${e.toString()}`);
      }

      return null;
    },
  };
}
