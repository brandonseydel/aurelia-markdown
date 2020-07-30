import { customElement } from "aurelia";
import template from './test.md';
@customElement({ name: 'test', template: template })
export class Test {
    currentText = "asdfasdf";
}