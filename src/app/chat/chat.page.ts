import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  mensagens: Array<{nome: string, content: string}> = [];
  hall = null;
  name = null;
  message = null;
  flag = 0;

  constructor(private activvatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.hall = this.activvatedRoute.snapshot.paramMap.get('hall');
    this.name = this.activvatedRoute.snapshot.paramMap.get('name');
  }

  pushMessage(){
    if(this.message != null){ 
      this.mensagens.push({
        nome: this.name,
        content: this.message
      });
      this.flag = 1;
      this.message = null;
    }  
  }
}
