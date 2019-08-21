const passport = require('passport');
const Tr = require('../models/Tr');
const validator = require('express-validator');


/*
Before we define our routes, we'll first create all the dummy/skeleton callback functions
that they will invoke. The callbacks will be stored in separate "controller" modules for
Tr (you can use any file/module structure, but
this seems an appropriate granularity for this project). Start by creating a folder for
our controllers in the project root(/controllers) and then create separate controller
files/modules for handling each of the models:
*/

exports.index = function vi(req, res) {
  res.send('NOT IMPLEMENTED: This page will host the catalog of 871m transactions');
};

// Display list of all transactions (Tr).
exports.trList = function tl(req, res) {
  res.send('NOT IMPLEMENTED: Transaction list');
};

// Display detail page for a specific transaction.
exports.trDetail = function td(req, res) {
  res.send(`NOT IMPLEMENTED: Transactions details ${req.params.id}`);
};

// Display transaction create form on GET.
exports.trCreateGet = function tcg(req, res) {
  res.send('NOT IMPLEMENTED: Transaction create GET');
};

// Handle transaction create on POST.
exports.trCreatePost = function tcp(req, res) {
  res.send('NOT IMPLEMENTED: Transaction create POST');
};

// Display transaction delete form on GET.
exports.trDeleteGet = function tdg(req, res) {
  res.send('NOT IMPLEMENTED: Transaction delete GET');
};

// Handle transaction delete on POST.
exports.trDeletePost = function tdp(req, res) {
  res.send('NOT IMPLEMENTED: Transaction delete POST');
};

// Display transaction update form on GET.
exports.trUpdateGet = function tug(req, res) {
  res.send('NOT IMPLEMENTED: Transaction update GET');
};

// Handle book update on POST.
exports.trUpdatePost = function tup(req, res) {
  res.send('NOT IMPLEMENTED: Transaction update POST');
};
