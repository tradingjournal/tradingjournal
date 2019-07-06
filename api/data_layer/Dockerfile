FROM ubuntu:18.04
FROM openjdk:7

MAINTAINER Jon Cho <github.com/jcho4794>, Shayaun Nejad

RUN apt-get update && \
    apt-get install python3-pip -y && \
    pip3 install awscli && \
    apt-get install wget -y && \
    wget https://s3-us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.tar.gz -q -O - | tar -xz

EXPOSE 8000
   
CMD ["java", "-jar", "DynamoDBLocal.jar"]
