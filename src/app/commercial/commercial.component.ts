import { Component } from '@angular/core';
import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot';
import { Layout, LayoutState } from 'src/store/layout/layout.state';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css'],
})
export class CommercialComponent {
  @ViewSelectSnapshot(LayoutState.layout)
  layout: Layout;

  layoutRef = Layout;
}
