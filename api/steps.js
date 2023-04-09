export default async function handler(request, res) {

    const stepInfo = [
        {
            "name": "Amazon Cognito",
            "icon": 'av:play-circle-filled',
            "info": "Create a User Pool in Amazon Cognito",
            "time": "4.0 hours"
        },
        {
            "name": "AWS- LAMBDA Phase 1",
            "icon": 'av:play-circle-filled',
            "info": "Amazon Incognito",
            "time": "4.0 hours"
        },
        {
            "name": "AWS- LAMBDA Phase 1",
            "icon": 'av:play-circle-filled',
            "info": "steps!",
            "time": "4.0 hours"
        },
        {
            "name": "AWS- LAMBDA Phase 1",
            "icon": 'av:play-circle-filled',
            "info": "steps!",
            "time": "4.0 hours"
        },
        {
            "name": "AWS S3 Phase 1",
            "icon": 'av:play-circle-filled',
            "info": "steps!",
            "time": "4.0 hours"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(stepInfo);
}