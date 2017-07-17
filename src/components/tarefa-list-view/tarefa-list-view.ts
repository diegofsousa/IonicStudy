import {Component, Input} from '@angular/core';
import {Tarefa} from "../../models/tarefa";

/**
 * Generated class for the TarefaListViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tarefa-list-view',
  templateUrl: 'tarefa-list-view.html'
})
export class TarefaListViewComponent {

 @Input()
 tarefa:Tarefa;

}
