import * as uuid from 'uuid'

class Device {
  caid: string;
  gaid: string;
  imei: string;
  oaid: string;
  // os: 'Windows' | 'Linux' | 'Mac OS' | 'iPhone'
  // brand: 'Apple' | 'Huawei' | 'Xiaomi' | 'OPPO' |'Vivo'
  constructor(){
    this.caid = uuid.v4();
    this.gaid = uuid.v4();
    this.imei = uuid.v4();
    this.oaid = uuid.v4();
  }
};

export function createDevice() {
  const device = new Device();
  return device;
}

export default Device;