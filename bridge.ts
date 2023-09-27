// Bridge is a structural design pattern that divides business logic or huge class into separate class hierarchies that can be developed independently.

// Code example:

abstract class UI {
    protected backend: Backend;
  
    constructor(backend: Backend) {
      this.backend = backend;
    }
  
    abstract render(): void;
}
  
abstract class Backend {
    abstract getData(): string;
}

class AndroidUI extends UI {
    public render() {
      const data = this.backend.getData();
      console.log("AndroidUI: Rendering data from the backend ->", data);
    }
}
  
class IPhoneUI extends UI {
    public render() {
      const data = this.backend.getData();
      console.log("IPhoneUI: Rendering data from the backend ->", data);
    }
}
  
class MobileBackend implements Backend {
    public getData() {
      return "MobileBackend: Data from the backend";
    }
}

const mobileBackend = new MobileBackend();
const androidUI = new AndroidUI(mobileBackend);
androidUI.render();

const iphoneUI = new IPhoneUI(mobileBackend);
iphoneUI.render();

class WebUI extends UI {
    public render() {
      const data = this.backend.getData();
      console.log("WebUI: Rendering data from the backend ->", data);
    }
}
  
class WebBackend implements Backend {
    public getData() {
      return "WebBackend: Data from the backend";
    }
}

const webBackend = new WebBackend();
const webUI = new WebUI(webBackend);
webUI.render();

const androidBrowserUI = new AndroidUI(webBackend);
androidBrowserUI.render();
