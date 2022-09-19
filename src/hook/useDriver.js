

function useDriver(urlImg) {
  const driveValue = `https://drive.google.com/uc?export=download&id=${urlImg}`
  return driveValue;
}

export default useDriver