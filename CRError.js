function MyError(msg){
    this.name="MyError";
    this.message = msg || "自定义异常的默认消息";
  }
  MyError.prototype = Object.create(Error.prototype);
  MyError.prototype.constructor = MyError
  try{
    throw new MyError()
  }catch(e){
    console.log(e.name+":"+e.message)
  newlensClient.notify(e,{'key':'a123_keyValue_@&#%_\n_\\'})
  alert(e)
  }