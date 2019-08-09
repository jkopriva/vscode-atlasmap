/*-----------------------------------------------------------------------------------------------
 *  Copyright (c) Red Hat, Inc. All rights reserved.
 *  Licensed under the EPL License. See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------------*/
"use strict";

import * as testRunner from "vscode/lib/testrunner";

testRunner.configure({
	ui: "bdd",
	useColors: true,
	timeout: 100000,
	slow: 50000,
	reporter: 'mocha-jenkins-reporter'
});

module.exports = testRunner;
