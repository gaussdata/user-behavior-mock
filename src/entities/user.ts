import * as uuid from 'uuid'
import Device from "./device";
import * as Mock from 'mockjs'
const Random = Mock.Random
import { randomCount, randomPick } from '../utils/random';

class User {
  id: string;
  time: number;
  cname: string;
  ename: string;
  devices: Device[];
  currentDevice: Device | null;
  constructor() {
    this.time = 0;
    this.id = uuid.v4();
    this.cname = Random.cname();
    this.ename = Random.name();
    this.devices = [];
    this.currentDevice = null;
  }
  addDevice(device: Device) {
    this.devices.push(device)
  }
  selectDevice() {
    this.currentDevice = randomPick(this.devices)
  }

}

export function createUser() {
  const user = new User();
  Array.from({ length: randomCount(1, 3) }).forEach(() => {
    user.addDevice(new Device())
  })
  user.selectDevice();
  return user;
}


export default User;