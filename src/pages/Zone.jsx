import React from 'react';
import { Page, Navbar, BlockTitle, Block } from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    var zoneId = props.f7route.params.zoneId;
    var typeId = props.f7route.params.typeId;
    

    this.state = {
      zoneId: zoneId,
      typeId : typeId
    };

  }
  render() {
    return (
      <Page name="zone">
        <Navbar title={this.state.zoneId} backLink="Back" />
        <BlockTitle>About {this.state.typeId}</BlockTitle>
        <Block strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi beatae dolor deserunt odio earum provident eligendi id incidunt placeat officia voluptatibus at, sunt nulla voluptate ducimus mollitia? Porro, minus.
        </Block>
      </Page>
    );
  }
}