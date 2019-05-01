import { observable } from 'mobx'

enum GENDER {
  MALE,
  FEMALE,
}

export default class Villager {
  constructor({ name, gender }: { name: string; gender?: GENDER }) {
    this.name = name
    this.gender = gender
  }
  name: string
  gender?: GENDER
  @observable available: boolean = true
}
