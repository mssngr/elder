import fs from 'fs'
import casual from 'casual'
import { autorun } from 'mobx'
import { prompt } from 'enquirer'

import Village from './village'
import Forest from './forest'

const title = fs.readFileSync('./title.txt', 'utf8').toString()
console.log(title)

const village = new Village({ name: 'Sherwood Village' })
const forest = new Forest('Sherwood Forest')

autorun(() => console.log(village.name, { wood: village.wood }))
autorun(() => console.log(forest.name, forest.treeCount))

const choose = async () => {
  await prompt({
    type: 'select',
    name: 'task',
    message: 'What do you want to do?\n(1) Chop down wood.\n',
    choices: ['1'],
    result: async value => {
      switch (value) {
        case '1': {
          console.log(village.availableVillagers.length)
          // await prompt({
          //   type: 'select',
          //   name: 'villagerCount',
          //   message: `How many villagers would you like to assign to this task? (${
          //     village.availableVillagers.length
          //   } villagers available)`,
          // })
          // console.log(
          //   `Received ${village.cutTrees({
          //     forest: forest,
          //     villagers: villagers,
          //   })} wood.`
          // )
          break
        }
        default: {
          break
        }
      }
      return value
    },
  })
  choose()
}
choose()
