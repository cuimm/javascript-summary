class IConsole {
  constructor() {
    this.promise = Promise.resolve();
  }
  console(str) {
    this.promise = this.promise.then(() => {
      console.log(str);
    });
    return this;
  }
  settimeout(timeout) {
    this.promise = this.promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, timeout);
      });
    });
    return this;
  }
}

const u3 = new IConsole();
u3.console("hello")
  .settimeout(3000)
  .console("world")
  .settimeout(3000)
  .console("!");

const u2 = new IConsole();
u2.console("start")
  .settimeout(1000)
  .console("1s")
  .settimeout(2000)
  .console("2s")
  .settimeout(3000)
  .console("3s");
