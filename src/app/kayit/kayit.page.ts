import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kayit',
  templateUrl: './kayit.page.html',
  styleUrls: ['./kayit.page.scss'],
})
export class KayitPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
  }

}
