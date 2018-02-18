/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.getElementById('camera').addEventListener('touchend', function () {

            // We added camera with 'cordova plugin add cordova-plugin-camera' and device camera became available in
            // global scope 'navigator' as described in official doc
            navigator.camera.getPicture(onSuccess, onFail, {
              quality: 50,
              sourceType: Camera.PictureSourceType.CAMERA,
              destinationType: Camera.DestinationType.FILE_URI
            });
        })
        document.getElementById('gallery').addEventListener('touchend', function () {
            navigator.camera.getPicture(onSuccess, onFail, {
              quality: 50,
              // The only difference here is the 'PHOTOLIBRARY' const instead of 'CAMERA'
              sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: Camera.DestinationType.FILE_URI
          });


        })
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    onSuccess: function(imageData) {
        console.log('success');
        var image = document.getElementById('myImage');
        image.src = imageData;
        console.log(imageData);
    },

    onFail: function(message) {
        alert('Failed because: ' + message);
    }
};

function onSuccess(imageData) {
  console.log('success');
  var image = document.getElementById('myImage');
  image.src = imageData;
  console.log(imageData);
}

function onFail(message) {
  alert('Failed because: ' + message);
}

app.initialize();