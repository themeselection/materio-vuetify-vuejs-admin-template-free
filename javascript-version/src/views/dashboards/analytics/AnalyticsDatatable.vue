<script setup>
const data = [
  {
    responsiveId: '',
    id: 95,
    fullName: 'Edwina Ebsworth',
    post: 'Human Resources Assistant',
    email: 'eebsworth2m@sbwire.com',
    city: 'Puzi',
    start_date: '09/27/2018',
    salary: 19586.23,
    age: '27',
    experience: '2 Years',
    status: 1,
  },
  {
    responsiveId: '',
    id: 1,
    fullName: 'Korrie O\'Crevy',
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    start_date: '09/23/2016',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 2,
  },
  {
    responsiveId: '',
    id: 7,
    fullName: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    start_date: '10/15/2017',
    salary: 18991.67,
    age: '59',
    experience: '9 Years',
    status: 3,
  },
  {
    responsiveId: '',
    id: 11,
    fullName: 'De Falloon',
    post: 'Sales Representative',
    email: 'dfalloona@ifeng.com',
    city: 'Colima',
    start_date: '06/12/2018',
    salary: 19252.12,
    age: '30',
    experience: '0 Year',
    status: 4,
  },
  {
    responsiveId: '',
    id: 3,
    fullName: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    start_date: '03/24/2018',
    salary: 13076.28,
    age: '66',
    experience: '6 Years',
    status: 5,
  },
  {
    responsiveId: '',
    id: 5,
    fullName: 'Harmonia Nisius',
    post: 'Senior Cost Accountant',
    email: 'hnisius4@gnu.org',
    city: 'Lucan',
    start_date: '08/25/2017',
    salary: 10909.52,
    age: '33',
    experience: '3 Years',
    status: 2,
  },
  {
    responsiveId: '',
    id: 6,
    fullName: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    start_date: '06/01/2017',
    salary: 17803.8,
    age: '61',
    experience: '1 Year',
    status: 1,
  },
  {
    responsiveId: '',
    id: 4,
    fullName: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    start_date: '12/03/2017',
    salary: 12336.17,
    age: '22',
    experience: '2 Years',
    status: 2,
  },
]
const status = {
  1: 'Current',
  2: 'Professional',
  3: 'Rejected',
  4: 'Resigned',
  5: 'Applied',
}
const statusColor = {
  Current: 'primary',
  Professional: 'success',
  Rejected: 'error',
  Resigned: 'warning',
  Applied: 'info',
}
const headers = [
  'NAME',
  'EMAIL',
  'DATE',
  'SALARY',
  'AGE',
  'STATUS',
]
const usreList = data
</script>

<template>
  <VCard>
    <VTable
      :headers="headers"
      :items="usreList"
      item-key="fullName"
      class="table-rounded"
      hide-default-footer
      disable-sort
    >
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header"
          >
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="row in data"
          :key="row.fullName"
        >
          <!-- name -->

          <td>
            <div class="d-flex flex-column">
              <span class="d-block font-weight-semibold text--primary text-truncate">{{ row.fullName }}</span>
              <small>{{ row.post }}</small>
            </div>
          </td>

          <td v-text="row.email" />
          <td v-text="row.start_date" />
          <td v-text="`$${row.salary}`" />
          <td v-text="row.age" />
          <!-- status -->
          <td>
            <VChip
              small
              :color="statusColor[status[row.status]]"
              class="font-weight-medium"
            >
              {{ status[row.status] }}
            </VChip>
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>
