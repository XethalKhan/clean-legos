import CreateViewModel from '../common/CRUD/CreateViewModel.js';

export default class CreateNoteViewModel extends CreateViewModel {
  constructor(id, text) {
    super();
    this.id = id;
    this.text = text;
  }

  toString() {
    return `Create note view model ${this.id}
    Text: ${this.text}`;
  }
}
