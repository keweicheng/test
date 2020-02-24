import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category.model';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  category: Category[];
  

  postCategory: Category = {
    name: '',
  };

  constructor(
    public categoryService: CategoryService    
    ) { }

  ngOnInit() {

    this.categoryService.getCategorys().subscribe( 
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      },
      () => {
      }
    );
  }

  submitCategory() { //增
    this.categoryService.postCategory(this.postCategory).subscribe(
      data => {
        console.log(data);
      }
    )
  };

}
