import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AppStringService } from './private/app-string.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private appStringService: AppStringService) { }

  ngOnInit() {
    const config = this.appStringService.getDatabaseConfig();
    firebase.initializeApp(config);
  }

  // require to set to public otherwise is not callable at html file
  // by default is private
  public onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
