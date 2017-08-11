import firebase from 'firebase'
const db = firebase.database()
const magnets = db.ref('/magnets')

function addMagnet(magnetTitle){
  const magnetRef = magnets.push()
  magnetRef.set({
    title: magnetTitle,
    positionX: 100,
    positionY: 300,
    class: 'handle'
  })
}

function moveMagnet(magnetKey, positionX, positionY){
  if(!magnetKey){
    return
  }
  const magnetRef = magnets.child(magnetKey)
  magnetRef.update({
    positionX,
    positionY
  })
}

function deleteMagnet(magnetKey){
  magnets.child(magnetKey).remove()
}


export default {
  addMagnet, moveMagnet, deleteMagnet
}
