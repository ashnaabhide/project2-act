import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

const meme=new URL('../assets/meme.jpg', import.meta.url).href;


export class P2Card extends LitElement {

  static get properties() {
    return {
      badges: { type: Array }, 
     
      name: {
        type: String,
        reflect: true
      }, 
      detail: {
        type: String,
      }, 
      opened: {type: Boolean, reflect: true},
    }
  }


  static get styles(){
    return css`
    
    
 .wrapper {
        
        background-color: #3e98d3;
        color: white;
        padding: 2px 2px 2px 20px;
        text-align: center-left;
        width: 800px;
        height: auto;
        border-radius: 5px;
      }
      .title{
        width: auto;
        color: black;
        font-family: sans-serif;
        background-color: lightblue;
        text-align: center;
      }
      
      .body{
        font-family: sans-serif;
        background-color: #cfe6f4;
        padding: auto;
        text-align: left;
        height: auto;
      }
      
      .img {
        width: 20px;
        text-align: left;
        
      }
      
      input {
        font-size: 20px;
        font-weight: bold;
        border: none;
        border-bottom: 1px solid black;
        transition: all .3s ease-in-out;
      }
      
      
      
      .header {
        text-align: left;
        font-weight: bold;
        font-size: 2rem; /* scales relatively */
        
        
      }
      
      
      
      
      
      
      details{
        margin-left: 24px;
        font-size: 10px;
        padding: 10px;
        text-align: left;
      }
      

    `;
  }


  constructor() {
    super();
    this.name="";
    this.details="";
  
    this.opened = true;
  }

  toggleEvent(e) {
    console.log(this.opened);
    console.log(this.shadowRoot.querySelector('details').getAttribute('open'));
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
    console.log(state);
    this.opened = state;
  } //listens

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if(propName === 'opened') {
        this.dispatchEvent(new CustomEvent('change-open-state', 
        {
          composed: true, //event occured in shadowroot but you want it to bubble up through page
          bubbles: true,
          cancelable: false,
          detail: { 
            value: this[propName]} 
          }));
          console.log(`${propName} changed. oldValue: ${oldValue}`);
  
        }
  
        });
        


    }
  


  render() {
    return html`
    
    <h1 id="heading">Badges(5)</h1>
<!--<div class="intro text">introduction</div>-->
 
<input type="text" id="getme" placeholder="Search" />
 
  <div>
  <div class="wrapper">




  
   
<!--<img class="image" src="$(meme)"/> -->
   
    <!--badge 1-->
  <div class="header">
    <div class="title">Amazon Cognito
      <div class="img">
        <img src=https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png 
            >
      </div>
 <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
 
      <div>
        <p class="badgedescription">
          <slot>Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools
 
https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html
 
 
 
 
Badge Creator: Joshua Hantman's user image Joshua Hantman
Approximate time to complete: 4.0 hours</slot>
      </p>
     
      </div>
  </details>
      </div>
  
    </div>
    </div>
  </div>
 
 
<!--number 2-->
  <div class="wrapper">
   
<!--<img class="image" src="$(meme)"/> -->
  <div class="header">
    <div class="title">Amazon I AM
      <div class="img">
        <img src=https://badgesapp.psu.edu/uploads/badge/image/618/AWS-IAM-Exploitation.png.png 
            >
      </div>
 <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
     <p class="badgedescription">
          <slot>Create a I AM account with MFA enabled and Admin permissions
 
Badge Creator: Joshua Hantman's user image Joshua Hantman
Approximate time to complete: 2.0 hours</slot>
  </details>
      </div>
  
    </div>
    </div>
 
<!--number 3-->
  <div class="wrapper">
   
<!--<img class="image" src="$(meme)"/> -->
  <div class="header">
    <div class="title">Signing up for AWS Web Services
      <div class="img">
        <img src=https://badgesapp.psu.edu/uploads/badge/image/620/amazon-web-services_vxmp.png
            >
      </div>
 <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
      <p class="badgedescription">
        <slot>Learn how to create a root account with AWS Cloud Services and manage your AWS Console.
 
 Badge Creator: Joshua Hantman's user image Joshua Hantman
 Approximate time to complete: 2.0 hours</slot>
</p>
          
  
  </details>
      </div>
  
    </div>
    </div>
 
  
  
  
  <!--number 4-->

  <div class="wrapper">
   
<!--<img class="image" src="$(meme)"/> -->
  <div class="header">
    <div class="title">AWS- LAMBDA Phase 1
      <div class="img">
        <img src=https://badgesapp.psu.edu/uploads/badge/image/619/1-yaTKFg6K8tTPXJtBUZ0_lw.png
          >
      </div>
 <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
     <p class="badgedescription">
          <slot>AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.
AWS Lambda Info Link</slot>
</p>
  </details>
      </div>
  
    </div>
    </div>
  <!--number 5-->

  <div class="wrapper">
   
<!--<img class="image" src="$(meme)"/> -->
  <div class="header">
    <div class="title">Amazon S3 Phase 1
      <div class="img">
        <img src=https://badgesapp.psu.edu/uploads/badge/image/621/1_B9CIOrxdROHvtdmouQA1_A.png
            >
      </div>
 <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
     
      <div>
        <p class="badgedescription">
          <slot>Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service.
 
Getting started look through this page Amazon S3 Documentation</slot>
      </p>
     
      </div>
     
  </details>
      </div>
  
    </div>
    </div>

    `;
  }
}

customElements.define('p2-card', P2Card);