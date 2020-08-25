import React, { useState, useEffect } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import {
    Page,
    Navbar,
    NavRight,
    Link,
    Popup,
    Card,
    Row,
    Col,
    Block,
    Button,
    Icon
} from 'framework7-react';
import SwiperSlider from "../components/SwiperSlider"

function GoogleMap(props) {
    const [currentCordinate, setCurrentCordinate] = useState({
        lat: 0,
        lng: 0
    })

    const [popup, setPopup] = useState(false)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos)
            setCurrentCordinate({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            })
        }, (error) => {
            console.log(error)
        }, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    }, [])
   
    
      
    return (
        <div>
            <Map google={props.google} zoom={6} center={currentCordinate}  >
                <Marker
                    title={'Mandarmani is a seaside resort village in the state of West Bengal'}
                    name={'Mandarmani'}
                    position={{ lat: 21.6681, lng: 87.7025 }}
                    onClick={() => markerClick(12)}
                />
                <Marker
                    title={'Jhilimili, West Bengal'}
                    name={'Jhilimili'}
                    position={{ lat: 22.8180305, lng: 86.6321308 }}
                    onClick={() => markerClick(11)}
                />
                <Marker
                    title={'Doladanga, West Bengal'}
                    name={'Doladanga'}
                    position={{ lat: 22.9699946, lng: 86.7039752 }}
                    onClick={() => markerClick(10)}
                />
            </Map>


            <Popup className="demo-popup backGroundPage" opened={popup} onPopupClosed={() => setPopup(!popup)}>
                <Page  className="backGroundPage">
                    <Navbar title="Mandarmani">
                        <NavRight>
                            <Link popupClose>Close</Link>
                        </NavRight>
                    </Navbar>
                    <div>
                        <SwiperSlider />
                        <Card
                            outline
                            content="Mandarmani is a seaside resort village in the state of West Bengal, India, and lies in East Midnapore district, at the northern end of the Bay of Bengal. It is one of the largest seaside resorts of West Bengal, fast-developing."
                            className="customCard"
                        ></Card>
                        <Block>
                            <Row>
                                <Col>
                                    <Button outline fill color="purple"><Icon ios="f7:arrow_up_right_diamond_fill" aurora="f7:arrow_up_right_diamond_fill" md="material:directions"
                                    ></Icon>Get Direction</Button>
                                </Col>
                            </Row>
                        </Block>
                    </div>
                </Page>
            </Popup>

        </div>
    )

    function markerClick(markerId) {
        console.log(markerId)
        setPopup(!popup)
    }
}



export default GoogleApiWrapper({
    apiKey: ('AIzaSyCeFDwGFwX7F-z-n4HOhIAkfEad14Y0j8g')
})(GoogleMap)
