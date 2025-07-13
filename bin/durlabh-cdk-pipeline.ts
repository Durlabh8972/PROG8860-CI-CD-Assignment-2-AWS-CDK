#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DurlabhCdkPipelineStack } from '../lib/durlabh-cdk-pipeline-stack';

const app = new cdk.App();

new DurlabhCdkPipelineStack(app, 'DurlabhCdkPipelineStack', {
  env: {
    account: '440716895645',
    region: 'us-east-1'
  }
});
