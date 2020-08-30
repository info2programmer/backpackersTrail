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
  ListItem,
  Preloader
} from 'framework7-react';
import GoogleMap from "../components/GoogleMap"


export default function home() {
  const [loading, setLoading] = useState(true)
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
      {loading ? (<Block className="centErlement"><div className="preloaderContainer"><Preloader color="multi"></Preloader></div></Block>) : (
        <>
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
                      title="Boxa Zone"
                      link={`/product/1`}
                    />
                    <ListItem
                      key={4}
                      title="Darjeeling Zone"
                      link={`/product/2`}
                    />
                    <ListItem
                      key={5}
                      title="Dinajpur Zone"
                      link={`/product/1`}
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
                      title="Boxa Zone"
                      link={`/product/1`}
                    />
                    <ListItem
                      key={4}
                      title="Darjeeling Zone"
                      link={`/product/2`}
                    />
                    <ListItem
                      key={5}
                      title="Dinajpur Zone"
                      link={`/product/1`}
                    />

                  </List>
                </Card>
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
                      title="Boxa Zone"
                      link={`/product/1`}
                    />
                    <ListItem
                      key={4}
                      title="Darjeeling Zone"
                      link={`/product/2`}
                    />
                    <ListItem
                      key={5}
                      title="Dinajpur Zone"
                      link={`/product/1`}
                    />

                  </List>
                </Card>
              </div>
            </CardContent>
          </Card>

        </>
      )}


    </Page>
  )
};