let wakeLock = null;

export const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request("screen");
  } catch (err) {
    console.error(`Error requesting Wake Lock: ${err}`);
  }
};

export const releaseWakeLock = () => {
  if (wakeLock !== null) {
    wakeLock
      .release()
      .then(() => {
        wakeLock = null;
        console.log("Wake Lock Released");
      })
      .catch((err) => {
        console.error(`Error releasing Wake Lock: ${err}`);
      });
  }
};
