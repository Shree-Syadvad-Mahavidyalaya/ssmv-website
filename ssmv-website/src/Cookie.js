export function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  
  export function unsetCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  
  