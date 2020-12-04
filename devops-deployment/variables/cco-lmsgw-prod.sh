#!/bin/bash
###### ONLY CHANGE THE VARIABLES WITHIN THIS COMMENT BLOCK ######
export nas_aws_profile=jenkins_ssp
export nas_stage=cocoro-prod
export nas_aws_region=ap-northeast-1
export nas_lms_hostname='ssp-logging.sharpbscloud.com'
export nas_schema_nas_info=cocoro_sspagent_nasfile_v2
export nas_schema_search=cocoro_search_v3
export nas_schema_fax=cocoro_fax_v3
export nas_schema_mobile_portal=cocoro_mobile_portal_v2
export nas_schema_mobile_search=cocoro_mobile_search_v1
export nas_schema_pc_portal=cocoro_pc_portal_v2
export pcagent_schema_operational_info=cocoro_pcagent_operation_v2
export pcagent_schema_status_info=cocoro_pcagent_status_v5
export nas_schema_srdm_info=cocoro_uniagent_info_v4
export nas_stack_nas_info=cocoro-prod
export nas_stack_search=cocoro-prod
export nas_stack_fax=cocoro-prod
export pcagent_stack_operational_info=cocoro-prod
export pcagent_stack_status_info=cocoro-prod
export nas_stack_mobile_portal=cocoro-prod
export nas_stack_mobile_search=cocoro-prod
export nas_stack_pc_portal=cocoro-prod
export nas_stack_srdm_info=cocoro-prod
export nas_basemapping=lmsgw-v1
export nas_endpoint_type=REGIONAL
export nas_domain=sharpbscloud.com
export nas_keyname=cco-prod-lmsgw-key
# values are stored in the vault
#export nas_keyvalue=
#export nas_logstash_username=
#export nas_logstash_password=
###### ONLY CHANGE THE VARIABLES WITHIN THIS COMMENT BLOCK ######

##### DO NOT CHANGE THE VARIABLES WITHIN THIS COMMENT BLOCK #####
export nas_custom_domain=cco-api.${nas_domain}
export nas_deployment_bucket_name=deployment.ap-northeast-1.sharpbscloud.com
##### DO NOT CHANGE THE VARIABLES WITHIN THIS COMMENT BLOCK #####
