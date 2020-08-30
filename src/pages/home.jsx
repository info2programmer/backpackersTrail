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
} from 'framework7-react';
import CustomPreloader from '../components/CustomPreloader';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';


export default function home() {
  const [loading, setLoading] = useState(true)
  const [trailType, setTrailType] = useState([])
  const [zoneList, setZoneList] = useState([])
  useEffect(() => {
    Axios.get("http://localhost/izifiso_new/api/trailApi/trailTypeAndZone")
      .then(function (res) {
        setLoading(!loading)
        setTrailType(res.data.trailType)
        setZoneList(res.data.zone)
      })
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
      {loading ? (<CustomPreloader />) : (
        <>
          {trailType.length > 0 && trailType.map((i, j) => (
            <Card expandable key={j}>
              <CardContent padding={false}>
                <div className="bg-color-yellow" style={{ height: '300px', backgroundImage :
                `url(http://localhost/izifiso_new/assets/front/trail-image/${i.Image})`, backgroundSize: 'cover' }}>
                  <CardHeader textColor="black" className="display-block">
                    {i.name}
                  <br />
                    <small style={{ opacity: 0.87 }}>{i.oneLineDescription}</small>
                  </CardHeader>
                  <Link cardClose color="black" className="card-opened-fade-in" style={{ position: 'absolute', right: '15px', top: '15px' }} iconF7="multiply_circle_fill" />
                </div>
                <div className="card-content-padding">
                  <Card className="bookineCard">{ReactHtmlParser(i.description)}</Card>
                  <Card className="bookineCard">
                    <List>
                      {zoneList.length > 0 && zoneList.map((l,k)=>(
                        <ListItem
                          key={k}
                          title={l.zoneName}
                          link={`/zone/${l.id}/${i.id}`}
                        />
                        ))}  
                    </List>
                  </Card>
                </div>
              </CardContent>
            </Card>
          ))}

        </>
      )}


    </Page>
  )
};