import React, { Component } from 'react';
import { Item, Text,StyleLink
} from './nav.style';
import { Link } from 'react-router';

class Nav extends Component {

  constructor(props){
    super(props);

    this.items = [
      {
        "id" : 1,
        "text": "About",
        "url": "/about"
      },
      {
        "id" : 2,
        "text": "Design",
        "url": "/design"
      },
      {
        "id" : 3,
        "text": "Art",
        "url": "/art"
      },
      {
        "id" : 4,
        "text": "Code",
        "url": "/code"
      },
      {
        "id" : 5,
        "text": "Connect",
        "url": "/connect"
      }
    ]
  }

  generateItem(item){
    return (
        <NavBarLink text={item.text} url={item.url} key={item.id} id={item.id} primary={this.props.primary}/>
    );
  }

  render() {
    let items = this.items.map(this.generateItem.bind(this)).reverse();
    return (
        <div>
          {items}
        </div>
    );
  }
}

class NavBarItem extends Component {

  constructor(props) {
    super(props);
    this.state = {hovered: false};
  }

  style() {
    if(this.state.hovered) {
      return {
        backgroundColor:"red"
      }
    }else{
      return {backgroundColor: "black"}
    }
  }


  render() {
    return (<NavBarLink
                url={this.props.url}
                text={this.props.text}
                key={this.props.id}
                id={this.props.id}
                primary={this.props.primary}
            />);
  }
}

class NavBarLink extends Component {

  render() {
    return (<Item>
              <Link to={this.props.url}>
                <StyleLink key={this.props.id}>
                  <Text primary={this.props.primary}>
                    {this.props.text}
                  </Text>
                </StyleLink>
              </Link>
           </Item>);
  }
}

export default Nav;
