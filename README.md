# customersapi

**Remember, to run this project, we need to have installed the EBS Cli, we can take 10 mins to install it.**

**Write in the console**
``` git clone https://github.com/Allislove/customersapi.git ```

**Write in the console where you clone the repository**
``` cd customersapi ```
**Now we need create the .elasticbeanstalk directory, so create it.**
``` JUST CREATE A DIRECTORY NAME <.elasticbeanstalk ``` *In the root of the folder the project, then we need create a File into that folder with the name < config.yml > and need added some data into > see below.*

``` branch-defaults:
  home:
    environment: node-express-env
    group_suffix: null
global:
  application_name: customers-api
  branch: null
  default_ec2_keyname: null
  default_platform: Node.js 16
  default_region: us-east-1
  include_git_submodules: true
  instance_profile: null
  platform_name: null
  platform_version: null
  profile: null
  repository: null
  sc: git
  workspace_type: Application
 ```

**Now we need, create another file, with the name <config.js> ¿Why?
Cuz, we need add some data to manage the DynamoDB and the IAM Secret User. So into the <config.js> file, add this.**

``` module.exports = {
    aws_table_name: 'you-table-name-here',
    aws_local_config: {
      //Provide details for local configuration
    },
    aws_remote_config: {
      accessKeyId: 'you-iam-accesKey-id',
      secretAccessKey: 'you-iam-secretAccessKey-pass',
      region: 'us-east-1', <can be another example 'us-east-1>
    }
}; ```

**Then do** 
``` npm install ```



**Finally (Run the command)**
``` npm run dev ```


