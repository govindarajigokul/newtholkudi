These are the error reports that i get after run yarn test. 

Error-1

root@tholkudi-Standard-PC-Q35-ICH9-2009:/home/dspace/angular# NODE_OPTIONS="--max_old_space_size=8096" yarn test
yarn run v1.22.22
$ ng test --source-map=true --watch=false --configuration test
✔ Browser application bundle generation complete.

START:

./src/app/footer/ORI/footer.component.spec.ts:6:0-63 - Error: Module not found: Error: Can't resolve '../../config/app-config.interface' in '/home/dspace/angular/src/app/footer/ORI'

./src/app/footer/ORI/footer.component.spec.ts:7:0-66 - Error: Module not found: Error: Can't resolve '../../environments/environment.test' in '/home/dspace/angular/src/app/footer/ORI'

./src/app/footer/ORI/footer.component.spec.ts:8:0-88 - Error: Module not found: Error: Can't resolve '../core/coar-notify/notify-info/notify-info.service' in '/home/dspace/angular/src/app/footer/ORI'

./src/app/footer/ORI/footer.component.spec.ts:9:0-105 - Error: Module not found: Error: Can't resolve '../core/data/feature-authorization/authorization-data.service' in '/home/dspace/angular/src/app/footer/ORI'

./src/app/footer/ORI/footer.component.spec.ts:10:0-74 - Error: Module not found: Error: Can't resolve '../shared/testing/active-router.stub' in '/home/dspace/angular/src/app/footer/ORI'

./src/app/footer/ORI/footer.component.spec.ts:11:0-92 - Error: Module not found: Error: Can't resolve '../shared/testing/authorization-service.stub' in '/home/dspace/angular/src/app/footer/ORI'

./src/app/footer/ORI/footer.component.ts:10:0-74 - Error: Module not found: Error: Can't resolve '../../config/app-config.interface' in '/home/dspace/angular/src/app/footer/ORI'

./src/app/footer/ORI/footer.component.ts:11:0-88 - Error: Module not found: Error: Can't resolve '../core/coar-notify/notify-info/notify-info.service' in '/home/dspace/angular/src/app/footer/ORI'

./src/app/footer/ORI/footer.component.ts:12:0-105 - Error: Module not found: Error: Can't resolve '../core/data/feature-authorization/authorization-data.service' in '/home/dspace/angular/src/app/footer/ORI'

./src/app/footer/ORI/footer.component.ts:13:0-74 - Error: Module not found: Error: Can't resolve '../core/data/feature-authorization/feature-id' in '/home/dspace/angular/src/app/footer/ORI'

./src/app/footer/ORI/footer.component.ts:14:0-63 - Error: Module not found: Error: Can't resolve '../shared/cookies/klaro.service' in '/home/dspace/angular/src/app/footer/ORI'

./src/app/footer/ORI/footer.component.ts:15:0-48 - Error: Module not found: Error: Can't resolve '../shared/empty.util' in '/home/dspace/angular/src/app/footer/ORI'

Error: src/app/footer/ORI/footer.component.spec.ts:13:28 - error TS2307: Cannot find module '../../config/app-config.interface' or its corresponding type declarations.

13 import { APP_CONFIG } from '../../config/app-config.interface';
                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Error: src/app/footer/ORI/footer.component.spec.ts:14:29 - error TS2307: Cannot find module '../../environments/environment.test' or its corresponding type declarations.

14 import { environment } from '../../environments/environment.test';
                               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Error: src/app/footer/ORI/footer.component.spec.ts:15:35 - error TS2307: Cannot find module '../core/coar-notify/notify-info/notify-info.service' or its corresponding type declarations.

15 import { NotifyInfoService } from '../core/coar-notify/notify-info/notify-info.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Error: src/app/footer/ORI/footer.component.spec.ts:16:42 - error TS2307: Cannot find module '../core/data/feature-authorization/authorization-data.service' or its corresponding type declarations.

16 import { AuthorizationDataService } from '../core/data/feature-authorization/authorization-data.service';
                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Error: src/app/footer/ORI/footer.component.spec.ts:17:36 - error TS2307: Cannot find module '../shared/testing/active-router.stub' or its corresponding type declarations.

17 import { ActivatedRouteStub } from '../shared/testing/active-router.stub';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Error: src/app/footer/ORI/footer.component.spec.ts:18:46 - error TS2307: Cannot find module '../shared/testing/authorization-service.stub' or its corresponding type declarations.

18 import { AuthorizationDataServiceStub } from '../shared/testing/authorization-service.stub';
                                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Error: src/app/footer/ORI/footer.component.ts:22:8 - error TS2307: Cannot find module '../../config/app-config.interface' or its corresponding type declarations.

22 } from '../../config/app-config.interface';
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Error: src/app/footer/ORI/footer.component.ts:23:35 - error TS2307: Cannot find module '../core/coar-notify/notify-info/notify-info.service' or its corresponding type declarations.

23 import { NotifyInfoService } from '../core/coar-notify/notify-info/notify-info.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Error: src/app/footer/ORI/footer.component.ts:24:42 - error TS2307: Cannot find module '../core/data/feature-authorization/authorization-data.service' or its corresponding type declarations.

24 import { AuthorizationDataService } from '../core/data/feature-authorization/authorization-data.service';
                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Error: src/app/footer/ORI/footer.component.ts:25:27 - error TS2307: Cannot find module '../core/data/feature-authorization/feature-id' or its corresponding type declarations.

25 import { FeatureID } from '../core/data/feature-authorization/feature-id';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Error: src/app/footer/ORI/footer.component.ts:26:30 - error TS2307: Cannot find module '../shared/cookies/klaro.service' or its corresponding type declarations.

26 import { KlaroService } from '../shared/cookies/klaro.service';
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Error: src/app/footer/ORI/footer.component.ts:27:26 - error TS2307: Cannot find module '../shared/empty.util' or its corresponding type declarations.

27 import { hasValue } from '../shared/empty.util';
                            ~~~~~~~~~~~~~~~~~~~~~~


Error: src/environments/environment.test.ts:319:3 - error TS2739: Type '{ enableEndUserAgreement: true; enablePrivacyStatement: true; enableCOARNotifySupport: true; }' is missing the following properties from type 'InfoConfig': enableAboutStatement, enableCreditsStatement, enableHelpStatement

319   info: {
      ~~~~

  src/config/app-config.interface.ts:61:3
    61   info: InfoConfig;
         ~~~~
    The expected type comes from property 'info' which is declared here on type 'BuildConfig'



13 08 2025 00:07:37.638:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
13 08 2025 00:07:37.639:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
13 08 2025 00:07:37.640:ERROR [karma-server]: Error: Found 1 load error
    at Server.<anonymous> (/home/dspace/angular/node_modules/karma/lib/server.js:243:26)
    at Object.onceWrapper (node:events:632:28)
    at Server.emit (node:events:530:35)
    at Server.emit (node:domain:489:12)
    at emitListeningNT (node:net:1951:10)
    at processTicksAndRejections (node:internal/process/task_queues:81:21)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
root@tholkudi-Standard-PC-Q35-ICH9-2009:/home/dspace/angular# 
 
Error-2

I deleted the ori folder in footer despite this there is still persistent error  
yarn run v1.22.22
$ ng test --source-map=true --watch=false --configuration test
✔ Browser application bundle generation complete.

START:

Error: src/environments/environment.test.ts:319:3 - error TS2739: Type '{ enableEndUserAgreement: true; enablePrivacyStatement: true; enableCOARNotifySupport: true; }' is missing the following properties from type 'InfoConfig': enableAboutStatement, enableCreditsStatement, enableHelpStatement

319   info: {
      ~~~~

  src/config/app-config.interface.ts:61:3
    61   info: InfoConfig;
         ~~~~
    The expected type comes from property 'info' which is declared here on type 'BuildConfig'



13 08 2025 00:35:47.638:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
13 08 2025 00:35:47.640:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
13 08 2025 00:35:47.641:ERROR [karma-server]: Error: Found 1 load error
    at Server.<anonymous> (/home/dspace/angular/node_modules/karma/lib/server.js:243:26)
    at Object.onceWrapper (node:events:632:28)
    at Server.emit (node:events:530:35)
    at Server.emit (node:domain:489:12)
    at emitListeningNT (node:net:1951:10)
    at processTicksAndRejections (node:internal/process/task_queues:81:21)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
root@tholkudi-Standard-PC-Q35-ICH9-2009:/home/dspace/angular# 

