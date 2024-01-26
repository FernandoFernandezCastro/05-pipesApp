import { BasicsPageComponent } from './../../../products/pages/basics-page/basics-page.component';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NumbersPageComponent } from '../../../products/pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from '../../../products/pages/uncommon-page/uncommon-page.component';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] | undefined;

    ngOnInit() {
        this.menuItems = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                items:[
                  {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-align-left',
                    routerLink:'/'
                  },
                  {
                    label: 'Números',
                    icon: 'pi pi-dollar',
                    routerLink:'numbers'
                  },
                  {
                    label: 'No comunes',
                    icon: 'pi pi-globe',
                    routerLink:'uncommon'
                  }
                ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog',
                items: [
                  {
                    label: 'Custom Pipes',
                    icon: 'pi pi-cog',
                    routerLink: 'custom'
                  }
                ]
            }
        ];
    }
}
