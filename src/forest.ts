import { observable } from 'mobx'
import casual from 'casual'

export default class Forest {
  constructor(name: string, treeCount?: number) {
    this.name = name
    this.treeCount = treeCount || casual.integer(500, 300000)
  }
  name: string
  @observable treeCount: number
  cutTrees = (treesCut: number): number => {
    this.treeCount = this.treeCount - treesCut
    const sizeOfTree = casual.integer(5, 22)
    const multiplier = sizeOfTree / 22
    return Math.round(treesCut * multiplier * multiplier * 100)
  }
}
