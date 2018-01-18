function currentSong(songInfo) {
    const PrintSong = `Now Playing: {0} - {1} [{2}]`;

    let author = songInfo[1];
    let songName = songInfo[0];
    let timeLength = songInfo[2]; 

    console.log(PrintSong.format(author, songName, timeLength));
    //for judge: console.log(`Now Playing: ${author} - ${songName} [${timeLength}]`)
}

if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
      });
    };
  }
  
currentSong(['Number One', 'Nelly', '4:09'])