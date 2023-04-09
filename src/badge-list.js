import { LitElement, html, css } from 'lit';
import "./p2-card.js";
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
        this.badges=[
            [
                {
                    "name": "Amazon Cognito",
                    "icon": "av:games",
                    "description": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
                    "link": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
                    "author": "Joshua Hantman",
                    "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png", 
                    "time": "4.0 hours"
            
                },
            
                {
                    "name": " Amazon I AM",
                    "image": "save",
                    "description": "Create a I AM account with MFA enabled and Admin permissions",
                    "link": "none",
                    "author": "Joshua Hantman",
                    "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
                    "time": "2.0 hours"
            
                },
                {
                    "name": " Signing Up for AWS Web Services",
                    "image": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
                    "description": "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
                    "link": "none",
                    "author": "Joshua Hantman",
                    "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
                    "time": "2.0 hours"
            
                },
                {
                    "name": " AWS-Lambda Phase 1",
                    "image": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
                    "description": "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
                    "link": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
                    "author": "Joshua Hantman",
                    "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
                    "time": "4.0 hours"
            
            
                },
                {
                    "name": " Amazon S3 Phase 1",
                    "image": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
                    "description": "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service.",
                    "link": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
                    "author": "Joshua Hantman",
                    "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
                    "time": "5.0 hours"
            
                }
            
            ]
        ];
        this.numBadges = 'Badges(5)';
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
            display: flex;
           
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
        <h3>${this.numBadges}</h3>
        <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
        </div>
        <div class="wrapper">
        ${this.badges.map(badge => html`
                <div class="card">
                <p2-card
 
                  name="${badge.name}"
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
 
 