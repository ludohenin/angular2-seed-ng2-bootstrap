import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  directives: [Alert, CORE_DIRECTIVES]
})
export class HomeCmp {
  public alerts: string[] = [];
  public types = ['success', 'info', 'warning', 'danger'];
  addAlert() {
    let i = this.alerts.length;
    this.alerts.push(this.types[i]);
  }
}
