import { Observer } from "./observer";
import { Subject } from "./subject";

class Application {

    sample1() {
        const subject = new Subject();
        new Observer(subject);
        new Observer(subject);

        subject.notify([1, 2, 3]);
        subject.notify(['a', 'b']);
    }

    sample2() {
        const subject = new Subject();
        const observer = new Observer(subject);

        subject.notify([1, 2, 3]);

        subject.unsubcribe(observer);

        subject.notify(['a', 'b']);
    }

}

const app = new Application();
app.sample2();