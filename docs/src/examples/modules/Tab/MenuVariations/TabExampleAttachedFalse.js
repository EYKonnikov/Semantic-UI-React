import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]

const TabExampleAttachedFalse = () => (
  <Tab menu={{ attached: false }} panes={panes} />
)

export default TabExampleAttachedFalse
