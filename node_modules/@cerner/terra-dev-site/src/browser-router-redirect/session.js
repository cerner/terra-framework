// Function to check if sessionStorage property is readable.
function getSessionStorage() {
  try {
    return window.sessionStorage;
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
    return undefined;
  }
}

export default getSessionStorage;
