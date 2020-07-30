import marked from 'marked';



export class MyApp {
  public message = 'Hello World!';
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  currentText: string;
  public async markdownFile() {
    this.currentText = (await import('./markdown-files/test.md')).default;
    console.log(this.currentText);
  }
}
