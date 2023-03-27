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
    
    p2-card::part(card){
      margin: 100px;
    }


      .card-container {
        width: 3px 3px 3px 50px;
        border: 2px solid lightblue;
        display: inline-flex; 
        
      }

.image {
  width: 400px;
}

input {
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid black;
  transition: all .3s ease-in-out;
}



.header {
  text-align: center;
  font-weight: bold;
  font-size: 2rem; /* scales relatively */
  
  
}

.header h3:hover {
  font-style: italic; 
  font-size: 1.1em;
}

.header h3, 
.header h4{
  transition: .3s ease-in-out all;
  margin: 16px;
  font-style: normal;
  
}
.buttons button:focus, 
.buttons button:hover {
  background-color: rgba(200, 0, 50, .5);
}
/*
.buttons button:active {
  background-color: rgba(200, 0, 200, .5); - shades in the part of the project you're not actively working on
}
*/
 
.buttons {
  display: block;
  
}
button {
  padding: 12px;
  font-size: 32px;
}



details{
  margin-left: 24px;
  padding: 10px;
}
.details summary {
  font-size: 20px;
  font-weight: bold;
  
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

<div class="card" part="card">
  <div class="card-container">
    
  

<!--<img class="image" src="$(meme)"/> -->
  <div class="header">
  <h3>${this.name}</h3>
  

  

  <h4>${this.detail}</h4>
    <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
      <summary>Details</summary>
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
    `;
  }
}

customElements.define('p2-card', P2Card);