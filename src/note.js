export default class Note {
  constructor (htmlElement, sound, pos, selected) {
    this.htmlElement = htmlElement,
    this.sound = sound,
    this.pos = pos,
    this.selected = false
  }
};