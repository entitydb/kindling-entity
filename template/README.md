# __entity__

[![server tests](https://travis-ci.org/__author__/__entity__.png)](https://travis-ci.org/__author__/__entity__)
[![npm version](https://badge.fury.io/js/entitydb-__entity__.png)](https://npmjs.org/package/entitydb-__entity__)
[![dependency status](https://david-dm.org/__author__/__entity__.png)](https://david-dm.org/__author__/__entity__)
[![devDependency status](https://david-dm.org/__author__/__entity__/dev-status.png)](https://david-dm.org/__author__/__entity__#info=devDependencies)

[![browser tests](https://ci.testling.com/__author__/__entity__.png)](https://ci.testling.com/__author__/__entity__)

## how to

### install

```
npm install --save entitydb-__entity__
```

### use

```
var level = require('level');
var db = level('./db');
var __Entity__ = require('__entity__');
var __entity__DB = __Entity__(db);
```

#### __entity__DB.get(id, callback)

#### __entity__DB.put(__entity__, callback)

#### __entity__DB.del(id, callback)

### develop

```
git clone https://github.com/__author__/__entity__
npm install
```

hack away!

### test

```
npm test
```

## license

__license__