import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample implements OnInit {
  displayedColumns = ['serial'];
  dataSource = ELEMENT_DATA;
  topHeaderColumns = ['business', 'january', 'february', 'march', 'april'];
  topHeaderData = [
    { name: 'business', display: 'Business Type / Month' },
    { name: 'january', display: 'January' },
    { name: 'february', display: 'February' },
    { name: 'march', display: 'March' },
    { name: 'april', display: 'April' },
  ];
  columns = [];

  ngOnInit() {
    this.initColumns();
  }

  initColumns() {
    (this.columns = [
      {
        month: 'january',
        columnDetails: [
          { name: `jan-ava`, display: 'AVA' },
          { name: 'jan-did', display: 'DID' },
          { name: 'jan-ava-ec', display: 'AVAEC' },
        ],
      },
      {
        month: 'february',
        columnDetails: [
          { name: `feb-ava`, display: 'AVA' },
          { name: 'feb-did', display: 'DID' },
          { name: 'feb-ava-ec', display: 'AVAEC' },
        ],
      },
      {
        month: 'march',
        columnDetails: [
          { name: `mar-ava`, display: 'AVA' },
          { name: 'mar-did', display: 'DID' },
          { name: 'mar-ava-ec', display: 'AVAEC' },
        ],
      },
      {
        month: 'april',
        columnDetails: [
          { name: `apr-ava`, display: 'AVA' },
          { name: 'apr-did', display: 'DID' },
          { name: 'apr-ava-ec', display: 'AVAEC' },
        ],
      },
    ]),
      this.columns.forEach((col) => {
        let newColumns = col.columnDetails.map((col) => col.name);
        console.log('New Columns', newColumns);
        this.displayedColumns.push(...newColumns);
      });

    console.log('Displayed Columns', this.displayedColumns);
  }
}

export interface PeriodicElement {
  business: string;
  january?: object;
  february?: object;
  april?: object;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    business: 'GE Power',
    january: { AVA: 1, DID: 2, AVAEC: 4 },
    february: { AVA: 2, DID: 4, AVAEC: 0 },
  },
  {
    business: 'GE Corporate',
    january: { AVA: 3, DID: 2, AVAEC: 4 },
    february: { AVA: 1, DID: 9, AVAEC: 0 },
  },
  {
    business: 'GE Aviation',
    april: { AVA: 3, DID: 2, AVAEC: 4 },
    february: { AVA: 1, DID: 9, AVAEC: 0 },
  },
];

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
