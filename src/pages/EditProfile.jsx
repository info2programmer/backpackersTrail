import React, { useRef } from 'react'
import { Page, Navbar, Card, Link, List, ListInput, Button, Row, Block } from 'framework7-react'
import traveler from "../assets/traveler.png"

function EditProfile() {
    const actionsOneGroup = useRef()
    const handelImageChange = (event) => {
        var files = event.target.files,
            file;
        if (files && files.length > 0) {
            file = files[0];
            try {
                // Create ObjectURL
                var imgURL = window.URL.createObjectURL(file);

                // Set img src to ObjectURL
                // showPicture.src = imgURL;

                // Revoke ObjectURL
                console.log(imgURL);
            }
            catch (e) {
                try {
                    // Fallback if createObjectURL is not supported
                    var fileReader = new FileReader();
                    fileReader.onload = function (event) {
                        showPicture.src = event.target.result;
                    };
                    fileReader.readAsDataURL(file);
                }
                catch (e) {
                    console.log(e)
                }
            }
        }
    }
    return (
        <Page name="profile" className="backGroundPage">
            <Navbar title="Edit Profile" backLink="Back" />
            <Card className="settingContainer customCard">
                <img src={traveler} className="avatar" />
                <p><Link href="#" onClick={() => actionsOneGroup.current.click()}>Edit Image</Link></p>
                <List noHairlinesMd className="inputContainer">
                    <ListInput
                        label="Name"
                        type="text"
                        placeholder="Your name"
                    ></ListInput>
                    <ListInput
                        label="E-mail"
                        type="email"
                        placeholder="E-mail"
                    ></ListInput>
                    <ListInput
                        label="Phone"
                        type="tel"
                        placeholder="Phone"
                    ></ListInput>
                    <ListInput
                        label="Gender"
                        type="select"
                    >
                        <option>Male</option>
                        <option>Female</option>
                    </ListInput>
                </List>
                <Block>
                    <Row tag="p">
                        <Button className="col" medium fill raised color="red">Submit</Button>
                    </Row>
                </Block>
            </Card>

            <input type="file" ref={actionsOneGroup} accept="image/*" className="imagePicker" onChange={handelImageChange} />
        </Page>
    )
}

export default EditProfile
