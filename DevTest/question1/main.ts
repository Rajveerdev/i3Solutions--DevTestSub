export function isValidWalk(walk: string[]) {
//declare the variables. if northsouth is +1, then Noth, -1 then South. East +1 and West -1.
let northsouth = 0, eastwest = 0;
  //If every walk takes 1 mins, then the string should have 10 entities
  if (walk.length == 10){
    
    for (let i of walk){
        if (i == 'n'){
            northsouth += 1;
        }
        else if (i == 's'){
            northsouth -= 1;
        }
        else if (i == 'e'){
            eastwest +=1;
        }
        else if (i == 'w'){
            eastwest -= 1;
        }
        else {
            //ProcessingInstruction.stdout.write("\nWrong Input Information\n")
            return false
        }
    }

  }

  else {
    return false
}
    return northsouth == 0 && eastwest == 0
}

//Now that I think about it, we are just checking if going n, s, e, w are all equal.
//so something like this (it's in python since I know it a bit better):
//  if (walk.count('n') == walk.count('s') == walk.count('e') == walk.count('w'))
//      if (len(walk) == 10)
//          return True
//  else return False

//Something like that I'm guessing