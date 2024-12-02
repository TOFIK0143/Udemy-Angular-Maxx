import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name!: string;
  isAddingTask = false;

 dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u7',
      title: 'Develop API Documentation',
      summary: 'Create comprehensive API documentation for the new feature release.',
      dueDate: '2024-07-20'
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Design Marketing Campaign',
      summary: 'Plan and design a marketing campaign for the upcoming product launch.',
      dueDate: '2024-08-10'
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Conduct User Testing',
      summary: 'Organize and conduct user testing sessions for the new mobile app.',
      dueDate: '2024-09-05'
    },
    {
      id: 't7',
      userId: 'u4',
      title: 'Optimize Database Performance',
      summary: 'Analyze and optimize the database performance for improved query efficiency.',
      dueDate: '2024-10-15'
    },
  ];

  get selectedUserTask(){
    return this.dummyTasks.filter((task) => task.userId === this.userId) ;   
  };

  onCompleteTask(id: string){
    this.dummyTasks = this.dummyTasks.filter((task)=> task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }
  
  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){
    this.dummyTasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
}