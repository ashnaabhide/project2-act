import "./p2-card.js";
import { LitElement, html, css } from 'lit';
import "./search-widget.js";
 
class BadgeList extends LitElement{
    static get tag() {
        return 'badge-list';
    }
 
    static get properties()
    {
        return {
            badges: {type: Array},
            name: {type:String},
        }
    }
    constructor() {
 
        super();
        this.badges=[];
        this.name = 'Badges(5)';
        this.getSearchResults().then((results) => {
            this.badges = results;
        });
 
    }

 
       
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px;
           
        }
        .item {
            display: inline-flex;
        }
     
    `;
    }
    async getSearchResults(value = '') {
        const address = `/api/roster?search=${value}`;
        const results = await fetch(address).then((response) => {
            if(response.ok){
                return response.json()
            }
            return [];

        })
        .then((data) => {
            return data;
        });
        return results;

    }


    async _handleSearchEvent(e) {
        const term = e.detail.value;
        this.badges = await this.getSearchResults(term);
    }
 
 
    render() {
        return html`
        <div class="numBadges">
        <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
        </div>
        <div class="wrapper">
        ${this.badges.map(
              badge => html`
                <div class="card">
                <p2-card
 
                  title="${badge.title}"
                  image="${badge.image}"
                    description="${badge.description}"
                    link="${badge.link}"
                    author="${badge.author}"
                    authorImage="${badge.authorImage}"
                    time="${badge.time}">
                </p2-card>
                  </div>
              `)}
              </div>
       
        `;
    }
 

    }
 
customElements.define(BadgeList.tag, BadgeList);
 
 