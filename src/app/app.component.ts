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
  isDev = window.nw.process.versions['nw-flavor'] === 'sdk';

  versions = '' +
    'You are running NW.js (v' + window.nw.process.versions.nw + ' ' + window.nw.process.versions['nw-flavor'] + '), ' +
    'Node.js (v' + window.nw.process.versions.node + '), ' +
    'Chromium (v' + window.nw.process.versions.chromium + '), ' +
    'and Angular (v12.3.1).';

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

  public open(event: Event, link: LinkType) {
    event.preventDefault();
    window.nw.Shell.openExternal(link.url);
  }

  public openDevTools(event: Event) {
    event.preventDefault();
    window.nw.Window.get().showDevTools();
  }
}
