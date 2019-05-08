import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'gatsby';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export interface SubNavProps {}

export default class SubNav extends React.Component<SubNavProps, any> {
  state = {
    current: 'mail'
  };

  handleClick = (e: { key: any }) => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };
  public render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{ float: 'right', textAlign: 'right', marginTop: '60px' }}
      >
        <Menu.Item>
          <Link to="/" title="Home">
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/a-markdown-page/" title="About Us">
            <Icon type="mail" />
            About Us
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/" title="Blog">
            <Icon type="appstore" />
            Blog
          </Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Resources
            </span>
          }
        >
          <MenuItemGroup title="Item 1">
            <Menu.Item>Option 1</Menu.Item>
            <Menu.Item>Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item>Option 3</Menu.Item>
            <Menu.Item>Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item>
          <Link to="/contact/">
            <Icon type="mail" />
            Contact Us
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
