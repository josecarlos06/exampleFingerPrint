import { NativeModules } from 'react-native';

const { FingerPrintUareu } = NativeModules;

const startScan = () => {
  return new Promise((resolve, reject) => {
    FingerPrintUareu.startScan()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  startScan,
};
