# vis-reg-cypress-example

## Instruction:

1. Use cy.screenshot to create screenshots during e2e tests
2. Use `@codechecks/vis-reg` pointed to screenhots directly to automatically do visual regression on the results. See `codechecks.yml`.

Note: if you use parallel jobs you need to pass partial screenshots untill they can be compared together. [See](https://github.com/OasisDEX/eth2dai/blob/dev/.circleci/config.yml#L67)
