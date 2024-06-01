const { readdirSync } = require('fs')
const path = require('path')

const getDirectories = (source, onlyDirectories = false) =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => onlyDirectories ? dirent.isDirectory() : dirent)
    .map(dirent => dirent.name)

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'componentType',
        message: 'What is the component type?',
        choices: ['global', 'module'],
        default: 'global'
      },
      {
        type: 'list',
        name: 'globalComponent',
        message: 'What is the global component split?',
        choices: getDirectories(path.resolve(__dirname, '../src/presentation/shared/components'), true),
        default: 'layout',
        when: (answer) => {
          return answer.componentType === 'global'
        }
      },
      {
        type: 'list',
        name: 'moduleComponent',
        message: 'What is the module?',
        choices: getDirectories(path.resolve(__dirname, '../src/presentation/modules'), true),
        when: (answer) => {
          return answer.componentType === 'module'
        }
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
    ],
    actions: (answers) => {
      const getActionsByComponentPathname = (componentPathname) => [
        {
          type: 'add',
          path: `../src/presentation/${componentPathname}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: 'templates/components/component.tsx.hbs'
        },
        {
          type: 'add',
          path: `../src/presentation/${componentPathname}/{{pascalCase name}}/{{pascalCase name}}.styled.ts`,
          templateFile: 'templates/components/styled.ts.hbs'
        },
        {
          type: 'add',
          path: `../src/presentation/${componentPathname}/{{pascalCase name}}/{{pascalCase name}}.spec.tsx`,
          templateFile: 'templates/components/component.spec.tsx.hbs'
        },
        {
          type: 'add',
          path: `../src/presentation/${componentPathname}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
          templateFile: 'templates/components/component.stories.ts.hbs'
        }
      ]

      const pathsByAction = {
        module: 'modules/{{moduleComponent}}/components',
        global: 'shared/components/{{globalComponent}}'
      }

      const action = getActionsByComponentPathname(pathsByAction[answers.componentType])

      return action
    }
  })
}
