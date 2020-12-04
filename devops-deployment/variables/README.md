# Usage Guidelines for CCO-LMSGW Variable File

Create a shell script variable file based on the details below. (ex: cco-lmsgw-qa1.sh)

*Note: Environment variables are set in variables.yml file. The default values are listed below.*

| name                       | description                                  | value                                       |
| -------------------------- | -------------------------------------------- | ------------------------------------------- |
| nas_stage                  | stage name                                   | dev                                         |
| nas_aws_region             | Region code based on AWS                     | ap-northeast-1                              |
| nas_lms_hostname           | lms server                                   | devco-logging.sharpb2bcloud.com             |
| nas_schema_nas_info        | schema name for nas information              | cocoro_sspagent_nasfile_v1                  |
| nas_schema_search          | schema name for search information           | cocoro_search_v3                            |
| nas_schema_fax             | schema name for fax information              | cocoro_fax_v3                               |
| nas_stack_nas_info         | stack name for nas                           | cocoro-dev                                  |
| nas_stack_search           | stack name for search                        | cocoro-dev                                  |
| nas_stack_fax              | stack name for fax                           | cocoro-dev                                  |
| nas_apiname                | name for api in API Gateway                  | custom-api-name                             |
| nas_basemapping            | Base mapping in custom domain in API Gateway | v1                                          |
| nas_endpoint_type          | End point type for Custom domain             | REGIONAL                                    |
| nas_domain                 | Hosted zone name in route53                  | cocoro-office.net                           |
| nas_keyname                | API Key name                                 | cco-lmsgw-${nas_stage}-key                  |
| nas_keyvalue               | API Key value                                | (To be stored in Vault)                     |
| nas_logstash_username      | username for logstash                        | (To be stored in Vault)                     |
| nas_logstash_password      | password for logstash                        | (To be stored in Vault)                     |
| nas_custom_domain          | Custom domain name in API Gateway            | cco-devapi.cocoro-office.net                |
| nas_deployment_bucket_name | Serverless deployment bucket                 | deployment.ap-northeast-1.cocoro-office.net |
