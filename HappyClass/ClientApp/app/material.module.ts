import { NgModule } from '@angular/core';

import {
  MatSidenavModule,
  MatFormFieldModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatTabsModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatExpansionModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  exports: [
    FlexLayoutModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
