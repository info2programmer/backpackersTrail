import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Card,
  Icon
} from 'framework7-react';
import traveler from "../assets/traveler.png"

export default () => (
  <Page name="settings" className="backGroundPage">
    <Navbar title="Settings" />
    <Card className="settingContainer customCard">
      <img src={traveler} className="avatar" />
      <BlockTitle className="profileName">Jhon Doe</BlockTitle>
      <BlockTitle className="profileNumber">9547763998</BlockTitle>
    </Card>

    <Card className="settingContainer customCard">
      <List>
        <ListItem link={`/bookinghistory/`} title="Booking History" badge="5">
          <Icon slot="media"  ios="f7:tickets_fill" aurora="f7:tickets_fill" md="material:table_chart" color="black"></Icon>
        </ListItem>
        <ListItem link="/edit-profile/" title="Edit Profile" >
          <Icon slot="media"  ios="f7:person_circle_fill" aurora="f7:person_circle_fill" md="material:account_circle" color="purple"></Icon>
        </ListItem>
        <ListItem link="#" title="Logout">
          <Icon slot="media"  ios="f7:square_arrow_right" aurora="f7:square_arrow_right" md="material:exit_to_app" color="red"></Icon>
        </ListItem>
      </List>
    </Card>
  </Page>
);