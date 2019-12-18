// aws-sdk documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
const fs = require('fs');
const AWS = require('aws-sdk');

// Configuration
const ID = '';
const SECRET = '';
const BUCKET_NAME = '';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const createBucket = (bucketName) => {
    const params = {
        Bucket: bucketName,
        CreateBucketConfiguration: {
            LocationConstraint: "us-west-2"
        }
    };

    s3.createBucket(params, function(err, data) {
        if (err) console.log(err, err.stack);
        else console.log('Bucket Created Successfully', data.Location);
    });
};

/* Uploads file to S3 */
const uploadFile = (loadFileName, saveAsFileName, bucketname) => {
    // Read content from the file
    const fileContent = fs.readFileSync(loadFileName);

    // Setting up S3 upload parameters
    const params = {
        ACL: 'public-read',
        Bucket: bucketname,
        Key: saveAsFileName, // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

// Example:
// uploadFile('./dist/navbar-bundle.js', 'bundles/navbar-bundle.js', BUCKET_NAME);

