import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'nw-angular';
  isDev = window.nw.process.versions['nw-flavor'] === 'sdk';

  versions = '' +
    'You are running NW.js (v' + window.nw.process.versions.nw + ' ' + window.nw.process.versions['nw-flavor'] + '), ' +
    'Node.js (v' + window.nw.process.versions.node + '), ' +
    'Chromium (v' + window.nw.process.versions.chromium + '), ' +
    'and Angular (v8.0.3).';

  public links: any;

  constructor () {
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

  public open (evt, link) {
    evt.preventDefault();
    window.nw.Shell.openExternal(link.url);
  }

  public openDevTools (evt) {
    evt.preventDefault();
    window.nw.Window.get().showDevTools();
  }
}
