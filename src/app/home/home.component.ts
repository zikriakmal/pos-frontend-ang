import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ProductsService} from '../products.service';
import { Product} from '../Product';
import { format } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  angForm: FormGroup;


  constructor(private fb: FormBuilder, private apiService: ProductsService) {
    this.createForm();
  }


  createForm(){
    this.angForm = this.fb.group({
      Nama: ['',Validators.required],
      ProductDescription: ['',Validators.required],
      ProductPrice : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addProduct(name, info, ProductPrice){
    const prow = {
      nama  :name,
      keterangan: info,
    };
    this.apiService.createData(prow).subscribe((product: Product)=>{
      console.log("Policy created, ", product);
    });
    }



}
