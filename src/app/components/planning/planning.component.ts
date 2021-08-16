import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  constructor() { }

  //planningType: string[] = ['Групповое', 'Индивидуальное'];

  data = {
      "planningType": ['Групповое', 'Индивидуальное'],
      "plans": [
        {
			"date": "23 дек, 9:00",
			"title":"Страхование с заботой о клиенте",
			"countusers": 12,
			"trainer": "",
			"progress": 90
		},
		{
			"date": "22 дек, 9:00",
			"title":"Страхование с заботой о клиенте",
			"countusers": 12,
			"trainer": "",
			"progress": 90
		},
		{
			"date": "23 дек, 9:00",
			"title":"Страхование с заботой о клиенте",
			"countusers": 12,
			"trainer": "",
			"progress": 90
		},
      ]
    }



  ngOnInit(): void {
  }

}
