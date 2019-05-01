import { observable, computed } from 'mobx'
import casual from 'casual'

import Forest from './forest'
import Villager from './villager'

export default class Village {
  constructor({
    name,
    villagers,
    wood,
    stone,
    copper,
    iron,
  }: {
    name: string
    villagers?: Villager[]
    wood?: number
    stone?: number
    copper?: number
    iron?: number
  }) {
    this.name = name
    this.villagers =
      villagers ||
      casual
        .array_of_digits(10)
        .map(() => new Villager({ name: casual.full_name }))
    this.wood = wood || 0
    this.stone = stone || 0
    this.copper = copper || 0
    this.iron = iron || 0
  }
  name: string
  @observable villagers: Villager[]
  @observable wood: number
  @observable stone: number
  @observable copper: number
  @observable iron: number
  cutTrees({ forest, villagers }: { forest: Forest; villagers: Villager[] }) {
    this.wood += forest.cutTrees(villagers.length)
  }
  @computed get availableVillagers(): Villager[] {
    return this.villagers.filter(villager => villager.available)
  }
}
