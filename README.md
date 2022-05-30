## Steps

1. 
```
npm i
```

2. Change serverless yaml with your own domain name - in my case i create my own domain in route53 - vinodaws.com

3. Create certificate in AWS ACM - with name 

vinodaws.com

as well as one more certificate for 

dapi.vinodaws.com <--- in serverless.yaml for dev stage i'm using prefix dapi - hence dapi.colnny.com


4. Run 

```
sls offline start --stage dev

```

and this should yield result

```
http://localhost:3000/dev/hello
```


5. Then deploy to API Gateway  (for this you need to set your AWS CLI with AWS keys)

```
sls deploy --stage dev
```

With that my API is up at 

```
https://dapi.vinodaws.com/world/hello
```
