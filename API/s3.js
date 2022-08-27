import S3 from 'aws-sdk/clients/s3.js'
import fs from 'fs'
import 'dotenv/config'

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BICKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

//S3 initialization
const s3 = new S3({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey
    }
})

//upload a file to s3
export function upload(file) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise()
}


//downloads a file from s3
export function getFileStream(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }

    return s3.getObject(downloadParams).createReadStream()
}