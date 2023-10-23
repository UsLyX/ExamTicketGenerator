//импорт файлов авторизации
import authorizationTeacher from '../pages/authorization/authorizationTeacher.vue';
import registrationTeacher from '../pages/registration/registTeacher.vue';

//импорт файлов личного кабинета
import exPersonalAccount from '../pages/personalAccount/PersonalAccount.vue';

//импорт файлов добавления данных
import { createRouter, createWebHistory } from 'vue-router';

import addingData from '../pages/addingData/addingData.vue';
import viewTicket from '../pages/addingData/ticket-view/viewTicket.vue';
import ticketExample from '../pages/addingData/ticket-view/ticketExample.vue';
import firstCreatingTemplate from '../pages/addingData/ticket-creating/firstCreatingTemplate.vue';
import secondCreatingTemplate from '../pages/addingData/ticket-creating/secondCreatingTemplate.vue';
import editingTicket from '../pages/addingData/ticket-redact/editingTicketOne.vue';
import templateEditingTwo from '../pages/addingData/ticket-redact/editingTicketTwo.vue';
import templateEditingThree from '../pages/addingData/ticket-redact/editingTicketThree.vue';
import generationTicket from '../pages/addingData/ticket-generation/ticketsGenerationOne.vue';
import generationTicketTwo from '../pages/addingData/ticket-generation/ticketsGenerationTwo.vue';

const routes = [
  //роутеры авторизации
  {
    path: '/authorizationTeacher',
    name: 'authorizationTeacher',
    component: authorizationTeacher,
    alias: '/',
  },
  {
    path: '/registrationTeacher',
    name: 'registrationTeacher',
    component: registrationTeacher,
  },

  //роутеры личного кабинета
  {
    path: '/personalAccount',
    name: 'personalAccount',
    component: exPersonalAccount,
  },

  //роутеры добавления данных
  {
    path: '/addingData',
    name: 'addingData',
    component: addingData,
    children: [
      {
        path: '/addingData/viewTicket',
        name: 'viewTicket',
        component: viewTicket,
      },
      {
        path: '/addingData/viewTicket/ticketExample',
        name: 'ticketExample',
        component: ticketExample,
      },
      {
        path: '/addingData/ticket-creating',
        name: 'ticket-creating',
        component: firstCreatingTemplate,
      },
      {
        path: '/addingData/ticket-creating/secondCreating',
        name: 'secondCreating',
        component: secondCreatingTemplate,
      },
      {
        path: '/addingData/ticket-edit',
        name: 'ticket-edit',
        component: editingTicket,
      },
      {
        path: '/addingData/ticket-edit/templateEditingTwo',
        name: 'templateEditingTwo',
        component: templateEditingTwo,
      },
      {
        path: '/addingData/ticket-edit/templateEditingThree',
        name: 'templateEditingThree',
        component: templateEditingThree,
      },
      {
        path: '/addingData/ticket-generation',
        name: 'ticket-generation',
        component: generationTicket,
      },
      {
        path: '/addingData/ticket-generation/successfully',
        name: 'successfully',
        component: generationTicketTwo,
      },
    ],
  },

  //обработка неверных маршрутов
  //task переписать редирект. Создать станицу 404 об ошибке.
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'authorizationTeacher' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE__URL),
  routes,
});

export default router;
