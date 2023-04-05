import { Questionnair } from './types';
export declare const CLI_EPILOGUE: string;
export declare const EXCLUSIVE_SERVICES: {
    'wdio-chromedriver-service': {
        services: string[];
        message: string;
    };
};
export declare const CONFIG_HELPER_INTRO = "\n=========================\nWDIO Configuration Helper\n=========================\n";
export declare const CONFIG_HELPER_SUCCESS_MESSAGE = "\nConfiguration file was created successfully!\nTo run your tests, execute:\n$ npx wdio run %swdio.conf.%s\n";
export declare const DEPENDENCIES_INSTALLATION_MESSAGE = "\nTo install dependencies, execute:\n%s\n";
export declare const NPM_INSTALL = "";
export declare const ANDROID_CONFIG: {
    platformName: string;
    automationName: string;
    deviceName: string;
};
export declare const IOS_CONFIG: {
    platformName: string;
    automationName: string;
    deviceName: string;
};
export declare const COMPILER_OPTION_ANSWERS: readonly ["Babel (https://babeljs.io/)", "TypeScript (https://www.typescriptlang.org/)", "No!"];
export declare const COMPILER_OPTIONS: {
    readonly babel: "Babel (https://babeljs.io/)";
    readonly ts: "TypeScript (https://www.typescriptlang.org/)";
    readonly nil: "No!";
};
export declare const TS_COMPILER_INSTRUCTIONS = "To have TypeScript support please add the following packages to your \"types\" list:\n{\n  \"compilerOptions\": {\n    \"types\": [\"node\", %s]\n  }\n}\n\nFor for information on TypeScript integration check out: https://webdriver.io/docs/typescript\n";
/**
 * We have to use a string hash for value because InquirerJS default values do not work if we have
 * objects as a `value` to be stored from the user's answers.
 */
export declare const SUPPORTED_PACKAGES: {
    readonly runner: readonly [{
        readonly name: "local";
        readonly value: "@wdio/local-runner$--$local";
    }];
    readonly framework: readonly [{
        readonly name: "mocha";
        readonly value: "@wdio/mocha-framework$--$mocha";
    }, {
        readonly name: "jasmine";
        readonly value: "@wdio/jasmine-framework$--$jasmine";
    }, {
        readonly name: "cucumber";
        readonly value: "@wdio/cucumber-framework$--$cucumber";
    }];
    readonly reporter: readonly [{
        readonly name: "spec";
        readonly value: "@wdio/spec-reporter$--$spec";
    }, {
        readonly name: "dot";
        readonly value: "@wdio/dot-reporter$--$dot";
    }, {
        readonly name: "junit";
        readonly value: "@wdio/junit-reporter$--$junit";
    }, {
        readonly name: "allure";
        readonly value: "@wdio/allure-reporter$--$allure";
    }, {
        readonly name: "sumologic";
        readonly value: "@wdio/sumologic-reporter$--$sumologic";
    }, {
        readonly name: "concise";
        readonly value: "@wdio/concise-reporter$--$concise";
    }, {
        readonly name: "reportportal";
        readonly value: "wdio-reportportal-reporter$--$reportportal";
    }, {
        readonly name: "video";
        readonly value: "wdio-video-reporter$--$video";
    }, {
        readonly name: "json";
        readonly value: "wdio-json-reporter$--$json";
    }, {
        readonly name: "cucumber-json";
        readonly value: "wdio-cucumberjs-json-reporter$--$cucumberjs-json";
    }, {
        readonly name: "mochawesome";
        readonly value: "wdio-mochawesome-reporter$--$mochawesome";
    }, {
        readonly name: "timeline";
        readonly value: "wdio-timeline-reporter$--$timeline";
    }, {
        readonly name: "html-nice";
        readonly value: "wdio-html-nice-reporter$--$html-nice";
    }, {
        readonly name: "slack";
        readonly value: "@moroo/wdio-slack-reporter$--$slack";
    }, {
        readonly name: "teamcity";
        readonly value: "wdio-teamcity-reporter$--$teamcity";
    }, {
        readonly name: "delta";
        readonly value: "@delta-reporter/wdio-delta-reporter-service";
    }, {
        readonly name: "light";
        readonly value: "@wdio-light-reporter--$light";
    }];
    readonly plugin: readonly [{
        readonly name: "wait-for";
        readonly value: "wdio-wait-for$--$wait-for";
    }, {
        readonly name: "angular-component-harnesses";
        readonly value: "@badisi/wdio-harness$--$harness";
    }];
    readonly service: readonly [{
        readonly name: "chromedriver";
        readonly value: "wdio-chromedriver-service$--$chromedriver";
    }, {
        readonly name: "geckodriver";
        readonly value: "wdio-geckodriver-service$--$geckodriver";
    }, {
        readonly name: "edgedriver";
        readonly value: "wdio-edgedriver-service$--$edgedriver";
    }, {
        readonly name: "sauce";
        readonly value: "@wdio/sauce-service$--$sauce";
    }, {
        readonly name: "testingbot";
        readonly value: "@wdio/testingbot-service$--$testingbot";
    }, {
        readonly name: "selenium-standalone";
        readonly value: "@wdio/selenium-standalone-service$--$selenium-standalone";
    }, {
        readonly name: "vscode";
        readonly value: "wdio-vscode-service$--$vscode";
    }, {
        readonly name: "electron";
        readonly value: "wdio-electron-service$--$electron";
    }, {
        readonly name: "devtools";
        readonly value: "@wdio/devtools-service$--$devtools";
    }, {
        readonly name: "browserstack";
        readonly value: "@wdio/browserstack-service$--$browserstack";
    }, {
        readonly name: "appium";
        readonly value: "@wdio/appium-service$--$appium";
    }, {
        readonly name: "firefox-profile";
        readonly value: "@wdio/firefox-profile-service$--$firefox-profile";
    }, {
        readonly name: "crossbrowsertesting";
        readonly value: "@wdio/crossbrowsertesting-service$--$crossbrowsertesting";
    }, {
        readonly name: "eslinter-service";
        readonly value: "wdio-eslinter-service$--$eslinter";
    }, {
        readonly name: "lambdatest";
        readonly value: "wdio-lambdatest-service$--$lambdatest";
    }, {
        readonly name: "zafira-listener";
        readonly value: "wdio-zafira-listener-service$--$zafira-listener";
    }, {
        readonly name: "reportportal";
        readonly value: "wdio-reportportal-service$--$reportportal";
    }, {
        readonly name: "docker";
        readonly value: "wdio-docker-service$--$docker";
    }, {
        readonly name: "ui5";
        readonly value: "wdio-ui5-service$--$ui5";
    }, {
        readonly name: "wiremock";
        readonly value: "wdio-wiremock-service$--$wiremock";
    }, {
        readonly name: "ng-apimock";
        readonly value: "wdio-ng-apimock-service$--ng-apimock";
    }, {
        readonly name: "slack";
        readonly value: "wdio-slack-service$--$slack";
    }, {
        readonly name: "cucumber-viewport-logger";
        readonly value: "wdio-cucumber-viewport-logger-service$--$cucumber-viewport-logger";
    }, {
        readonly name: "intercept";
        readonly value: "wdio-intercept-service$--$intercept";
    }, {
        readonly name: "docker";
        readonly value: "wdio-docker-service$--$docker";
    }, {
        readonly name: "image-comparison";
        readonly value: "wdio-image-comparison-service$--$image-comparison";
    }, {
        readonly name: "novus-visual-regression";
        readonly value: "wdio-novus-visual-regression-service$--$novus-visual-regression";
    }, {
        readonly name: "rerun";
        readonly value: "wdio-rerun-service$--$rerun";
    }, {
        readonly name: "winappdriver";
        readonly value: "wdio-winappdriver-service$--$winappdriver";
    }, {
        readonly name: "ywinappdriver";
        readonly value: "wdio-ywinappdriver-service$--$ywinappdriver";
    }, {
        readonly name: "performancetotal";
        readonly value: "wdio-performancetotal-service$--$performancetotal";
    }, {
        readonly name: "cleanuptotal";
        readonly value: "wdio-cleanuptotal-service$--$cleanuptotal";
    }, {
        readonly name: "aws-device-farm";
        readonly value: "wdio-aws-device-farm-service$--$aws-device-farm";
    }, {
        readonly name: "ocr-native-apps";
        readonly value: "wdio-ocr-service$--$ocr-native-apps";
    }, {
        readonly name: "ms-teams";
        readonly value: "wdio-ms-teams-service$--$ms-teams";
    }, {
        readonly name: "tesults";
        readonly value: "wdio-tesults-service$--$tesults";
    }, {
        readonly name: "azure-devops";
        readonly value: "@gmangiapelo/wdio-azure-devops-service$--$azure-devops";
    }, {
        readonly name: "google-Chat";
        readonly value: "wdio-google-chat-service";
    }, {
        readonly name: "qmate-service";
        readonly value: "@sap_oss/wdio-qmate-service--$qmate-service";
    }, {
        readonly name: "vitaqai";
        readonly value: "wdio-vitaqai-service$--$vitaqai";
    }];
};
export declare const BACKEND_CHOICES: readonly ["On my local machine", "In the cloud using Experitest", "In the cloud using Sauce Labs", "In the cloud using BrowserStack", "In the cloud using Testingbot or LambdaTest or a different service", "I have my own Selenium cloud"];
export declare const PROTOCOL_OPTIONS: readonly ["https", "http"];
export declare const REGION_OPTION: readonly ["us", "eu", "apac"];
export declare const QUESTIONNAIRE: ({
    type: string;
    name: string;
    message: string;
    choices: readonly [{
        readonly name: "local";
        readonly value: "@wdio/local-runner$--$local";
    }];
    when: () => boolean;
    default?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: readonly ["On my local machine", "In the cloud using Experitest", "In the cloud using Sauce Labs", "In the cloud using BrowserStack", "In the cloud using Testingbot or LambdaTest or a different service", "I have my own Selenium cloud"];
    when?: undefined;
    default?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    when: (answers: Questionnair) => boolean;
    choices?: undefined;
    default?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default: string;
    when: (answers: Questionnair) => boolean;
    choices?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default: string;
    choices: readonly ["https", "http"];
    when: (answers: Questionnair) => boolean;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default: boolean;
    when: (answers: Questionnair) => boolean;
    choices?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: readonly ["us", "eu", "apac"];
    when: (answers: Questionnair) => boolean;
    default?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: readonly [{
        readonly name: "mocha";
        readonly value: "@wdio/mocha-framework$--$mocha";
    }, {
        readonly name: "jasmine";
        readonly value: "@wdio/jasmine-framework$--$jasmine";
    }, {
        readonly name: "cucumber";
        readonly value: "@wdio/cucumber-framework$--$cucumber";
    }];
    when?: undefined;
    default?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: readonly ["Babel (https://babeljs.io/)", "TypeScript (https://www.typescriptlang.org/)", "No!"];
    default: () => "Babel (https://babeljs.io/)" | "TypeScript (https://www.typescriptlang.org/)" | "No!";
    when?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default: (answers: Questionnair) => string;
    when: (answers: Questionnair) => RegExpMatchArray | null;
    choices?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default: (answers: Questionnair) => string;
    when: (answers: Questionnair) => boolean;
    choices?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default: boolean;
    choices?: undefined;
    when?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: readonly [{
        readonly name: "spec";
        readonly value: "@wdio/spec-reporter$--$spec";
    }, {
        readonly name: "dot";
        readonly value: "@wdio/dot-reporter$--$dot";
    }, {
        readonly name: "junit";
        readonly value: "@wdio/junit-reporter$--$junit";
    }, {
        readonly name: "allure";
        readonly value: "@wdio/allure-reporter$--$allure";
    }, {
        readonly name: "sumologic";
        readonly value: "@wdio/sumologic-reporter$--$sumologic";
    }, {
        readonly name: "concise";
        readonly value: "@wdio/concise-reporter$--$concise";
    }, {
        readonly name: "reportportal";
        readonly value: "wdio-reportportal-reporter$--$reportportal";
    }, {
        readonly name: "video";
        readonly value: "wdio-video-reporter$--$video";
    }, {
        readonly name: "json";
        readonly value: "wdio-json-reporter$--$json";
    }, {
        readonly name: "cucumber-json";
        readonly value: "wdio-cucumberjs-json-reporter$--$cucumberjs-json";
    }, {
        readonly name: "mochawesome";
        readonly value: "wdio-mochawesome-reporter$--$mochawesome";
    }, {
        readonly name: "timeline";
        readonly value: "wdio-timeline-reporter$--$timeline";
    }, {
        readonly name: "html-nice";
        readonly value: "wdio-html-nice-reporter$--$html-nice";
    }, {
        readonly name: "slack";
        readonly value: "@moroo/wdio-slack-reporter$--$slack";
    }, {
        readonly name: "teamcity";
        readonly value: "wdio-teamcity-reporter$--$teamcity";
    }, {
        readonly name: "delta";
        readonly value: "@delta-reporter/wdio-delta-reporter-service";
    }, {
        readonly name: "light";
        readonly value: "@wdio-light-reporter--$light";
    }];
    default: ("@wdio/spec-reporter$--$spec" | "@wdio/dot-reporter$--$dot" | "@wdio/junit-reporter$--$junit" | "@wdio/allure-reporter$--$allure" | "@wdio/sumologic-reporter$--$sumologic" | "@wdio/concise-reporter$--$concise" | "wdio-reportportal-reporter$--$reportportal" | "wdio-video-reporter$--$video" | "wdio-json-reporter$--$json" | "wdio-cucumberjs-json-reporter$--$cucumberjs-json" | "wdio-mochawesome-reporter$--$mochawesome" | "wdio-timeline-reporter$--$timeline" | "wdio-html-nice-reporter$--$html-nice" | "@moroo/wdio-slack-reporter$--$slack" | "wdio-teamcity-reporter$--$teamcity" | "@delta-reporter/wdio-delta-reporter-service" | "@wdio-light-reporter--$light")[];
    when?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: readonly [{
        readonly name: "wait-for";
        readonly value: "wdio-wait-for$--$wait-for";
    }, {
        readonly name: "angular-component-harnesses";
        readonly value: "@badisi/wdio-harness$--$harness";
    }];
    default: never[];
    when?: undefined;
    validate?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: (answers: Questionnair) => readonly [{
        readonly name: "chromedriver";
        readonly value: "wdio-chromedriver-service$--$chromedriver";
    }, {
        readonly name: "geckodriver";
        readonly value: "wdio-geckodriver-service$--$geckodriver";
    }, {
        readonly name: "edgedriver";
        readonly value: "wdio-edgedriver-service$--$edgedriver";
    }, {
        readonly name: "sauce";
        readonly value: "@wdio/sauce-service$--$sauce";
    }, {
        readonly name: "testingbot";
        readonly value: "@wdio/testingbot-service$--$testingbot";
    }, {
        readonly name: "selenium-standalone";
        readonly value: "@wdio/selenium-standalone-service$--$selenium-standalone";
    }, {
        readonly name: "vscode";
        readonly value: "wdio-vscode-service$--$vscode";
    }, {
        readonly name: "electron";
        readonly value: "wdio-electron-service$--$electron";
    }, {
        readonly name: "devtools";
        readonly value: "@wdio/devtools-service$--$devtools";
    }, {
        readonly name: "browserstack";
        readonly value: "@wdio/browserstack-service$--$browserstack";
    }, {
        readonly name: "appium";
        readonly value: "@wdio/appium-service$--$appium";
    }, {
        readonly name: "firefox-profile";
        readonly value: "@wdio/firefox-profile-service$--$firefox-profile";
    }, {
        readonly name: "crossbrowsertesting";
        readonly value: "@wdio/crossbrowsertesting-service$--$crossbrowsertesting";
    }, {
        readonly name: "eslinter-service";
        readonly value: "wdio-eslinter-service$--$eslinter";
    }, {
        readonly name: "lambdatest";
        readonly value: "wdio-lambdatest-service$--$lambdatest";
    }, {
        readonly name: "zafira-listener";
        readonly value: "wdio-zafira-listener-service$--$zafira-listener";
    }, {
        readonly name: "reportportal";
        readonly value: "wdio-reportportal-service$--$reportportal";
    }, {
        readonly name: "docker";
        readonly value: "wdio-docker-service$--$docker";
    }, {
        readonly name: "ui5";
        readonly value: "wdio-ui5-service$--$ui5";
    }, {
        readonly name: "wiremock";
        readonly value: "wdio-wiremock-service$--$wiremock";
    }, {
        readonly name: "ng-apimock";
        readonly value: "wdio-ng-apimock-service$--ng-apimock";
    }, {
        readonly name: "slack";
        readonly value: "wdio-slack-service$--$slack";
    }, {
        readonly name: "cucumber-viewport-logger";
        readonly value: "wdio-cucumber-viewport-logger-service$--$cucumber-viewport-logger";
    }, {
        readonly name: "intercept";
        readonly value: "wdio-intercept-service$--$intercept";
    }, {
        readonly name: "docker";
        readonly value: "wdio-docker-service$--$docker";
    }, {
        readonly name: "image-comparison";
        readonly value: "wdio-image-comparison-service$--$image-comparison";
    }, {
        readonly name: "novus-visual-regression";
        readonly value: "wdio-novus-visual-regression-service$--$novus-visual-regression";
    }, {
        readonly name: "rerun";
        readonly value: "wdio-rerun-service$--$rerun";
    }, {
        readonly name: "winappdriver";
        readonly value: "wdio-winappdriver-service$--$winappdriver";
    }, {
        readonly name: "ywinappdriver";
        readonly value: "wdio-ywinappdriver-service$--$ywinappdriver";
    }, {
        readonly name: "performancetotal";
        readonly value: "wdio-performancetotal-service$--$performancetotal";
    }, {
        readonly name: "cleanuptotal";
        readonly value: "wdio-cleanuptotal-service$--$cleanuptotal";
    }, {
        readonly name: "aws-device-farm";
        readonly value: "wdio-aws-device-farm-service$--$aws-device-farm";
    }, {
        readonly name: "ocr-native-apps";
        readonly value: "wdio-ocr-service$--$ocr-native-apps";
    }, {
        readonly name: "ms-teams";
        readonly value: "wdio-ms-teams-service$--$ms-teams";
    }, {
        readonly name: "tesults";
        readonly value: "wdio-tesults-service$--$tesults";
    }, {
        readonly name: "azure-devops";
        readonly value: "@gmangiapelo/wdio-azure-devops-service$--$azure-devops";
    }, {
        readonly name: "google-Chat";
        readonly value: "wdio-google-chat-service";
    }, {
        readonly name: "qmate-service";
        readonly value: "@sap_oss/wdio-qmate-service--$qmate-service";
    }, {
        readonly name: "vitaqai";
        readonly value: "wdio-vitaqai-service$--$vitaqai";
    }] | ({
        readonly name: "chromedriver";
        readonly value: "wdio-chromedriver-service$--$chromedriver";
    } | {
        readonly name: "geckodriver";
        readonly value: "wdio-geckodriver-service$--$geckodriver";
    } | {
        readonly name: "edgedriver";
        readonly value: "wdio-edgedriver-service$--$edgedriver";
    } | {
        readonly name: "sauce";
        readonly value: "@wdio/sauce-service$--$sauce";
    } | {
        readonly name: "testingbot";
        readonly value: "@wdio/testingbot-service$--$testingbot";
    } | {
        readonly name: "selenium-standalone";
        readonly value: "@wdio/selenium-standalone-service$--$selenium-standalone";
    } | {
        readonly name: "vscode";
        readonly value: "wdio-vscode-service$--$vscode";
    } | {
        readonly name: "electron";
        readonly value: "wdio-electron-service$--$electron";
    } | {
        readonly name: "devtools";
        readonly value: "@wdio/devtools-service$--$devtools";
    } | {
        readonly name: "browserstack";
        readonly value: "@wdio/browserstack-service$--$browserstack";
    } | {
        readonly name: "appium";
        readonly value: "@wdio/appium-service$--$appium";
    } | {
        readonly name: "firefox-profile";
        readonly value: "@wdio/firefox-profile-service$--$firefox-profile";
    } | {
        readonly name: "crossbrowsertesting";
        readonly value: "@wdio/crossbrowsertesting-service$--$crossbrowsertesting";
    } | {
        readonly name: "eslinter-service";
        readonly value: "wdio-eslinter-service$--$eslinter";
    } | {
        readonly name: "lambdatest";
        readonly value: "wdio-lambdatest-service$--$lambdatest";
    } | {
        readonly name: "zafira-listener";
        readonly value: "wdio-zafira-listener-service$--$zafira-listener";
    } | {
        readonly name: "reportportal";
        readonly value: "wdio-reportportal-service$--$reportportal";
    } | {
        readonly name: "docker";
        readonly value: "wdio-docker-service$--$docker";
    } | {
        readonly name: "ui5";
        readonly value: "wdio-ui5-service$--$ui5";
    } | {
        readonly name: "wiremock";
        readonly value: "wdio-wiremock-service$--$wiremock";
    } | {
        readonly name: "ng-apimock";
        readonly value: "wdio-ng-apimock-service$--ng-apimock";
    } | {
        readonly name: "slack";
        readonly value: "wdio-slack-service$--$slack";
    } | {
        readonly name: "cucumber-viewport-logger";
        readonly value: "wdio-cucumber-viewport-logger-service$--$cucumber-viewport-logger";
    } | {
        readonly name: "intercept";
        readonly value: "wdio-intercept-service$--$intercept";
    } | {
        readonly name: "docker";
        readonly value: "wdio-docker-service$--$docker";
    } | {
        readonly name: "image-comparison";
        readonly value: "wdio-image-comparison-service$--$image-comparison";
    } | {
        readonly name: "novus-visual-regression";
        readonly value: "wdio-novus-visual-regression-service$--$novus-visual-regression";
    } | {
        readonly name: "rerun";
        readonly value: "wdio-rerun-service$--$rerun";
    } | {
        readonly name: "winappdriver";
        readonly value: "wdio-winappdriver-service$--$winappdriver";
    } | {
        readonly name: "ywinappdriver";
        readonly value: "wdio-ywinappdriver-service$--$ywinappdriver";
    } | {
        readonly name: "performancetotal";
        readonly value: "wdio-performancetotal-service$--$performancetotal";
    } | {
        readonly name: "cleanuptotal";
        readonly value: "wdio-cleanuptotal-service$--$cleanuptotal";
    } | {
        readonly name: "aws-device-farm";
        readonly value: "wdio-aws-device-farm-service$--$aws-device-farm";
    } | {
        readonly name: "ocr-native-apps";
        readonly value: "wdio-ocr-service$--$ocr-native-apps";
    } | {
        readonly name: "ms-teams";
        readonly value: "wdio-ms-teams-service$--$ms-teams";
    } | {
        readonly name: "tesults";
        readonly value: "wdio-tesults-service$--$tesults";
    } | {
        readonly name: "azure-devops";
        readonly value: "@gmangiapelo/wdio-azure-devops-service$--$azure-devops";
    } | {
        readonly name: "google-Chat";
        readonly value: "wdio-google-chat-service";
    } | {
        readonly name: "qmate-service";
        readonly value: "@sap_oss/wdio-qmate-service--$qmate-service";
    } | {
        readonly name: "vitaqai";
        readonly value: "wdio-vitaqai-service$--$vitaqai";
    })[];
    default: (answers: Questionnair) => ("wdio-chromedriver-service$--$chromedriver" | "wdio-geckodriver-service$--$geckodriver" | "wdio-edgedriver-service$--$edgedriver" | "@wdio/sauce-service$--$sauce" | "@wdio/testingbot-service$--$testingbot" | "@wdio/selenium-standalone-service$--$selenium-standalone" | "wdio-vscode-service$--$vscode" | "wdio-electron-service$--$electron" | "@wdio/devtools-service$--$devtools" | "@wdio/browserstack-service$--$browserstack" | "@wdio/appium-service$--$appium" | "@wdio/firefox-profile-service$--$firefox-profile" | "@wdio/crossbrowsertesting-service$--$crossbrowsertesting" | "wdio-eslinter-service$--$eslinter" | "wdio-lambdatest-service$--$lambdatest" | "wdio-zafira-listener-service$--$zafira-listener" | "wdio-reportportal-service$--$reportportal" | "wdio-docker-service$--$docker" | "wdio-ui5-service$--$ui5" | "wdio-wiremock-service$--$wiremock" | "wdio-ng-apimock-service$--ng-apimock" | "wdio-slack-service$--$slack" | "wdio-cucumber-viewport-logger-service$--$cucumber-viewport-logger" | "wdio-intercept-service$--$intercept" | "wdio-image-comparison-service$--$image-comparison" | "wdio-novus-visual-regression-service$--$novus-visual-regression" | "wdio-rerun-service$--$rerun" | "wdio-winappdriver-service$--$winappdriver" | "wdio-ywinappdriver-service$--$ywinappdriver" | "wdio-performancetotal-service$--$performancetotal" | "wdio-cleanuptotal-service$--$cleanuptotal" | "wdio-aws-device-farm-service$--$aws-device-farm" | "wdio-ocr-service$--$ocr-native-apps" | "wdio-ms-teams-service$--$ms-teams" | "wdio-tesults-service$--$tesults" | "@gmangiapelo/wdio-azure-devops-service$--$azure-devops" | "wdio-google-chat-service" | "@sap_oss/wdio-qmate-service--$qmate-service" | "wdio-vitaqai-service$--$vitaqai" | undefined)[];
    validate: (answers: string[]) => string | Boolean;
    when?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default: string;
    choices?: undefined;
    when?: undefined;
    validate?: undefined;
})[];
//# sourceMappingURL=constants.d.ts.map