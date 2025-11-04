import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  Injectable,
  Type,
  Injector,
} from '@angular/core';
import { ModalContainer } from '../components/modal/modal-container/modal-container';
import { ModalRef } from '../components/modal/modal-ref';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private container?: ModalContainer;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  registerContainer(container: ModalContainer) {
    console.log('Registering modal container:', container);
    this.container = container;
  }

  open<T extends object, R = any>(
    component: Type<T>,
    data?: Partial<any>
  ): ModalRef<T, R> {
    console.log('Opening modal, container:', this.container);
    console.log('Container viewContainer:', this.container?.viewContainer);

    if (!this.container) {
      throw new Error(
        'Modal container not registered. Make sure <app-modal-container> is in your app.component.html'
      );
    }

    if (!this.container.viewContainer) {
      console.error('ViewContainer not found. Container:', this.container);
      throw new Error('Modal container viewContainer not initialized');
    }

    const modalRef = new ModalRef<T, R>(() => {
      this.container!.clear();
    });

    try {
      console.log('Creating component:', component);

      // Create custom injector that provides ModalRef
      const componentInjector = Injector.create({
        providers: [
          {
            provide: ModalRef,
            useValue: modalRef,
          },
        ],
        parent: this.injector,
      });

      const componentRef = this.container.viewContainer.createComponent(
        component,
        {
          injector: componentInjector,
        }
      );
      console.log('Component created successfully:', componentRef);

      // Asignar data al componente
      Object.assign(componentRef.instance, data ?? {});

      return modalRef;
    } catch (error) {
      console.error('Error creating component in modal:', error);
      throw error;
    }
  }
}
