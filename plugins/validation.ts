/**
 * Клиентская валидация
 * Набор встроенных правил https://logaretm.github.io/vee-validate/guide/rules.html#rules
 * Установка ошибок сервера
 * https://logaretm.github.io/vee-validate/advanced/server-side-validation.html#handling-backend-validation
 * Добавление новых правил https://logaretm.github.io/vee-validate/api/extend.html#signature
 * Полная документация https://logaretm.github.io/vee-validate/
 */

/* eslint-disable */
// @ts-nocheck
import Vue from 'vue'
import {
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
import ru from 'vee-validate/dist/locale/ru.json'
import * as rules from 'vee-validate/dist/rules'
import { required } from 'vee-validate/dist/rules.umd.js'

// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

localize('ru', ru)

extend('required', {
  ...required,
  message: 'Поле обязательно к заполнению',
})

// Install components globally
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
