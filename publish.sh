rm lambda.zip
cd lambda
npm install
7z a -r ../lambda.zip *
cd ..
aws lambda update-function-code --function-name TuneRecorder --zip-file fileb://lambda.zip
