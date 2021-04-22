class Form{
constructor(){

}
display(){
  var title = createElement("h2")
  title.html("car playing game ")
  title.position(130,0)
  var input = createInput("type the name")
  var button = createButton("next")
  input.position(130,160)
  button.position(250,200)
  button.mousePressed(function(){
      input.hide()
      button.hide()
      var name = input.value();
      var greeting = createElement("h3")
      greeting.html("hello"+ name)
      greeting.position(130,100)
  }
      
  )
}
}