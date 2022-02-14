'use strict'
import { utils } from './utils.service.js'
import { DbService } from './db-service.js'

const KEY = 'contacts'

export default {
  query,
  get,
  remove,
  save,
  getEmptyContact,
}

async function query() {
  let contacts = await DbService.query(KEY)
  if (!contacts || !contacts.length) {
    contacts = _createDefaultContacts()
    await DbService.insert(KEY, contacts)
  }
  return contacts
}

async function get(id) {
  const contact = await DbService.get(KEY, id)
  if (!contact) {
    throw new Error('Unknown Contact')
  }
  return contact
}

function remove(id) {
  return DbService.delete(KEY, id)
}

function save(contact) {
  if (contact._id) return DbService.put(KEY, contact)
  else return DbService.post(KEY, contact)
}

function getEmptyContact() {
  return {
    name: '',
    email: '',
    phone: '',
    imgUrl: ''
  }
}

function _createDefaultContacts() {
  return [
    _createContact('Donald John Trump','trump@gmail.com', '+1 (968) 593-1234'),
    _createContact('Noa Kirel', 'noa@gmail.com', '+1 (968) 593-45764'),
    _createContact('Beyonce Bebe', 'bebe@gmail.com', '+1 (968) 593-8654'),
    _createContact('Rihanna Riri', 'riri@gmail.com', '+1 (968) 593-2464'),
  ]
}

function _createContact(name, email, phone) {
  return {
    _id: utils.getRandomId,
    name,
    email,
    phone,
    imgUrl: `https://robohash.org/${name}`
  }
}
