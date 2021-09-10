"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("tns-core-modules/application");
var iosApplication;
var appEventsLogger;
function initAnalytics(os, launchOptions) {
    iosApplication = application.iosApplication;
    if (os == 'ios') {
        //FBSDKApplicationDelegate.initializeSDK(launchOptions);
        FBAudienceNetworkAds.initialize();
    }
    FBSDKAppEvents.activateApp();
    FBSDKApplicationDelegate.initializeSDK(launchOptions);
}
exports.initAnalytics = initAnalytics;
function logEvent(name, parameters) {
    if (name === undefined) {
        throw ("Argument 'name' is missing");
    }
    if (parameters === undefined) {
        FBSDKAppEvents.logEvent(name);
    }
    else {
        var parametersDictionary = new NSDictionary(parameters.map(function (parameter) { return parameter.value; }), parameters.map(function (parameter) { return parameter.key; }));
        FBSDKAppEvents.logEventParameters(name, parametersDictionary);
    }
}
exports.logEvent = logEvent;
function setAdvertiserTrackingEnabled(advertiserTrackingEnabled, launchOptions) {
    return FBAdSettings.setAdvertiserTrackingEnabled(advertiserTrackingEnabled);
}
exports.setAdvertiserTrackingEnabled = setAdvertiserTrackingEnabled;
