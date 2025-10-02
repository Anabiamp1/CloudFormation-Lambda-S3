const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));
  for (const record of event.Records || []) {
    const bucket = record.s3.bucket.name;
    const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));
    try {
      const res = await s3.getObject({ Bucket: bucket, Key: key }).promise();
      const body = res.Body.toString('utf-8');
      console.log(`Processing object ${key} from ${bucket} (length=${body.length})`);
      const outKey = `processed/${key}`;
      await s3.putObject({ Bucket: bucket, Key: outKey, Body: `Processed at ${new Date().toISOString()}\n\n${body}` }).promise();
      console.log('Wrote processed file:', outKey);
    } catch (err) {
      console.error('Error processing object', err);
      throw err;
    }
  }
};