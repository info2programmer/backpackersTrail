import React from 'react';
import { Page, Navbar, BlockTitle, Block, Card, CardHeader, CardContent, CardFooter, Link } from 'framework7-react';
import Axios from 'axios';
import CustomPreloader from '../components/CustomPreloader';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zoneId: props.f7route.params.zoneId,
      typeId: props.f7route.params.typeId,
      trailList: [],
      loading: true
    };

  }
  componentDidMount() {
    var zoneId = this.state.zoneId;
    var typeId = this.state.typeId;

    let params = {
      zoneId: zoneId,
      tarilTypeId: typeId
    }
    Axios.get("http://localhost/izifiso_new/api/trailApi/trailList", { params })
      .then((res) => {
        if (res.data) {
          this.setState({
            trailList: res.data.trailList,
            loading: false
          })
        }

      })
  }
  render() {
    return (
      <Page name="zone" className="backGroundPage">
        <Navbar title="Trails" backLink="Back" noShadow={true} />
        {this.state.loading === true ? (<CustomPreloader />) : (this.state.trailList.map((i, k) => (
          <Card className="customCard" key={k}>
            <CardHeader
              className="no-border"
              valign="bottom"
              style={{ backgroundImage: `url(http://localhost/izifiso_new/assets/front/trail-image/${i.trailImage})` }}
            >{i.trailName}</CardHeader>
            <CardContent>
              <p>{i.trailMetaDescription}</p>
            </CardContent>
            <CardFooter>
              <Link>Explore Trail</Link>
            </CardFooter>
          </Card>
        ))

        )}

      </Page>
    );
  }
}