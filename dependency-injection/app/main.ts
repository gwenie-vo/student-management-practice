import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {provide} from 'angular2/core';
import {StudentService} from './student.service';

bootstrap(AppComponent);
// bootstrap(AppComponent, [
//   provide(StudentService, { useClass: MockStudentService })
// ]);

