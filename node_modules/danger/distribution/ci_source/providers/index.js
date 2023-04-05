"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realProviders = exports.providers = void 0;
var AppCenter_1 = require("./AppCenter");
var Bamboo_1 = require("./Bamboo");
var BitbucketPipelines_1 = require("./BitbucketPipelines");
var Bitrise_1 = require("./Bitrise");
var BuddyBuild_1 = require("./BuddyBuild");
var BuddyWorks_1 = require("./BuddyWorks");
var Buildkite_1 = require("./Buildkite");
var Circle_1 = require("./Circle");
var Cirrus_1 = require("./Cirrus");
var CodeBuild_1 = require("./CodeBuild");
var Codefresh_1 = require("./Codefresh");
var Codeship_1 = require("./Codeship");
var Codemagic_1 = require("./Codemagic");
var Concourse_1 = require("./Concourse");
var DockerCloud_1 = require("./DockerCloud");
var Drone_1 = require("./Drone");
var Fake_1 = require("./Fake");
var GitHubActions_1 = require("./GitHubActions");
var GitLabCI_1 = require("./GitLabCI");
var Jenkins_1 = require("./Jenkins");
var Netlify_1 = require("./Netlify");
var Nevercode_1 = require("./Nevercode");
var Screwdriver_1 = require("./Screwdriver");
var Semaphore_1 = require("./Semaphore");
var Surf_1 = require("./Surf");
var TeamCity_1 = require("./TeamCity");
var Travis_1 = require("./Travis");
var VSTS_1 = require("./VSTS");
var XcodeCloud_1 = require("./XcodeCloud");
var providers = [
    Fake_1.FakeCI,
    GitHubActions_1.GitHubActions,
    GitLabCI_1.GitLabCI,
    Travis_1.Travis,
    Circle_1.Circle,
    Semaphore_1.Semaphore,
    Nevercode_1.Nevercode,
    Jenkins_1.Jenkins,
    Surf_1.Surf,
    DockerCloud_1.DockerCloud,
    Codeship_1.Codeship,
    Drone_1.Drone,
    Buildkite_1.Buildkite,
    BuddyBuild_1.BuddyBuild,
    BuddyWorks_1.BuddyWorks,
    VSTS_1.VSTS,
    Bitrise_1.Bitrise,
    TeamCity_1.TeamCity,
    Screwdriver_1.Screwdriver,
    Concourse_1.Concourse,
    Netlify_1.Netlify,
    CodeBuild_1.CodeBuild,
    Codefresh_1.Codefresh,
    AppCenter_1.AppCenter,
    BitbucketPipelines_1.BitbucketPipelines,
    Cirrus_1.Cirrus,
    Bamboo_1.Bamboo,
    Codemagic_1.Codemagic,
    XcodeCloud_1.XcodeCloud,
];
exports.providers = providers;
// Mainly used for Dangerfile linting
var realProviders = [
    GitHubActions_1.GitHubActions,
    GitLabCI_1.GitLabCI,
    Travis_1.Travis,
    Circle_1.Circle,
    Semaphore_1.Semaphore,
    Nevercode_1.Nevercode,
    Jenkins_1.Jenkins,
    Surf_1.Surf,
    DockerCloud_1.DockerCloud,
    Codeship_1.Codeship,
    Drone_1.Drone,
    Buildkite_1.Buildkite,
    BuddyBuild_1.BuddyBuild,
    BuddyWorks_1.BuddyWorks,
    VSTS_1.VSTS,
    TeamCity_1.TeamCity,
    Screwdriver_1.Screwdriver,
    Concourse_1.Concourse,
    Netlify_1.Netlify,
    CodeBuild_1.CodeBuild,
    Codefresh_1.Codefresh,
    AppCenter_1.AppCenter,
    Cirrus_1.Cirrus,
    Bamboo_1.Bamboo,
    Codemagic_1.Codemagic,
    XcodeCloud_1.XcodeCloud,
];
exports.realProviders = realProviders;
//# sourceMappingURL=index.js.map