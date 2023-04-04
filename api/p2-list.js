export default async function handler(request, res) {

    const badgelist = [
        {
            "title": "Amazon Cognito",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png",
            "description": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "link": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
            "author": "Joshua Hantman", 
            "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png", 
            "time": "4.0 hours"

        },
        
        {
            "title": "Amazon I AM",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/618/AWS-IAM-Exploitation.png.png",
            "description": "Create a I AM account with MFA enabled and Admin permissions",
            "link": "none", 
            "author": "Joshua Hantman", 
            "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png", 
            "time": "2.0 hours"

        },
        {
            "title": "Signing Up for AWS Web Services",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/620/amazon-web-services_vxmp.png",
            "description": "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
            "link": "none", 
            "author": "Joshua Hantman", 
            "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png", 
            "time": "2.0 hours"

        },
        {
            "title": "AWS-Lambda Phase 1",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/619/1-yaTKFg6K8tTPXJtBUZ0_lw.png",
            "description": "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
            "link": "https://aws.amazon.com/lambda", 
            "author": "Joshua Hantman", 
            "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png", 
            "time": "4.0 hours"


        },
        {
            "title": "Amazon S3 Phase 1", 
            "image": "https://badgesapp.psu.edu/uploads/badge/image/621/1_B9CIOrxdROHvtdmouQA1_A.png",
            "description": "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service.",
            "link": "https://docs.aws.amazon.com/s3/?id=docs_gateway", 
            "author": "Joshua Hantman", 
            "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png", 
            "time": "5.0 hours"

        },

    ]
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgelist);

}