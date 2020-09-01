import React from 'react';
import {
  App,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  LoginScreen,
  LoginScreenTitle,
  BlockHeader,
  Button,
  Icon
} from 'framework7-react';
// import { GoogleLogin } from 'react-google-login';

import routes from '../js/routes';
import "../css/app.css"
import SwiperSlider from './SwiperSlider';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import * as firebase from 'firebase';


export default class extends React.Component {

  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        name: 'Backpackers Trails', // App name
        theme: 'auto', // Automatic theme detection

        // App root data
        data: function () {
          return {

            // Demo products for Catalog section
            products: [
              {
                id: '1',
                title: 'Mandarmani',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
              },
              {
                id: '2',
                title: 'Jhilimili',
                description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
              },
              {
                id: '3',
                title: 'Doladanga',
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              },
            ]
          };
        },

        // App routes
        routes: routes,
        view: {
          pushState: false
        },
        // Register service worker
        serviceWorker: {
          path: '/service-worker.js',
        },

      },
      // Login screen demo data
      username: '',
      password: '',
    }


  }

  render() {
    return (
      <App params={this.state.f7params} >

        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom>
            <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home" />
            <Link tabLink="#view-catalog" iconIos="f7:map_fill" iconAurora="f7:map_fill" iconMd="material:map" text="Locations" />
            <Link tabLink="#view-settings" iconIos="f7:gear" iconAurora="f7:gear" iconMd="material:settings" text="Settings" />
          </Toolbar>

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-home" main tab tabActive url="/" />

          {/* Catalog View */}
          <View id="view-catalog" name="catalog" tab url="/catalog/" />

          {/* Settings View */}
          <View id="view-settings" name="settings" tab url="/settings/" />

        </Views>

        {/* Popup */}
        <Popup id="my-popup">
          <View>
            <Page>
              <Navbar title="Popup">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block>
                <p>Popup content goes here.</p>
              </Block>
            </Page>
          </View>
        </Popup>

        <LoginScreen id="my-login-screen">
          <View>
            <Page loginScreen>
              <SwiperSlider />
              <LoginScreenTitle className="loginHeading">Find a that's perfect for you</LoginScreenTitle>
              <BlockHeader>Explore collection of trail maps anywhere. Find your perfect treak, bike, cycle trails</BlockHeader>
              <Block>
                <Button outline onClick={()=>{this.openBrowser()}} > Continue With Google</Button>
                {/* <Link  popupClose="#my-login-screen">continue</Link> */}
              </Block>
            </Page>
          </View>
          <ToastContainer draggable={true} autoClose={5000} />
        </LoginScreen>


      </App>
    )
  }
  alertLoginData() {
    this.$f7.dialog.alert('Username: ' + this.state.username + '<br>Password: ' + this.state.password, () => {
      this.$f7.loginScreen.close();
    });
  }

  // loginWithGoogle(){
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyDP6pGAf-JhrlBFeg_bwZN81bVbLMmBwBw",
  //     authDomain: "izifiso-web.firebaseapp.com",
  //     databaseURL: "https://izifiso-web.firebaseio.com",
  //     projectId: "izifiso-web",
  //     storageBucket: "izifiso-web.appspot.com",
  //     appId: "1:309867453124:android:d84fda21f74d92759a0791"
  //   }
  //   firebase.initializeApp(firebaseConfig)
  //   // alert()
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   alert(JSON.stringify(provider))
    
  //   firebase.auth().signInWithRedirect(provider).then(function() {
  //     return firebase.auth().getRedirectResult();
  //   }).then(function(result) {
  //     // This gives you a Google Access Token.
  //     // You can use it to access the Google API.
  //     var token = result.credential.accessToken;
  //     // The signed-in user info.
  //     var user = result.user;
  //     alert(JSON.stringify(result))
  //     // ...
  //   }).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     alert(JSON.stringify(error))
  //   });
  // }

  openBrowser() {
    var url = 'https://cordova.apache.org';
    var target = '_blank';
    var options = "location = yes"
    var ref = window.cordova.InAppBrowser.open(url, target, options);
    
    ref.addEventListener('loadstart', loadstartCallback);
    ref.addEventListener('loadstop', loadstopCallback);
    ref.addEventListener('loaderror', loaderrorCallback);
    ref.addEventListener('exit', exitCallback);
 
    function loadstartCallback(event) {
       console.log('Loading started: '  + event.url)
    }
 
    function loadstopCallback(event) {
       console.log('Loading finished: ' + event.url)
    }
 
    function loaderrorCallback(error) {
       console.log('Loading error: ' + error.message)
    }
 
    function exitCallback() {
       console.log('Browser is closed...')
    }
 }

  responseGoogleSuccess(response) {
    this.$f7ready((f7) => {
      var data = response.profileObj
      axios.post("http://localhost/izifiso_new/api/trailApi/authResult", JSON.stringify(data))
        .then(function (res) {
          localStorage.setItem("authBackpackersTrail", res.data.token)
          f7.loginScreen.close("#my-login-screen")
        })

    })
  }

  responseGoogleFailure(response) {
    toast.error("Opps! Please try again", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }





  // This Function For setup back button




  componentDidMount() {
    this.$f7ready((f7) => {
      
      if ( localStorage.getItem('authBackpackersTrail') === null) {
        f7.loginScreen.open("#my-login-screen")
      }
      else {
        // Check login okay or not
        let token = {
          token : localStorage.getItem("authBackpackersTrail")
        }
        axios.post("http://localhost/izifiso_new/api/trailApi/verifyLogin", JSON.stringify(token))
          .then(function (res) {
            f7.loginScreen.close("#my-login-screen")
          })
          .catch(function(res){
            f7.loginScreen.open("#my-login-screen")
            toast.error("Opps! Please try again", {
              position: toast.POSITION.BOTTOM_CENTER
            });
          })
      }
    });

  }
}