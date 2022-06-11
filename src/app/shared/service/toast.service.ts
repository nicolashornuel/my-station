import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastrService: NbToastrService) { }

  open(message: string, status: string) {
    this.toastrService.show(
      status || toastStatusType.SUCCESS,
      message,
      { status }
    );
  }
}


/**
 * Type of the snackbar. Defines the color theme
 */
export enum toastStatusType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'danger',
  SUCCESS = 'success'
}
