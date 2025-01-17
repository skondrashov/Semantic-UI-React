import React from 'react'

import Tab from 'src/modules/Tab/Tab'
import TabPane from 'src/modules/Tab/TabPane'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Tab', () => {
  common.isConformant(Tab)
  common.forwardsRef(Tab)
  common.forwardsRef(Tab, { requiredProps: { menu: { vertical: true } } })
  common.hasSubcomponents(Tab, [TabPane])

  const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]

  describe('menu', () => {
    it('passes the props to the Menu', () => {
      shallow(<Tab menu={{ 'data-foo': 'bar' }} />)
        .find('Menu')
        .should.have.props({ 'data-foo': 'bar' })
    })

    it('has an item for every menuItem in panes', () => {
      const items = shallow(<Tab panes={panes} />)
        .find('Menu')
        .shallow()
        .find('MenuItem')

      items.should.have.lengthOf(3)
      items.at(0).shallow().should.contain.text('Tab 1')
      items.at(1).shallow().should.contain.text('Tab 2')
      items.at(2).shallow().should.contain.text('Tab 3')
    })

    it('renders above the pane by default', () => {
      const wrapper = shallow(<Tab panes={panes} />)

      wrapper.childAt(0).should.match('Menu')
      wrapper.childAt(1).shallow().should.match('Segment')
    })

    it("renders below the pane when attached='bottom'", () => {
      const wrapper = shallow(<Tab menu={{ attached: 'bottom' }} panes={panes} />)

      wrapper.childAt(0).shallow().should.match('Segment')
      wrapper.childAt(1).should.match('Menu')
    })

    it("infers tabular's value from tab's menuPosition if tabular is set to true", () => {
      const menu = { fluid: true, vertical: true, tabular: true }
      const wrapper = shallow(<Tab menu={menu} menuPosition='right' panes={panes} />)

      wrapper.childAt(0).should.match('Grid')
      wrapper.childAt(0).shallow().childAt(1).should.match('GridColumn')
      wrapper.childAt(0).shallow().childAt(1).shallow().childAt(0).should.match('Menu')
      wrapper.find('Menu').should.have.prop('tabular', 'right')
    })

    it("does not infer tabular's value from tab's menuPosition if tabular is explicitly set", () => {
      const menu = { fluid: true, vertical: true, tabular: 'right' }
      const wrapper = shallow(<Tab menu={menu} menuPosition='left' panes={panes} />)

      wrapper.childAt(0).should.match('Grid')
      wrapper.childAt(0).shallow().childAt(0).should.match('GridColumn')
      wrapper.childAt(0).shallow().childAt(0).shallow().childAt(0).should.match('Menu')
      wrapper.find('Menu').should.have.prop('tabular', 'right')
    })

    it('renders right when tabular is set to right', () => {
      const menu = { fluid: true, vertical: true, tabular: 'right' }
      const wrapper = shallow(<Tab menu={menu} panes={panes} />)

      wrapper.childAt(0).should.match('Grid')
      wrapper.childAt(0).shallow().childAt(0).should.match('GridColumn')
      wrapper.childAt(0).shallow().childAt(0).shallow().childAt(0).shallow().should.match('Segment')
      wrapper.childAt(0).shallow().childAt(1).should.match('GridColumn')
      wrapper.childAt(0).shallow().childAt(1).shallow().childAt(0).should.match('Menu')
    })
  })

  describe('menuPosition', () => {
    it('renders left of the pane when set left', () => {
      const menu = { fluid: true, vertical: true }
      const wrapper = shallow(<Tab menu={menu} menuPosition='left' panes={panes} />)

      wrapper.childAt(0).should.match('Grid')
      wrapper.childAt(0).shallow().childAt(0).should.match('GridColumn')
      wrapper.childAt(0).shallow().childAt(0).shallow().childAt(0).should.match('Menu')
      wrapper.childAt(0).shallow().childAt(1).should.match('GridColumn')
      wrapper.childAt(0).shallow().childAt(1).shallow().childAt(0).shallow().should.match('Segment')
    })

    it("renders left of the pane when set 'left', even if tabular is right", () => {
      const menu = { fluid: true, vertical: true, tabular: 'right' }
      const wrapper = shallow(<Tab menu={menu} menuPosition='left' panes={panes} />)

      wrapper.childAt(0).should.match('Grid')
      wrapper.childAt(0).shallow().childAt(0).should.match('GridColumn')
      wrapper.childAt(0).shallow().childAt(0).shallow().childAt(0).should.match('Menu')
      wrapper.childAt(0).shallow().childAt(1).should.match('GridColumn')
      wrapper.childAt(0).shallow().childAt(1).shallow().childAt(0).shallow().should.match('Segment')
    })

    it("renders right of the pane when set 'right'", () => {
      const menu = { fluid: true, vertical: true }
      const wrapper = shallow(<Tab menu={menu} menuPosition='right' panes={panes} />)

      wrapper.childAt(0).should.match('Grid')
      wrapper.childAt(0).shallow().childAt(0).should.match('GridColumn')
      wrapper.childAt(0).shallow().childAt(0).shallow().childAt(0).shallow().should.match('Segment')
      wrapper.childAt(0).shallow().childAt(1).should.match('GridColumn')
      wrapper.childAt(0).shallow().childAt(1).shallow().childAt(0).should.match('Menu')
    })
  })

  describe('activeIndex', () => {
    it('is passed to the Menu', () => {
      const wrapper = mount(<Tab panes={panes} activeIndex={123} />)

      wrapper.find('Menu').should.have.prop('activeIndex', 123)
    })

    it('is set when clicking an item', () => {
      const wrapper = mount(<Tab panes={panes} />)

      wrapper.find('TabPane').should.contain.text('Tab 1')

      wrapper.find('MenuItem').at(1).simulate('click')
      wrapper.find('TabPane').should.contain.text('Tab 2 Content')
    })

    it('can be set via props', () => {
      const wrapper = mount(<Tab panes={panes} activeIndex={1} />)

      wrapper.find('TabPane').should.contain.text('Tab 2 Content')

      wrapper.setProps({ activeIndex: 2 }).find('TabPane').should.contain.text('Tab 3 Content')
    })

    it('determines which pane render method is called', () => {
      const activeIndex = 1
      const props = { activeIndex, panes }
      sandbox.spy(panes[activeIndex], 'render')

      shallow(<Tab {...props} />)

      panes[activeIndex].render.should.have.been.calledOnce()
      panes[activeIndex].render.should.have.been.calledWithMatch(props)
    })
  })

  describe('onTabChange', () => {
    it('is called when a menu item is clicked', () => {
      const activeIndex = 1
      const onTabChange = sandbox.spy()
      const event = { fake: 'event' }
      const props = { onTabChange, panes }

      mount(<Tab {...props} />)
        .find('MenuItem')
        .at(activeIndex)
        .simulate('click', event)

      // Since React will have generated a key the returned tab won't match
      // exactly so match on the props instead.
      onTabChange.should.have.been.calledOnce()
      onTabChange.should.have.been.calledWithMatch(event, props, 1)
    })
    it('is called with the new proposed activeIndex, not the current', () => {
      const onTabChange = sandbox.spy()

      const items = mount(<Tab activeIndex={-1} onTabChange={onTabChange} panes={panes} />).find(
        'MenuItem',
      )

      onTabChange.should.have.callCount(0)

      items.at(0).simulate('click')
      onTabChange.should.have.callCount(1)
      onTabChange.lastCall.args[2].should.equal(0)

      items.at(1).simulate('click')
      onTabChange.should.have.callCount(2)
      onTabChange.lastCall.args[2].should.equal(1)

      items.at(2).simulate('click')
      onTabChange.should.have.callCount(3)
      onTabChange.lastCall.args[2].should.equal(2)
    })
  })

  describe('renderActiveOnly', () => {
    it('renders all tabs when false', () => {
      const textPanes = [{ pane: 'Tab 1' }, { pane: 'Tab 2' }, { pane: 'Tab 3' }]
      const items = mount(<Tab panes={textPanes} renderActiveOnly={false} />).find('TabPane')

      items.should.have.lengthOf(3)
      items.at(0).should.contain.text('Tab 1')
      items.at(1).should.contain.text('Tab 2')
      items.at(2).should.contain.text('Tab 3')
    })
  })
})
