import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { GeneradorService } from '../../services/generador.service';
import { Url } from 'src/app/model/url';

@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html',
  styleUrls: ['./generador.component.css']
})
export class GeneradorComponent implements OnInit {

  url: Url;
  form: FormGroup;

  constructor(private generadorService: GeneradorService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      id: [],
      url: [""],
      shortUrl: [""]
    });
  }

  generar() {
    let url = { ...this.form.value };

    this.generadorService.generarUrl(url).subscribe(res => {
      alert(`URL Generada: ${res.shortUrl}`);
      this.form.reset(res);
    });

  }

  obtenerUrl() {
    let shortUrl = this.form.value.shortUrl;

    console.log(shortUrl);

    this.generadorService.obtenerUrl(shortUrl).subscribe(res => {
      this.url = res;
      window.open(this.url.url);
    });
  }

}
