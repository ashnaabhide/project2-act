export default async function handler(req, res) {

    const search = req.query.search || '';
 
    var roster = [
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
 
        },
 
    ];

    roster.map((badge) => {
        badge.inex = badge.name.toLowerCase() + " " +  badge.description.toLowerCase() + " " + badge.author.toLowerCase();
    });

    roster = roster.filter((badge) => {

        return badge.index.indexOf(search.toLowerCase()) > -1;

    });


    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
 
}
 