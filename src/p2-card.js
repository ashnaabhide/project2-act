import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
 
export class P2Card extends LitElement {
 
  static get properties() {
    return {
      badges: { type: Array },
     
      title: {
        type: String,
        reflect: true
      },
      image: {type: String},
      description: {
        type: String,
      },
      opened: {type: Boolean, reflect: true},
      link: {type: String},
      author: {type: String},
      authorImage: {type: String},
      time: {type: String},
      steps: {type: Array},
      stepDescription: {type: String}
 
    }
  }
 

  static get styles(){
    return css`
   
    :host{
 
    display: block;
    }
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
        background-color: lightblue;
        text-align: left;
        
      }

      .name{
        width: auto;
        color: black;
        font-family: sans-serif;
        text-align: left;
        font-weight:bold;
        font-size: .6cm;
      }
     
      .body{
        font-family: sans-serif;
        background-color: #cfe6f4;
        padding: auto;
        text-align: left;
        height: auto;
      }
     
      .image {
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



  toggleEvent(){
    if(this.shadowRoot.querySelector('details').getAttribute('open') == ""){
      this.toggleOpening = true;
      this.updateSteps(this.title);
    }
    else{
      this.toggleOpening = false;
      this.isLoading = true;
    }
  }

  //Creates new event listener to record when the toggleEvent is invoked
  updated(changedProperties){
    changedProperties.forEach((oldValue, propName)=>{
      if(propName === "toggleOpening"){
        this.dispatchEvent(new CustomEvent('opened-changed', {
          composed: true,
          bubbles: true,
          cancelable: false,
          detail:{
            value: this[propName]
          }
        }));
        console.log(`${propName} changed. oldValue: ${oldValue}`);
      }
    });
  }

    constructor(){
      super();
      this.name = "Amazon";
      this.title = "";
      this.icon = "av:games";
      this.description = "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
      this.link = "www.google.com",
      this.author = "Joshua Hantman",
      this.authorImage = "www.google.com",
      this.time = "Approximate time to complete: 4.0 hours"
      this.opened = false; 
      this.spacer = "-----------------------------";
      this.info = "Steps to Earn This Badge";
      this.steps = [];
      
    }
 





    render() {
      return html`
    
    <div>
    <div class="wrapper">
 
  <div class="badge">
    <div class="title">
    <div class="name">${this.name} <div class="image">
      <simple-icon icon="editor:bubble-chart">${this.image}</simple-icon>
      </div>
 <details class="details" .opened="${this.opened}" @toggle="${this.toggleEvent}">
 <!-- make a summary tag to remove detail word -->
      <summary></summary>
      <p>${this.description}</p>
      <div class="link">
      <a href=${this.link}>${this.link}</a>
      <div class="spacer">${this.spacer}</div>
      </div>
      <div>
        ${this.author}
        <simple-icon icon="face">${this.image}</simple-icon>
      </div>
      ${this.time}
      <div class="stepInfo">
        ${this.info}
    </div>
    <div class="steps">
    ${this.steps.map(step => html`
       <step-card icon="${step.icon}" info="${step.stepDescription}" time="${step.time}">
      </step-card>
    `)}
    </div>
  </details>
  </div>
      </div>
    </div>
    </div>
    </div>
  </div>
 
    `;
  }
}
 
customElements.define('p2-card', P2Card);