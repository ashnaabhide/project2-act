import "./p2-card.js";
import { LitElement, html, css } from 'lit';

class BadgeList extends LitElement{
    static get properties(){
        return {
            badges: {type: Array}

        }
    }

        static get styles(){
            return css`
            :host {
                display: block;

            }

            `;

    }
    constructor() {
        super();
        this.badges= [];


    }

    render() {
        return html`
        <div class=numBadges>
            <!--search and filtering function-->
        </div>
        <div class="wrapper">
        ${this.dates.map(
              badge => html`
                <div class="card">
                <p2-card

                  title="${badge.title}"
                  icon="${badge.icon}" 
                    description="${badge.badgeDescription}"
                    document-link="${badge.link}"
                    author-icon="${badge.author}"
                    author="${badge.authorImg}"
                    time="${badge.time}">
                </p2-card> 
                  </div>
              `)}
              </div>
        
        `;
    }


    }

customElements.define('badge-list', BadgeList);
