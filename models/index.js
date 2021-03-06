/*
 * Copyright (c) 2017 TopCoder, Inc. All rights reserved.
 */
/**
 * This module contains all the events in this app.
 * Changes in 1.1:
 * - changes related to https://www.topcoder.com/challenges/30060466
 * @author TCSCODER
 * @version 1.1
 */
'use strict';

const config = require('config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const connection = mongoose.createConnection(config.MONGODB_URL);
const IssueCreatedEvent = require('./IssueCreatedEvent');
const IssueUpdatedEvent = require('./IssueUpdatedEvent');
const IssueClosedEvent = require('./IssueClosedEvent');
const CommentCreatedEvent = require('./CommentCreatedEvent');
const CommentUpdatedEvent = require('./CommentUpdatedEvent');
const UserAssignedEvent = require('./UserAssignedEvent');
const UserUnassignedEvent = require('./UserUnassignedEvent');
const PullRequestCreatedEvent = require('./PullRequestCreatedEvent');
const PullRequestClosedEvent = require('./PullRequestClosedEvent');
const LabelUpdatedEvent = require('./LabelUpdatedEvent');
const Project = require('./Project');

module.exports = {
  IssueCreatedEvent,
  IssueUpdatedEvent,
  CommentCreatedEvent,
  CommentUpdatedEvent,
  UserAssignedEvent,
  UserUnassignedEvent,
  PullRequestCreatedEvent,
  PullRequestClosedEvent,
  LabelUpdatedEvent,
  Project: connection.model('Project', Project),
  IssueClosedEvent
};
