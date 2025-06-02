import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  template: `
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Staff</h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4">
          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul class="divide-y divide-gray-200">
              <li *ngFor="let member of staff">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span class="text-gray-500 font-medium">{{member.name.charAt(0)}}</span>
                        </div>
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{member.name}}</div>
                        <div class="text-sm text-gray-500">{{member.role}}</div>
                        <div class="text-sm text-gray-500">{{member.department}}</div>
                      </div>
                    </div>
                    <div class="ml-2 flex-shrink-0 flex">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {{member.status}}
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
export class StaffComponent {
  staff = [
    { 
      name: 'Dr. Sarah Smith',
      role: 'Senior Doctor',
      department: 'Cardiology',
      status: 'Available'
    },
    {
      name: 'Dr. Michael Johnson',
      role: 'Surgeon',
      department: 'Surgery',
      status: 'In Surgery'
    },
    {
      name: 'Dr. Emily Williams',
      role: 'Pediatrician',
      department: 'Pediatrics',
      status: 'Available'
    }
  ];
} 