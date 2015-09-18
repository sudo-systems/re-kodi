ReKodi.value('defaultSettings', {
  connection: {
    hostAddress: '127.0.0.1',
    jsonRpcPort: '9090',
    httpPort: '8080',
    macAddress: '',
    username: 'kodi',
    password: ''
  }
});

ReKodi.value('requestProperties', {
  files: {
    video: ['file', 'thumbnail', 'genre', 'plotoutline', 'rating', 'year'],
    audio: ['file']
  },
  addons: {
    audio: ['name', 'summary', 'thumbnail', 'fanart', 'enabled']
  }
});
