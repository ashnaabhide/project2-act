import { LitElement, html, css } from 'lit';

const meme=new URL('../assets/meme.jpg', import.meta.url).href;


export class P2Card extends LitElement {

  static get properties() {
    return {
     
      name: {
        type: String,
        reflect: true
      }, 
      detail: {
        type: String,
      },
      top: {
        type: String,
  
      }, 
      bottom: {
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
    this.name = "Amazon Cognito"; //change this for every instance
    this.detail = "";
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
    
    <input type="text" id="getme" placeholder="Search" />
    <h1 id="heading">Badges(5)</h1>
<!--<div class="intro text">introduction</div>-->

<input type="text" id="getme" placeholder="Search" />

  <div>
  <div class="wrapper">
    
<!--<img class="image" src="$(meme)"/> -->
  <div class="header">
    <div class="title">Amazon Cognito
      <div class="img">
        <img src="https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png" width="100" height="100"
            >
      </div>
 
 <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
      <!--
      <div>
        <p class="memeparagraph">
          <slot></slot>
      </p>
      
      </div>
       -->
  </details>
      </div>
   
    </div>
    </div>
  </div>


<!--number 2

  <div class="wrapper">
    
<img class="image" src="$(meme)"/> 
  <div class="header">
    <div class="title">Amazon I AM
      <div class="img">
        <img src="https://badgesapp.psu.edu/uploads/badge/image/618/AWS-IAM-Exploitation.png.png">
            
      </div>
 
 <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
      
      <div>
        <p class="memeparagraph">
          <slot></slot>
      </p>
      
      </div>
       
  </details>
      </div>
   
    </div>
    </div>
  -->

    `;
  }
}

customElements.define('p2-card', P2Card);