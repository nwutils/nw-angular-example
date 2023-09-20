import { Component } from '@angular/core';

type LinkType = {
  title: string,
  url: string,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'nw-angular-example';

  versions = '' +
    'You are running NW.js (v0.80.0-sdk)' +
    'Node.js (v20.5.1), ' +
    'Chromium (v117.0.5938.63), ' +
    'and Angular (v16.3.1).';

  public links: LinkType[];

  constructor() {
    this.links = [
      {
        title: 'Angular Tutorial',
        url: 'https://angular.io/tutorial'
      },
      {
        title: 'Angular CLI Documentation',
        url: 'https://angular.io/cli'
      },
      {
        title: 'NW.js Documentation',
        url: 'https://nwjs.io'
      }
    ];
  }

  // public open(event: Event, link: LinkType) {
  //   event.preventDefault();
  //   window.nw.Shell.openExternal(link.url);
  // }

  // public openDevTools(event: Event) {
  //   event.preventDefault();
  //   window.nw.Window.get().showDevTools();
  // }
}
