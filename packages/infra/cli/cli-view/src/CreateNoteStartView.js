import readline from 'readline';

export default function buildCreateNoteStartView() {
  return {
    display() {
      console.log('CREATE NEW NOTE !!!');
    },
    interact() {
      const inquirer = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      inquirer.question('Insert note text?', (text) => {
        inquirer.close();
        return text;
      });
    },
  };
}
