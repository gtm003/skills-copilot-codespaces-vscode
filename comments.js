// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer