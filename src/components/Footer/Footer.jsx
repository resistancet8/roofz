import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <Grid columns={7} divided>
          <Grid.Row>
          <Grid.Column></Grid.Column>
            <Grid.Column>
              <ul class="">
                <li class="foot_hding">REAL ESTATE IN INDIA </li>
                <li>
                  <a title="Hyderabad Real Estate" href="#">Hyderabad</a>
                </li>
                <li>
                  <a title="Bengaluru Real Estate" href="#">Bengaluru</a>
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column>
              <ul class="">
                <li class="foot_hding"><span>RoofzNfloors</span> </li>
                <li><a title="Residential Property" href="" target="_blank">Residential Property</a> </li>
                <li><a title="Commercial Property" href="" target="_blank">Commercial Property</a> </li>
                <li><a title="Property Index and Prices" href="" target="_blank">Price Trends</a> </li>
                <li><a title="Services In India" href="">Services In India</a></li>
                <li><a title="New Projects In India" href=""><nobr>New Projects</nobr></a></li>
                <li><a title="Real Estate Articles" href="#">Articles</a></li>
              </ul>
            </Grid.Column>
            <Grid.Column>
              <ul class="">
                <li class="foot_hding">COMPANY </li><li><a href="" title="About Us" target="_blank">About Us</a> </li>
                <li><a title="Contact Us" href="#">Contact Us</a></li>
                <li><a title="Careers with Us" href="#">Careers with Us</a></li>
                <li><a title="Terms &amp; Conditions" href="#">Terms &amp; Conditions</a></li>
                <li><a title="Request Info" href="#">Request Info</a></li>
                <li><a title="Feedback" href="#">Feedback</a></li>
                <li><a title="Report a problem" href="#">Report a problem</a></li>
                <li><a title="Testimonials" href="#">Testimonials</a></li>
                <li><a title="Privacy Policy" href="#">Privacy Policy</a></li>
                <li><a title="Summons/Notices" href="#">Summons/Notices</a></li>
                <li><a title="Grievances" href="#">Grievances</a></li>
                <li><a title="Safety Guide" href="#">Safety Guide</a></li>
              </ul>
            </Grid.Column>
            <Grid.Column>
              <div class="">
                <div class="lf f13 textL">
                  <div class="b f15 ml10">CONTACT US</div>
                  <div class="lf ml10 pdt20">
                    <div class="lf wWrap footer_contact">
                      <b>Toll Free <span class="footer_colorBlue">1800 41 99099</span></b><br />
                      <span class="f12">Monday - Saturday (9:00AM to 6:00PM IST)</span>
                    </div>
                  </div>

                  <div class="clr ml10 pdt10">
                    <div class="lf wWrap">
                      Email: <a class="blkLink footer_colorBlue" href="#">feedback@RoofzNfloors.com</a>
                    </div>
                  </div>
                </div>
                <div class="f16 lf m10 mt20">
                  <div class="b f15">CONNECT WITH US</div>
                  <a class="uiIcon foot_socialLink fb" href="https://www.facebook.com/RoofzNfloors/" target="_blank"></a>
                  <a class="uiIcon foot_socialLink yt" href="https://www.youtube.com/user/RoofzNfloorsindia" target="_blank"></a>
                  <a class="uiIcon foot_socialLink tw" href="https://twitter.com/RoofzNfloorsIndia" target="_blank"></a>
                  <div class="clr"></div>
                  <div class="fn f11">* India's No.1 Property Portal. Source: Alexa.com</div>
                </div>
                <div class="lf m10">
                  <div class="vm10 b f15">MOBILE APP</div>
                  <a class="uiIcon andriod appLnk" title="RoofzNfloors Android App" target="_blank" href="#" />
                  <a class="uiIcon ios appLnk" title="RoofzNfloors iOS App" target="_blank" href="#" />
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;