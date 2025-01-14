import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UserInfo} from '../../../shared/backend-models/interfaces';
import { SnackBarService } from 'app/core/snack-bar/snack-bar.service';
import { TranslocoService } from '@ngneat/transloco';
import { AdminCockpitService } from 'app/cockpit-area/services/admin-cockpit.service';
import * as moment from 'moment';

@Component({
  selector: 'app-new-password-dialog',
  templateUrl: './new-password-dialog.component.html',
  styleUrls: ['./new-password-dialog.component.scss']
})
export class NewPasswordDialogComponent implements OnInit {
 
  CreateModel: string[] = [];
  minDate: Date = new Date();
  bookForm: FormGroup;
  createForm: FormGroup;
  data: any;
  isPasswordVisible: boolean =false;
  
  selected: string;
  REGEXP_EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  userInfo: UserInfo = {
    userName: '',
    email: '',
    password: '',
    role: '',
    confirmPassword: ''
  };

  updatePasswordSuccessAlert;
  translocoSubscription;

  constructor(
    private translocoService: TranslocoService,
    private snackBarService: SnackBarService,
    private dialog: MatDialogRef<NewPasswordDialogComponent>,
    private adminCockpitService: AdminCockpitService,
    @Inject(MAT_DIALOG_DATA) dialogData: any
  ) {
    this.data = dialogData;
  }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      password: new FormControl(this.userInfo.password, Validators.required),
      confirmPassword: new FormControl(this.userInfo.confirmPassword, Validators.required),
    });

    this.translocoService.langChanges$.subscribe((event: any) => {
      this.translocoSubscription = this.translocoService
      .selectTranslateObject('alerts.adminCockpitAlerts', {}, event)
      .subscribe((alertsAdminCockpitAlerts) => {
        this.updatePasswordSuccessAlert = alertsAdminCockpitAlerts.updatePasswordSuccess;
      });
      moment.locale(this.translocoService.getActiveLang());
    });
  }

  get password(): AbstractControl {
    return this.createForm.get('password');
  }

  get confirmPassword(): AbstractControl {
    return this.createForm.get('confirmPassword');
  }

  submit() : void {
    this.data.password = this.createForm.value.password;
    this.adminCockpitService.updateUser(this.data).subscribe((data: any) => {
      this.adminCockpitService.emitUsersChanged();
      this.snackBarService.openSnack(this.updatePasswordSuccessAlert, 5000, "green");
    });
    this.dialog.close();
  }

  passwordIdentical() :boolean{
    if(this.createForm.value.password === this.createForm.value.confirmPassword && this.createForm.value.confirmPassword != ''){
      return true;
    } else {
      return false;
    }
  }

  togglemyPassword(): void{
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
