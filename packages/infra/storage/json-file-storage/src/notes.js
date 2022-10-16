import { Note } from '@clean-legos/domain-notes';

import * as fs from 'node:fs/promises';

export default function buildNotesStorage(logger) {
  return {
    async save(entity) {
      try {
        const content = await fs.readFile('./storage.json');
        const obj = JSON.parse(content);
        const newID = obj.notes.length + 1;
        const newEntity = new Note(newID, entity.text);
        obj.notes.push(newEntity);
        await fs.writeFile('./storage.json', JSON.stringify(obj));
        return newEntity;
      } catch (e) {
        logger.error('error saving note');
        logger.error(e);
      }
      return null;
    },
  };
}
