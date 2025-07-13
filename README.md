# Durlabh CDK Pipeline Project

This is an AWS CDK (Cloud Development Kit) project written in TypeScript. It provisions the following resources:

- **Amazon S3 Bucket** – A versioned bucket used for storage.
- **AWS Lambda Function** – A simple Node.js function triggered via CDK.
- **Amazon DynamoDB Table** – A table to store items with `id` as the partition key.

---

## 📁 Project Structure

```
.
├── bin/
│   └── durlabh-cdk-pipeline.ts       # CDK app entry point
├── lib/
│   └── durlabh-cdk-pipeline-stack.ts # Stack definition
├── package.json
├── tsconfig.json
├── cdk.json
├── README.md
```

---

## 🚀 Prerequisites

- [Node.js](https://nodejs.org/en/) (v18+)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html) (v2.x)

Install AWS CDK globally if not done:

```bash
npm install -g aws-cdk
```

---

## ⚙️ Setup Instructions

1. **Clone or download the project.**

2. **Install dependencies:**

```bash
npm install
```

3. **Configure AWS CLI (if not already):**

```bash
aws configure
```

4. **Bootstrap your environment:**

```bash
cdk bootstrap
```

5. **Deploy the stack:**

```bash
cdk deploy
```

---

## 🧪 Resources Created

| Resource Type   | Name           |
|----------------|----------------|
| S3 Bucket       | DurlabhBucket  |
| Lambda Function | DurlabhLambda  |
| DynamoDB Table  | DurlabhTable   |

---

## 📝 Notes

- Lambda runtime used: `Node.js 18.x`
- All resources will be **destroyed** on stack deletion (due to `RemovalPolicy.DESTROY`)
- Logs can be checked in **CloudWatch**

---

## 🧹 Cleanup

To delete the stack and all resources:

```bash
cdk destroy
```

---

## 📩 Contact

Created by **Durlabh Tilavat**  
📧 tilavatdurlabh8@gmail.com  
📱 +1 (548) 398-1051
