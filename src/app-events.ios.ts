"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("tns-core-modules/application");
var iosApplication;
var appEventsLogger;
function initAnalytics(os, launchOptions) {
    iosApplication = application.iosApplication;
    if (os == 'ios') {
        FBSDKApplicationDelegate.initializeSDK(launchOptions);
    }
    FBSDKAppEvents.activateApp();
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
        // @ts-ignore
        var parametersDictionary = new NSDictionary(parameters.map(function (parameter) { return parameter.value; }), parameters.map(function (parameter) { return parameter.key; }));
        FBSDKAppEvents.logEventParameters(name, parametersDictionary);
    }
}
exports.logEvent = logEvent;
function setAdvertiserTrackingEnabled(advertiserTrackingEnabled) {
    return FBSDKSettings.setAdvertiserTrackingEnabled(advertiserTrackingEnabled);
}
exports.setAdvertiserTrackingEnabled = setAdvertiserTrackingEnabled;
function setAutoLogAppEventsEnabled(autoLogAppEventsEnabled) {
    FBSDKSettings.autoLogAppEventsEnabled = autoLogAppEventsEnabled;
    FBSDKSettings.advertiserIDCollectionEnabled = autoLogAppEventsEnabled;
}
exports.setAutoLogAppEventsEnabled = setAutoLogAppEventsEnabled;
