'use strict';

class Question {
  constructor (content){
    this.content = content;
    this.save();
  }

  save(){
    this.constructor._All.push(this);
  }

  static All(){
    return Question._All;
  }

  static Find(id) {
    return this.All()[id-1]
  }

}

Question._All = []
