module.exports = {
  name: 'Live Sports Mix', // unique addon name
  prefix: 'Live Sports Mix', // unique addon prefix (must be different for all addons!)
  icon: 'https://mixed-sports.pages.dev/logo.png', // set the correct domain name here so the logo is accessible
  description: 'Mixed SportsStreams', // addon description
  connLimit: false, // can be false or an integer, if set to an integer, it will show a message with "Limited to X connections."
  paginate: 100, // how many catalogs to show per page
  playlistUrl: 'http://webo.asia:80/get.php?username=newstalker&password=local&type=m3u_plus', // the URL to the M3U playlist
}