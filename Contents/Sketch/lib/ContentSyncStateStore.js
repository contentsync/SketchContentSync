/*
ContentSyncStateStore
---------------------

Stores state for a given contentsync command run.

High Level Commands:
  + version() -> returns persistent stored version
  + version(v) -> sets and returns new persistent stored version v
  + data_version() -> returns version of data from stored version and data

Low Level commands:
  Temporary Store:
    + get(key) - get temporary value for key
    + set(key, value) - set temporary key to value

  Persistent Store:
    + store(key, value) - set persistent key to value
    + retrieve(key) - get persistent value for key

*/

var ContentSyncStateStore = function(){

  /*
  HIGH LEVEL data access for common use cases
  */
  this.version = function(v){
    if(v){
      return this.store('contentsync.google.version', v);
    }
    return this.retrieve('contentsync.google.version');
  };

  this.data_version = function(){
    var data = this.get('synckeys');
    return data[this.version()];
  };

  /*
  BASE LEVEL SET/GET and STORE/RETREIVE methods for data handling
  */
  // Set / Get for TEMPORARY STORE - for this sketchplugin action only
  this.set = function(key, value){
    this.temporary_cache[key] = value;
    return value;
  };

  this.get = function(key){
    return this.temporary_cache[key];
  };

  // Store / Retrieve for PERSISTENT STORE - for following sketchplugin actions
  this.store = function(key, value){
    this.persistent_store[key] = value;
    return value;
  };

  this.retrieve = function(key){
    return this.persistent_store[key];
  }

  // Initializer helpers
  this.createTemporaryStore = function(){
    var tdict = [[NSMutableDictionary alloc] init];
    tdict['synckeys'] = [[NSMutableDictionary alloc] init];
    tdict['symbolmap'] = [[NSMutableDictionary alloc] init];
    return tdict;
  };

  this.createPersistentStore = function(){
    var pdict = NSThread.mainThread().threadDictionary();
    if(!pdict['sync']){
      pdict['sync'] = [[NSMutableDictionary alloc] init];
    }

    // Metadata for connection settings
    if(!pdict['sync']['connection']){
      pdict['sync']['connection'] = [[NSMutableDictionary alloc] init];
    }
    return pdict;
  };

  this.temporary_cache = this.createTemporaryStore();
  this.persistent_store = this.createPersistentStore();

  return this;
};
