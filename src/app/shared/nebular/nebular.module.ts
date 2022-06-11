import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbButtonModule,
  NbCardModule,
  NbToastrModule,
  NbIconModule,
  NbInputModule,
  NbSpinnerModule,
  NbPopoverModule,
  NbTreeGridModule,
  NbTooltipModule,
  NbContextMenuModule,
  NbSelectModule,
  NbFormFieldModule,
  NbCheckboxModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';

const NebularComponents: any[] | Type<any> | ModuleWithProviders<{}> = [
  NbLayoutModule,
  NbEvaIconsModule,
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbSpinnerModule,
  NbPopoverModule,
  NbTreeGridModule,
  NbTooltipModule,
  NbContextMenuModule,
  NbMenuModule,
  NbSelectModule,
  NbFormFieldModule,
  NbCheckboxModule
];

@NgModule({
  imports: [
    NbThemeModule.forRoot({name: 'corporate'}),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NebularComponents
  ],
  exports: [NebularComponents]
})
export class NebularModule {}
