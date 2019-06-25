import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

export interface State {
  stateId: string;
  state_name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(
    private homeService: HomeService
  ) { }
  isReportDisabled: boolean = true;
  fields = [
    {
      display_name: "Population",
      name: "population"
    },
    {
      display_name: "Area",
      name: "area"
    },
    {
      display_name: "GDP Per Capita",
      name: "gdp_per_capita"
    },
    {
      display_name: "Literacy Rate",
      name: "literacy_rate"
    },
    {
      display_name: "Gender Ratio",
      name: "gender_ratio"
    }
  ]

  states: State[] = [];
  state: any;

  paiType = 'PieChart';
  paiOptions = {};
  paiWidth = 500;
  paiHeight = 400;
  paiData = [];
  paiColumnNames = [];

  barType = 'BarChart';
  barOptions = {};
  barWidth = 500;
  barHeight = 400;
  barData = [];
  barColumnNames = [];

  ngOnInit() {
    this.getStates();
  }

  getStates() {
    this.homeService.getStates().subscribe(
      states => {
        if (states.statusCode === 200) {
          this.states = states.data;
        } else {
          console.log('error-', states)
        }
      }, error => {
        console.log('error-', error)
      });
  }

  setIsReportDisabled() {
    this.isReportDisabled = this.selectedField && this.valueSelected ? false : true;
  }

  selectedField: string;
  onFieldChange(selectedField) {
    this.selectedField = selectedField;
    this.setIsReportDisabled();
  }

  isClose: boolean;
  valueSelected: string;
  toppings = new FormControl();

  comboChange(event) {
    this.isClose = false;
    if (!event) {
      this.isClose = true;
      this.valueSelected = this.toppings.value && this.toppings.value.toString();
    }
    this.setIsReportDisabled();
  }

  getReport() {
    let tempBarArray = this.valueSelected.split(",");
    let resultArray = [];
    tempBarArray.forEach((item) => {
      let temp = _.find(this.states, ['_id', item]);
      let innerTemp = [];
      if (temp.hasOwnProperty(this.selectedField)) {
        innerTemp.push(temp.state_name);
        innerTemp.push(temp[this.selectedField]);
      }
      resultArray.push(innerTemp);
    })
    this.makeBarChartData(resultArray);
    this.makePaiChartData(resultArray);
  }

  makeBarChartData(resultArray) {
    this.barType = 'ComboChart';
    this.barData = resultArray;
    this.barOptions = {
      seriesType: 'bars',
      series: { 2: { type: 'line' } }
    };
    let tempObj = _.find(this.fields, ['name', this.selectedField]);
    this.barColumnNames = ['state', tempObj.display_name];
  }

  makePaiChartData(resultArray) {
    this.paiData = resultArray;
    let tempObj = _.find(this.fields, ['name', this.selectedField]);
    this.paiColumnNames = ['state', tempObj.display_name];
  }
}
