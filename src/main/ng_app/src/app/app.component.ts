import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';
   
@Component({
    selector: 'my-app',
    // template: ``,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

    providers: [HttpService]
})
export class AppComponent implements OnInit { 
    name:string;

    // user: User;
    users: User[]=[];
      
    // constructor(private http: HttpClient){ }
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
        // this.http.get('user.json') //Observable<any>
        this.httpService.getUsers()
            // .subscribe((data:User) => this.user=data);
            // .subscribe(data => this.users=data["userList"]);
            .subscribe(data => this.users=data);
    }
}
