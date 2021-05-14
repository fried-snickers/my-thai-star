import {Component, Inject, OnInit} from '@angular/core';
import {BookingView, OrderListView, OrderView} from '../../../../shared/view-models/interfaces';
import {WaiterCockpitService} from '../../../services/waiter-cockpit.service';
import {TranslocoService} from '@ngneat/transloco';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ConfigService} from '../../../../core/config/config.service';
import {PageEvent} from '@angular/material/paginator';
import { SnackBarService } from 'app/core/snack-bar/snack-bar.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  private fromRow = 0;
  private currentPage = 1;

  pageSize = 4;

  data: any;
  datao: OrderView[] = [];
  columnso: any[];
  displayedColumnsO: string[] = [
    'dish.name',
    'orderLine.comment',
    'extras',
    'orderLine.amount',
    'dish.price',
  ];
  updateSuccessAlert: string;
  pageSizes: number[];
  filteredData: OrderView[] = this.datao;
  totalPrice: number;

  constructor(
    private waiterCockpitService: WaiterCockpitService,
    private translocoService: TranslocoService,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
    private configService: ConfigService,
    private snackBarService: SnackBarService,
    private router: Router,
  ) {
    this.data = dialogData;
    this.pageSizes = this.configService.getValues().pageSizesDialog;
  }

  ngOnInit(): void {
    this.translocoService.langChanges$.subscribe((event: any) => {
      this.setTableHeaders(event);
    });

    this.totalPrice = this.waiterCockpitService.getTotalPrice(
      this.data.orderLines,
    );
    this.datao = this.waiterCockpitService.orderComposer(this.data.orderLines);
    this.filter();
  }

  setTableHeaders(lang: string): void {
    this.translocoService
      .selectTranslateObject('cockpit.orders.dialogTable', {}, lang)
      .subscribe((cockpitDialogTable) => {
        this.columnso = [
          { name: 'dish.name', label: cockpitDialogTable.dishH },
          { name: 'orderLine.comment', label: cockpitDialogTable.commentsH },
          { name: 'extras', label: cockpitDialogTable.extrasH },
          { name: 'orderLine.amount', label: cockpitDialogTable.quantityH },
          {
            name: 'dish.price',
            label: cockpitDialogTable.priceH,
            numeric: true,
            format: (v: number) => v.toFixed(2),
          },
        ];
      });
      this.translocoService
      .selectTranslateObject('alerts.waiterCockpitAlerts', {}, lang)
      .subscribe((alertsWaiterCockpitAlerts) => {
        this.updateSuccessAlert = alertsWaiterCockpitAlerts.updateOrderLineSuccess;
      });
      
  }

  page(pagingEvent: PageEvent): void {
    this.currentPage = pagingEvent.pageIndex + 1;
    this.pageSize = pagingEvent.pageSize;
    this.fromRow = pagingEvent.pageSize * pagingEvent.pageIndex;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.datao;
    newData = newData.slice(this.fromRow, this.currentPage * this.pageSize);
    setTimeout(() => (this.filteredData = newData));
  }

  cancelOrder() {
    const id = this.data.order.id;
    this.waiterCockpitService.updateOrderState("canceled", id).subscribe((data: any) => {
      // TODO refresh order overview
      this.snackBarService.openSnack(this.updateSuccessAlert, 5000, "green");
      this.reload();
    });
  }

  decreaceOrderLineAmount(element: any): void {
    element.orderLine.amount--;
    this.waiterCockpitService.updateOrderLine(element.orderLine, element.orderLine.id).subscribe((data: any) => {
      this.snackBarService.openSnack(this.updateSuccessAlert, 5000, "green");
      this.reload();
    });
  }

  increaseOrderLineAmount(element: any): void {
    element.orderLine.amount++;
    this.waiterCockpitService.updateOrderLine(element.orderLine, element.orderLine.id).subscribe((data: any) => {
      this.snackBarService.openSnack(this.updateSuccessAlert, 5000, "green");
      this.reload();
    });
  }

  deleteOrderLine(element: any): void {
    for (let orderLine of this.data.orderLines) {
      if (orderLine.orderLine.id == element.orderLine.id) {
        this.data.orderLines.splice(this.data.orderLines.indexOf(orderLine), 1);
      }
    }
    this.waiterCockpitService.deleteOrderLine(element.orderLine.id).subscribe((data: any) => {
      this.snackBarService.openSnack(this.updateSuccessAlert, 5000, "green");
      this.reload();
    });
  }

  reload() {
    this.router.navigateByUrl("/archive");
  }
}