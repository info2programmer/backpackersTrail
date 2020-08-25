import React from 'react';
import { Page, Navbar, List, ListItem,Card } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: this.$f7.data.products,
    }
  }
  render() {
    return (
      <Page name="Location List" className="backGroundPage">
        <Navbar title="Location List" />
        <Card className="settingContainer customCard">
        <List>
          {this.state.products.map((product) => (
            <ListItem
              key={product.id}
              title={product.title}
              link={`/product/${product.id}/`}
            />
          ))}
        </List>
        </Card>
      </Page>
    );
  }
}