import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { shareReplay, Subject } from 'rxjs';


interface Todo {
  id: number;
  content: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  http = inject(HttpClient);

  todos$ = this.http.get<Todo[]>("assets/todos.json").pipe(shareReplay(1));

  private secretKeya = "vim vm, bolo dú"
  private secretKey = "vim vam vum, bocadillo de atún"
  private kindOfSha = this.secretKey.split(" ").reduce((acc, x) => x[0] + acc, "")
  keyIsCorrect = this.kindOfSha === "adbvvv"
  // private removeTodo$ = new Subject<number>();
  //
  // removeTodo(id: number) {
  //   this.http.delete("api/todos");
  // }

}
