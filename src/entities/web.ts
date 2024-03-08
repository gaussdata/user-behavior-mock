import * as Mock from 'mockjs'
import { randomCount } from '../utils/random';
const Random = Mock.Random

class Button {
  id: string;
  className: string;
  text: string;
  constructor(){

  }
}

class Page {
  title: string;
  path: string;
  buttons: Button[];
  constructor() {
  }
}

class Web {
  name: string;
  host: string;
  pages: string[];
  constructor() {
    Array.from({length: randomCount(10,100)}).forEach(() => {
    })
  }
}

export default Web;