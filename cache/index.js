function updateTime() {
  setInterval(() => (this.time = new Date().toUTCString()), 1000);
  return this.time;
}
