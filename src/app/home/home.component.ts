import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

     private data = {};
     constructor(private http: HttpClient){

      //private data;

      


     }



     getData(){
      let currentReff = this;
      console.log("Test get data");
      const headers = new HttpHeaders({
        'X-RapidAPI-Key':'5dc31e16d2msh374ecf997b7004dp1042dajsnad1c92e773b7',
        'X-RapidAPI-Host': 'baseball-data.p.rapidapi.com'
    });

      this.http.get('https://baseball-data.p.rapidapi.com/match/list/scheduled',
      {
        params:{'date': '02/11/2020'},
        headers: headers

      })
      .subscribe((res)=>{
        console.log(res);
        currentReff.data = res; 
      });
     }

     setData(){
      let currentReff = this;

      let len = Object.keys(currentReff.data);
      console.log(len);
      if(len.length){
        currentReff.http.post('https://angulartest-c5ca8-default-rtdb.firebaseio.com/game.json',currentReff.data)
        .subscribe((res)=>{
          console.log(res);
        });
        
        
      }
      //if(currentReff.data > 0)
      //console.log(currentReff.data); 
     }
    
}
