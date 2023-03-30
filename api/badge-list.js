export default async function handler(request, res) {
    const badgelist = [
        {
            "title": "Amazon Cognito",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png",
            "description": "change this",
            "link": "www.google.com", 
            "author": "change this", 
            "authorImage": "change this", 
            "time": "change this"

        },
        {
            "title": "Amazon I AM",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/618/AWS-IAM-Exploitation.png.png",
            "description": "change this",
            "link": "www.google.com", 
            "author": "change this", 
            "authorImage": "change this",  
            "time": "change this"

        },
        {
            "title": "Signing Up for AWS Web Services",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/620/amazon-web-services_vxmp.png",
            "description": "change this",
            "link": "www.google.com", 
            "author": "change this", 
            "authorImage": "change this", 
            "time": "change this"

        },
        {
            "title": "AWS-Lambda Phase 1",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/619/1-yaTKFg6K8tTPXJtBUZ0_lw.png",
            "description": "change this",
            "link": "www.google.com", 
            "author": "change this", 
            "authorImage": "change this", 
            "time": "change this"


        },
        {
            "title": "Amazon S3 Phase 1", 
            "image": "https://badgesapp.psu.edu/uploads/badge/image/621/1_B9CIOrxdROHvtdmouQA1_A.png",
            "description": "change this",
            "link": "www.google.com", 
            "author": "change this", 
            "authorImage": "change this", 
            "time": "change this"

        },

    ]
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgelist);

}