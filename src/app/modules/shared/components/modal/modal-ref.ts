import { Subject } from "rxjs";


export class ModalRef<T = any, R = any> {
    private afterClosedSubject = new Subject<R | undefined>();

    constructor(private closeFn: () => void) {}

    close(result?: R) {
        this.closeFn();
        this.afterClosedSubject.next(result);
        this.afterClosedSubject.complete();
    }

    afterClosed() {
        return this.afterClosedSubject.asObservable();
    }
}