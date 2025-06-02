import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  template: `
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Appointments</h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4">
          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul class="divide-y divide-gray-200">
              <li *ngFor="let appointment of appointments">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{appointment.patientName}}</div>
                        <div class="text-sm text-gray-500">{{appointment.doctorName}}</div>
                        <div class="text-sm text-gray-500">{{appointment.date | date:'medium'}}</div>
                      </div>
                    </div>
                    <div class="ml-2 flex-shrink-0 flex">
                      <span [ngClass]="{
                        'bg-green-100 text-green-800': appointment.status === 'Confirmed',
                        'bg-yellow-100 text-yellow-800': appointment.status === 'Pending',
                        'bg-red-100 text-red-800': appointment.status === 'Cancelled'
                      }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                        {{appointment.status}}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppointmentsComponent {
  appointments = [
    { 
      patientName: 'John Doe',
      doctorName: 'Dr. Smith',
      date: new Date('2024-03-20T10:00:00'),
      status: 'Confirmed'
    },
    {
      patientName: 'Jane Smith',
      doctorName: 'Dr. Johnson',
      date: new Date('2024-03-21T14:30:00'),
      status: 'Pending'
    },
    {
      patientName: 'Bob Johnson',
      doctorName: 'Dr. Williams',
      date: new Date('2024-03-19T09:15:00'),
      status: 'Cancelled'
    }
  ];
} 