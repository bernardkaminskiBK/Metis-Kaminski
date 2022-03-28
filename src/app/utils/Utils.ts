export default class Utils {
  static getFormattedCurrentDate(): string {
    const date = new Date();
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });
    return time + ' ' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  }
}
