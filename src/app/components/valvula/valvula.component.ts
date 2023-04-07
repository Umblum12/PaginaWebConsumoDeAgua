import { Component } from '@angular/core';
import { Database, ref, update, child, getDatabase, get, } from '@angular/fire/database';
@Component({
  selector: 'app-valvula',
  templateUrl: './valvula.component.html',
  styleUrls: ['./valvula.component.css']
})
export class ValvulaComponent {
  constructor(public database: Database) {
  }
  Check = true;
  rele() {
    if (this.Check) {
      update(ref(this.database, 'Consumodeagua/Valvula/'), {
        Estado: true
      });
      this.Check = false;
    } else {
      update(ref(this.database, 'Consumodeagua/Valvula/'), {
        Estado: false
      });
      this.Check = true;
    }
  }
}