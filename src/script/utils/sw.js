import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
  } catch (error) {
    console.log(error);
  }
};

export default swRegister;
