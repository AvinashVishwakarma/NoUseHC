import {Injectable, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material';
import { MethodCall, FunctionCall, SafeMethodCall } from '@angular/compiler';
import { MethodFn } from '@angular/core/src/reflection/types';
import { FunctionExpr } from '@angular/compiler/src/output/output_ast';

/**
 * @title Dialog Overview
 */
@Injectable()
export class DialogHelper {

    animal: string;
    name: string;

    constructor(public dialog: MatDialog, public snackBar: MatSnackBar) {
    }

    private openDialog(type: string, message : string): void {
        let dialogRef = this.dialog.open(NotifyDialog, {
            //autoFocus: true,
            panelClass: "app-full-bleed-dialog",
            disableClose: true,
            //height: '30%',
            //width: '30%',
            data: { notifyType: type, notifyMessage: message }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            //this.animal = result;
        });
    }

    private openProgressDialog(msg: string): MatDialogRef<ProgressDialog> {
        let dialogRef = this.dialog.open(ProgressDialog, {
            //autoFocus: true,
            panelClass: "app-full-bleed-dialog",
            disableClose: false,
            //height: '30%',
            //width: '30%',
            data: {message: msg }
        });

        return dialogRef;

        //dialogRef.afterClosed().subscribe(result => {
        //    console.log('The dialog was closed');
        //    console.log(result);
        //    //this.animal = result;
        //});
    }

    public closeDialog(dialogRef: any) {
        if (dialogRef && !dialogRef._locationChanges.closed)
            dialogRef.close();
    }

    public success(message: string): void {
        this.openDialog("success", message);
    }

    error(message: string): void {
        this.openDialog("error", message);
    }

    warn(message: string): void {
        this.openDialog("warn", message);
    }

    confirm(message: string): void {
        this.openDialog("confirm", message);
    }

    inform(message: string): void {
        this.openDialog("info", message);
    }

    showProgressMessage(message: string): MatDialogRef<ProgressDialog> {
        return this.openProgressDialog(message && message.length > 0 ? message : 'Loading...');
    }

    showProgress(): MatDialogRef<ProgressDialog> {
        return this.openProgressDialog('Loading...');
    }

    openSnackBar(message: string, action: string): MatSnackBarRef<any> {
        let snackBar = this.snackBar.open(message, action, {
            horizontalPosition: "right",
            verticalPosition: "top",
            duration: 5000,
        });
        return snackBar;
    }

    onSnackBarAction(snackBarRef: MatSnackBarRef<any>, callBack: any): void {
        debugger;
        snackBarRef.onAction().subscribe(() => callBack());
    }
}

@Component({
    selector: 'notify-dialog',
    templateUrl: './view/Notify/notifySWE.html',
    styleUrls: ['./view/Notify/notifySWE.css']
})
export class NotifyDialog {

    __NotifyColor: string
    __NotifyTitle: string;
    __NotifyIcon: string;
    __NotifyMessage: string;
    __NotificationButtonList: any;
    type: string;
    callBackReturnData: any = "hello";

    constructor(
        public dialogRef: MatDialogRef<NotifyDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.type = data.notifyType;
        this.__NotifyMessage = data.notifyMessage;
        this.getNotificationColor();
        this.getNotificationIcon();
        this.getNotificationText();
        this.getNotificationButton();
    }

    //to hide the dialog
    hide(): void {
        this.dialogRef.close();
    }
        
    getNotificationIcon() {
        if (this.type == 'success') {
            this.__NotifyIcon = 'done_all';// 'cloud_done';
        }
        else if (this.type == 'confirm') {
            this.__NotifyIcon = 'help_outline';
        }
        else if (this.type == 'warn') {
            this.__NotifyIcon = 'warning';
        }
        else if (this.type == 'error') {
            this.__NotifyIcon = 'error_outline';
        }
        else if (this.type == 'info') {
            this.__NotifyIcon = 'info_outline';
        }
    }

    getNotificationText() {
        if (this.type == 'success') {
            this.__NotifyTitle = 'SUCCESS!';
        }
        else if (this.type == 'confirm' || this.type == 'warn') {
            this.__NotifyTitle = this.type == 'confirm' ? 'CONFIRMATION' : 'WARNING!';
        }
        else if (this.type == 'error') {
            this.__NotifyTitle = 'ERROR!';
        }
        else if (this.type == 'info') {
            this.__NotifyTitle = 'INFORMATION!';
        }
    }
    getNotificationColor() {
        if (this.type == 'success') {
            this.__NotifyColor = '#4BAE4F';
        }
        else if (this.type == 'warn') {
            this.__NotifyColor = '#FB9500';
        }
        else if (this.type == 'confirm') {
            this.__NotifyColor = '#ffc107';
        }
        else if (this.type == 'error') {
            this.__NotifyColor = '#ED4034';
        }
        else if (this.type == 'info') {
            this.__NotifyColor = '#0177d6';
        }
    }

    getNotificationMessage() {
        return this.__NotifyMessage;
    }
    getNotificationButton() {
        if (this.type == 'success' || this.type == 'error' || this.type == 'info') {
            this.__NotificationButtonList = [{ buttonText: 'OK', cdkFocusInitial: false, returnData: false }];
        }
        else if (this.type == 'confirm' || this.type == 'warn') {
            this.__NotificationButtonList = [
                { buttonText: 'YES', cdkFocusInitial: false, returnData: true },
                { buttonText: 'NO', cdkFocusInitial: true, returnData: false }
            ];
        }
    }

}


@Component({
    selector: 'progress-dialog',
    templateUrl: './view/Progress/progress.html',
    styleUrls: ['./view/Progress/progress.css']
})
export class ProgressDialog {
    _LoadingMessage: string = '';

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this._LoadingMessage = data.message;
    }
}