import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class P2Card extends LitElement {

  static get properties() {
    return {
      badges: { type: Array }, 
     
      name: {
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
 
  <div>
  <div class="wrapper">




  
   
<!--<img class="image" src="$(meme)"/> -->
   
    <!--badge 1-->
  <div class="badge">
    <div class="title">${this.title}
      <div class="image">
        <img src=${this.image}>
      </div>
 <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
 
      <div>
        <p class="description">${this.description}
  
      </p>
      <div class="link">
      <a href=${this.link}>${this.link}</a>

      </div>
      <div>
        ${this.author} 
        <img src=${this.authorImg}>
      </div>
      ${this.time}
      ${this.steps}
  </details>
      </div>
    </div>
    </div>
    </div>
  </div>
 
    `;
  }
}

customElements.define('p2-card', P2Card);