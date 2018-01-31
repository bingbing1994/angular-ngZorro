import { Component, OnInit } from '@angular/core';
// import { NzMessageService } from '../../../index.showcase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // isLoadingOne = false;

  // loadOne = (value) => {
  // 	this.isLoadingOne = true;
  // 	setTimeout(_ => {
  // 		this.isLoadingOne = false;
  // 	}, 5000);
  // }

  // orderList = [1, 2, 3, 4]; 

  ngOnInit() {
  // 	setTimeout(_ => {
  // 		this.orderList = [...this.orderList.reverse()];
  // 	},10000)
  }

  // generateArray(value): void {
  // 	return new Array(value);
  // }

  current = 0;
  index = 'First-content';

  pre(): void {
  	this.current -= 1;
  	this.changeContent();
  }

  next(): void {
  	this.current += 1;
  	this.changeContent();
  }

  done(): void {
  	// this._message.success('done');
  	alert('done');
  }

  changeContent() {
  	switch (this.current) {
  		case 0: {
  			this.index = 'First-content';
  			break;
  		}
  		case 1: {
  		    this.index = 'Second-content';
  		    break;
  		}
  		case 2: {
  			this.index = 'third-content';
  			break;
  		}
  		default: {
  			this.index = 'error';
  		}
  	}
  }

}
