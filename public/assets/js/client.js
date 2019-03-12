function init() {
  $('#makeMeDraggable').draggable( {
    containment: '#column middle',
    cursor: 'move',
    snap: '#content'
  } );
}
