export default function buildCreateNoteStartView() {
  return {
    display(viewModel) {
      console.log(`END OF OPERATION: CREATE NOTE!!!\n\n${viewModel.text}`);
    },
    interact() {
      return null;
    },
  };
}
