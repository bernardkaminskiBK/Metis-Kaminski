export default class Utils {
  static getFormattedCurrentDate(): string {
    const date = new Date();
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });
    return time + ' ' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  }

  static generateUUID(): string {
    let d = new Date().getTime();
    if(typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
}
