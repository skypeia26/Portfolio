import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  taskArray = [{ taskName: 'Fixing Header', isCompleted: false, isEditable: false }];
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.getFromLocalStorage();
    }
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
      isEditable: false
    });

    if (this.isBrowser) {
      this.saveToLocalStorage();
    }

    form.reset();
  }
  
  saveToLocalStorage() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      let stringJSON = JSON.stringify(this.taskArray);
      localStorage.setItem('todo-list', stringJSON);
    } else {
      console.warn('localStorage is not available.');
    }
  }
  
  getFromLocalStorage() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      let itemsJSONString = localStorage.getItem('todo-list');
      if (itemsJSONString != null) {
        this.taskArray = JSON.parse(itemsJSONString);
      }
    } else {
      console.warn('localStorage is not available.');
    }
  }
  

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
    this.saveToLocalStorage();
  }

  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;

    this.saveToLocalStorage();
  }

  onEdit(index: number) {
    this.taskArray[index].isEditable = true;
    this.saveToLocalStorage();
  }

  onSave(index: number, newtask: string) {
    this.taskArray[index].taskName = newtask;
    this.taskArray[index].isEditable = false;
    this.saveToLocalStorage();
  }
}