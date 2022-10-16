import BaseViewModelImpl from './src/common/BaseViewModel.js';
import CreateViewModelImpl from './src/common/CRUD/CreateViewModel.js';

import CreateNoteViewModelImpl from './src/note/CreateNoteViewModel.js';

import buildNotePresenterImpl from './src/note/index.js';

export const BaseViewModel = BaseViewModelImpl;
export const CreateViewModel = CreateViewModelImpl;

export const CreateNoteViewModel = CreateNoteViewModelImpl;

export const buildNotePresenter = buildNotePresenterImpl;

export default {
  CreateNoteViewModel,
  buildNotePresenter,
};
