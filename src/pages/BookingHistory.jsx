import React from 'react'
import { Page, Navbar, Card } from 'framework7-react';

function BookingHistory() {
    return (
        <Page name="booking history" className="backGroundPage">
        <Navbar title="Booking History" backLink="Back" />
        <Card className="bookineCard animate__animated animate__bounce animate__delay-2s" title="#IFSOT000m001">
          <div>
              <p><strong>Booking Date : </strong> 12/05/2020</p>
              <p><strong>Trail Name : </strong> Baranti To Garpanchakot</p>
              <p><strong>Trail Date : </strong> 18/05/2020</p>
              <p><strong>Head(s) : </strong> 10</p>
              <p><strong>Amount : </strong> 12,000/-</p>
          </div>
        </Card>
        <Card className="bookineCard animate__animated animate__bounce animate__delay-2s" title="#IFSOT000m001">
          <div>
              <p><strong>Booking Date : </strong> 12/05/2020</p>
              <p><strong>Trail Name : </strong> Baranti To Garpanchakot</p>
              <p><strong>Trail Date : </strong> 18/05/2020</p>
              <p><strong>Head(s) : </strong> 10</p>
              <p><strong>Amount : </strong> 12,000/-</p>
          </div>
        </Card>
       
      </Page>
    )
}

export default BookingHistory
