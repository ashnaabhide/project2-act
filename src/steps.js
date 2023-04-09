import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class Steps extends LitElement {
    static get properties() {
        return {
            icon: {type: String}, 
            info: {type: String}, 
            time: {type: String}, 
            steps: {type: Array},

     
        }
      }

      static get styles(){
        return css`
        :host {
            display: block;
        }
        .wrapper{
            text-align: left;
        }
    
    
       
         
        `;
      }

      constructor(){
        super();
        this.icon="av:play-circle-outline";
        this.info="Create Your First Function";
        this.time="2.0 hours";

      }

      render() {
        return html`
        <div class="wrapper">
            <div class="steps">
                <simple-icon icon="${this.icon}"></simple-icon>
            <div class="description">${this.info}</div>
      </div>
      <div class="time">${this.time}</div>
  
       
      `;
    }








}
customElements.define('steps', Steps);