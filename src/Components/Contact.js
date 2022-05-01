import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
              <div class="container">
                <div class="row align-items-center my-5">
                  <div class="col-lg-7">
                  <iframe
                  src="https://www.youtube.com/embed/MuqsIYfCmdc"
                  width="500"
                  height="480"
                  frameborder="0"
                  allow= "autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                  />
                  </div>
                  <div class="col-lg-5">
                    <h1 class="font-weight-light">DONATE NOW!</h1>
                    <p>           
                     By donating today, you can help Earth Day continue to develop innovative environmental actions and raise awareness to reduce our impact on the environment. Your donation can also contribute to the reforestation of the country through the Tomorrow’s Forest tree planting program.
                     You can select whether you would like to make a one-time or monthly donation, as well as which of the above options you want to contribute to. A tax receipt will be issued for all donations made.
                    </p>
                    <p>
                     Thank you for your involvement and support!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
    }        
