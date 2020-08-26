import React, { useEffect, useState, useRef } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  Link,
  Block,
  BlockTitle,
  Row,
  Col,
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem
} from 'framework7-react';
import GoogleMap from "../components/GoogleMap"


export default function home() {

  useEffect(() => {


  }, [])
  return (
    <Page name="home" className="backGroundPage" >
      {/* Top Navbar */}
      <Navbar sliding={false} noShadow={true}>
        <NavTitle sliding className="nav-title homeTitle">Backpackers Trails</NavTitle>
      </Navbar>

      {/* Page content */}
      {/* <div>
      <GoogleMap />
    </div> */}
      <Card expandable>
        <CardContent padding={false}>
          <div className="bg-color-yellow bikeTrail" style={{ height: '300px' }}>
            <CardHeader textColor="black" className="display-block">
              Bike Trails
            <br />
              <small style={{ opacity: 0.87 }}>This trails specially for bikers</small>
            </CardHeader>
            <Link cardClose color="black" className="card-opened-fade-in" style={{ position: 'absolute', right: '15px', top: '15px' }} iconF7="multiply_circle_fill" />
          </div>
          <div className="card-content-padding">
            <Card className="bookineCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloremque mollitia! Dolorum, quod ad quas magni facilis, non veniam, distinctio iure alias fugit libero expedita beatae veritatis porro sunt accusamus.</Card>
            <Card className="bookineCard">
            <List>
              <ListItem
                key={1}
                title="Purulia Zone"
                link={`/product/1`}
              />
              <ListItem
                key={2}
                title="Bankura Zone"
                link={`/product/2`}
              />
              <ListItem
                key={3}
                title="Purulia Zone"
                link={`/product/1`}
              />
              <ListItem
                key={4}
                title="Bankura Zone"
                link={`/product/2`}
              />
              <ListItem
                key={5}
                title="Purulia Zone"
                link={`/product/1`}
              />
              <ListItem
                key={6}
                title="Bankura Zone"
                link={`/product/2`}
              />

            </List>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card expandable>
        <CardContent padding={false}>
          <div className="bg-color-yellow cycleTrail" style={{ height: '300px' }}>
            <CardHeader textColor="black" className="display-block">
              Cycle Trails
            <br />
              <small style={{ opacity: 0.87 }}>This trails specially for cycle lovers</small>
            </CardHeader>
            <Link cardClose color="black" className="card-opened-fade-in" style={{ position: 'absolute', right: '15px', top: '15px' }} iconF7="multiply_circle_fill" />
          </div>
          <div className="card-content-padding">
            <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
          </div>
        </CardContent>
      </Card>

      <Card expandable>
        <CardContent padding={false}>
          <div className="bg-color-yellow treakTrail" style={{ height: '300px' }}>
            <CardHeader textColor="black" className="display-block">
              Cycle Trails
            <br />
              <small style={{ opacity: 0.87 }}>Go on a long arduous journey, typically on you foot.</small>
            </CardHeader>
            <Link cardClose color="black" className="card-opened-fade-in" style={{ position: 'absolute', right: '15px', top: '15px' }} iconF7="multiply_circle_fill" />
          </div>
          <div className="card-content-padding">
            <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
          </div>
        </CardContent>
      </Card>

      {/* <Button fill raised loginScreenOpen="#my-login-screen" ref={loginOpen} onClick={handelLogin} >Login Screen</Button> */}
      {/* <BlockTitle>Navigation</BlockTitle>
    

    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#my-popup">Popup</Button>
        </Col>
        <Col width="50">
          <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised panelOpen="left">Left Panel</Button>
        </Col>
        <Col width="50">
          <Button fill raised panelOpen="right">Right Panel</Button>
        </Col>
      </Row>
    </Block> */}


    </Page>
  )
};